import React, { useState } from "react";
import {
  Button,
  Skeleton,
  useDisclosure,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GitQuistion from "../../Hooks/student/GitQuistion";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";
import { toast } from "react-toastify";
import baseUrl from "../../api/baseUrl";

import Question from "../../components/exam/Question";
import Pagination from "../../components/exam/Pagination ";
import ExamResult from "../../components/exam/ExamResult ";

const Exam = () => {
  const { examId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [questionsLoading, questions] = GitQuistion({ id: examId });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const token = localStorage.getItem("token");
  const examQuestions = questions?.questions || [];

  const currentQuestion = examQuestions[currentQuestionIndex];

  // وظائف المساعد
  const handleSelectAnswer = (questionId, selectedAnswer) => {
    const existingAnswerIndex = userAnswers.findIndex(
      (answer) => answer.qid === questionId
    );

    if (existingAnswerIndex === -1) {
      setUserAnswers((prevAnswers) => [
        ...prevAnswers,
        { qid: questionId, ans: selectedAnswer },
      ]);
    } else {
      setUserAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingAnswerIndex].ans = selectedAnswer;
        return updatedAnswers;
      });
    }
  };

  const handleSendExam = async (e) => {
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
      toast.success("تم إنهاء الامتحان بنجاح");
    } catch (error) {
      console.error("Error sending exam:", error);
      toast.error("فشل إرسال الامتحان");
    } finally {
      setLoading(false);
      onOpen();
    }
  };

  // التنقل بين الأسئلة
  const handleNextQuestion = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handlePageChange = (index) => {
    setCurrentQuestionIndex(index);
  };

  if (questionsLoading) {
    return (
      <div className="flex items-center" style={{ minHeight: "80vh" }}>
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      </div>
    );
  }

  return (
    <div className="mt-[150px]" style={{ minHeight: "60vh" }}>
      {/* عرض نتيجة الامتحان */}
      <ExamResult
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
        result={result}
      />

      {/* عرض عنوان الامتحان */}
      <div className="flex justify-center">
        <div className="ribbon2">
          <h1 className="font-bold mx-4 m-2 text-white">{questions.name}</h1>
        </div>
      </div>

      {/* عرض السؤال الحالي */}
      {currentQuestion ? (
        <Question
          currentQuestion={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          userAnswers={userAnswers}
          handleSelectAnswer={handleSelectAnswer}
        />
      ) : (
        <div>لا يوجد أسئلة</div>
      )}

      {/* عرض الباجنيشن والتنقل بين الصفحات */}
      <Pagination
        currentQuestionIndex={currentQuestionIndex}
        examQuestions={examQuestions}
        handlePreviousQuestion={handlePreviousQuestion}
        handleNextQuestion={handleNextQuestion}
        handlePageChange={handlePageChange}
      />

      {/* زر إرسال الامتحان */}
      {currentQuestionIndex === examQuestions.length - 1 && (
        <Button
          isDisabled={loading || userAnswers.length !== examQuestions.length}
          onClick={handleSendExam}
          colorScheme="blue"
          className="mt-4"
        >
          {loading ? <Spinner /> : "انهاء الامتحان"}
        </Button>
      )}
      <ScrollToTop />
    </div>
  );
};

export default Exam;
