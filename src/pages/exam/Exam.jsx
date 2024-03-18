import {
  Button,
  Radio,
  RadioGroup,
  Skeleton,
  Spinner,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GitQuistion from "../../Hooks/student/GitQuistion";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";
import { toast } from "react-toastify";
import baseUrl from "../../api/baseUrl";

const Exam = () => {
  const { examId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [questionsLoading, questions] = GitQuistion({
    id: examId,
  });
  const examquestions = questions.questions;
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const [userAnswers, setUserAnswers] = useState([]);

  const areAllQuestionsAnswered = () => {
    return examquestions.every((question) => {
      return userAnswers.some((ans) => ans.qid === question.id);
    });
  };
  // Function to update user answers
  const handleSelectAnswer = (questionId, selectedAnswer) => {
    // Check if the question is already in the userAnswers array
    const existingAnswerIndex = userAnswers.findIndex(
      (answer) => answer.qid === questionId
    );

    // If the question is not in the array, add it
    if (existingAnswerIndex === -1) {
      setUserAnswers((prevAnswers) => [
        ...prevAnswers,
        { qid: questionId, ans: selectedAnswer },
      ]);
    } else {
      // If the question is already in the array, update the answer
      setUserAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingAnswerIndex].ans = selectedAnswer;
        return updatedAnswers;
      });
    }
  };

  const handlesendExam = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await baseUrl.post(
        `api/user/getResult`,
        {
          answers: userAnswers,
          exam_id: examId,
        },
        {
          headers: {
            token: token,
          },
        }
      );
      setResult(response.data);
      toast.success("تم   انهاء الامتحان  بنجاح");
    } catch (error) {
      console.error("Error creating code:", error);
      toast.error("فشل انشاء الاكواد ");
    } finally {
      setLoading(false);
      onOpen();
    }
  };

  if (questionsLoading) {
    return (
      <Stack className="w-[90%] m-auto mt-[150px]" style={{ height: "60vh" }}>
        <Skeleton height="20px" className="mt-5" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <ScrollToTop />
      </Stack>
    );
  }

  if (!Array.isArray(examquestions)) {
    return <div>Error: Invalid data format</div>;
  }

  return (
    <div className="mt-[150px]" style={{ minHeight: "60vh" }}>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold"
              className="flex justify-between"
            >
              <h1> نتيجة امتحانك !</h1>
              <Button
                colorScheme="red"
                onClick={() => {
                  window.location.reload(), onClose();
                }}
                ml={3}
              >
                x
              </Button>
            </AlertDialogHeader>

            <AlertDialogBody className="font-bold">
              <h1>
                {" "}
                الدرجة : {result.result}/{result.total}
              </h1>
              {result.wrongQuestions ? (
                <div>
                  {" "}
                  {result.wrongQuestions.length !== 0 ? (
                    <div>
                      <h1 className="my-5">الاسئلة الخطاء !!</h1>
                      {result.wrongQuestions.map((worn, index) => {
                        return (
                          <div key={index}>
                            <div>
                              <h1>
                                {" "}
                                {index + 1} -{worn.question}
                              </h1>
                              <h1 className="h-[30px] w-[100%] bg-red-500 flex justify-center items-center text-white my-3">
                                {worn.useranswer}
                              </h1>
                              <h1 className="h-[30px] w-[100%] bg-green-500 flex justify-center items-center text-white my-3">
                                {worn.correctanswer}
                              </h1>
                            </div>
                          </div>
                        );
                      })}{" "}
                    </div>
                  ) : (
                    <div className="mt-4">
                      <h1> عاش استمر يا بطل 🥳👏</h1>
                    </div>
                  )}{" "}
                </div>
              ) : (
                <div></div>
              )}
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
          
      </AlertDialog>
      <div className="flex justify-center">
        <div className="ribbon2">
          <h1 className="font-bold mx-4 m-2 text-white">{questions.name}</h1>
        </div>
      </div>
      <div>
        {questions.questions ? (
          <div>
            {examquestions.map((question, index) => {
              return (
                <div key={question.id} className="my-5  w-[90%] m-auto">
                  <div>
                    <h1 className="font-bold">
                      {" "}
                      {index + 1}- {question.question}
                    </h1>
                    <div className="flex justify-between items-center">
                      <div>
                        <RadioGroup
                          value={
                            userAnswers.find((ans) => ans.id === question.id)
                              ?.ans
                          }
                          onChange={(value) =>
                            handleSelectAnswer(question.id, value)
                          }
                        >
                          <Stack className="block">
                            <Radio value={question.answer1}>
                              {question.answer1}
                            </Radio>
                            <Radio value={question.answer2}>
                              {question.answer2}
                            </Radio>
                            <Radio value={question.answer3}>
                              {question.answer3}
                            </Radio>
                            <Radio value={question.answer4}>
                              {question.answer4}
                            </Radio>
                          </Stack>
                        </RadioGroup>
                      </div>
                      <div>
                        {question.image ? (
                          <img
                            src={question.image}
                            className="h-[200px ] w-[200px] "
                            alt="Question"
                          />
                        ) : null}
                      </div>
                    </div>
                            {" "}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div> لا يوجد اسئلة </div>
        )}
      </div>
      <div className="text-center">
        <Button
          isDisabled={!areAllQuestionsAnswered() || loading}
          onClick={handlesendExam}
          colorScheme="blue"
        >
          {loading ? <Spinner /> : "        انهاء الامتحان"}
        </Button>
      </div>
    </div>
  );
};

export default Exam;
