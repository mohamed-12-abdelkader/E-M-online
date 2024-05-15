import { MdCancelPresentation } from "react-icons/md";
import { FaFileVideo } from "react-icons/fa6";
import { BiBook } from "react-icons/bi";
import {
  Card,
  CardBody,
  Button,
  Stack,
  Skeleton,
  AlertDialog,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";

import { Link, useParams } from "react-router-dom";
import GitTeacherDetails from "../../Hooks/teacher/GitTeacherDetails";
import GitLecture from "../../Hooks/student/GitLecture";
import React, { useState } from "react";
import { Zoom, Slide } from "react-awesome-reveal";
import BuyLecture from "../../Hooks/student/BuyLecture";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";
import GitMonthes from "../../Hooks/student/GitMonths";
const TeacherDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const { id } = useParams();
  const [teacherLoading, teacher] = GitTeacherDetails({ id });
  const [lectureLoading, lectures] = GitLecture({ id });
  const [monthes, monthesLoading] = GitMonthes({ id });
  const [buyLoading, buyLecture, buyMonth] = BuyLecture();
  const [selectedLecture, setSelectedLecture] = useState(null);
  if (teacherLoading || lectureLoading || monthesLoading) {
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
  if (!teacher || teacher.teacher.length === 0) {
    return (
      <div className="mt-[150px] text-center" style={{ minHeight: "70vh" }}>
        <div className=" h-[200px] w-[90%] m-auto border shadow flex justify-center items-center ">
          <p className="font-bold "> هذا المدرس غير موجود على الموقع</p>
        </div>
      </div>
    );
  }

  console.log(teacher.months);
  return (
    <div className="mt-[80px]">
      <div
        className="header header2 h-[200px] w-[100%]  mb-5 bg-blue-500"
        style={{ description: "rt" }}
      >
        <div className="flex justify-center items-center h-[150px]">
          <div className="text-center">
            <h1 className="fonts font-bold text-xl text-white">
              {" "}
              منهج ال {teacher.teacher.subject} مع {teacher.teacher.name}
            </h1>
          </div>
        </div>

        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      <div className=" m-auto mx-auto">
        <div className="text-center m-auto md:flex justify-between my-[50px]">
          <div className="flex justify-center m-auto w-[80%]  md:w-[50%]">
            <Zoom>
              <img
                src={teacher.teacher.image}
                className="h-[280px] w-[400px] m-3 m-auto"
                style={{ borderRadius: "20px" }}
              />
            </Zoom>
          </div>
          <div className="mt-[50px] w-[80%]">
            <div className="">
              <h1 className="fonts font-bold">{teacher.teacher.description}</h1>
            </div>
            <div className="flex my-2 flex-wrap justify-center ">
              <Zoom>
                <div className="h-[50px] border w-[220px] m-2 flex  items-center p-2">
                  <img
                    src={teacher.teacher.image}
                    className="h-[30px] w-[30px] m-3 "
                  />

                  <h1 className="font-bold m-1 ">أ/{teacher.teacher.name} </h1>
                </div>
              </Zoom>
              <Zoom>
                <div className="h-[50px] border w-[220px] m-2 flex  items-center p-2">
                  <h1 className="font-bold flex">
                    <BiBook className="m-1 text-blue-500 " />
                    المادة:{teacher.teacher.subject}
                  </h1>
                </div>
              </Zoom>
            </div>
          </div>
        </div>

        <div className="  m-auto border shadow p-5 bg-[#00204a]">
          <div className="my-5">
            <h1 className="font-bold flex text-xl text-white">
              <FaFileVideo className="m-1 text-red-500" />
              كل الكورسات
            </h1>
          </div>
          <div className="">
            {teacher.months && teacher.months.length > 0 ? (
              <div
                className="flex flex-wrap my-3 bg-white w-[95%] m-auto p-3"
                style={{ borderRadius: "20px" }}
              >
                {teacher.months.map((lectre) => {
                  return (
                    <Zoom key={lectre.id}>
                      <Card
                        className="  my-3 mx-2 md:w-[320px]"
                        style={{ border: "solid 2px #ccc" }}
                      >
                        <CardBody>
                          <img
                            src={lectre.image}
                            className="h-[220px] w-[100%]"
                            alt="Green double couch with wooden legs"
                          />
                          <div className="my-2 flex justify-between">
                            <h1 className="font-bold text-blue-500">
                              {" "}
                              {lectre.description}{" "}
                            </h1>
                          </div>
                          <div
                            spacing="3"
                            className="flex justify-between mt-4"
                          >
                            <div>
                              <h1 className="font-bold">
                                عدد المحاضرات :{lectre.noflecture}{" "}
                              </h1>
                            </div>
                            <h1 className="font-bold"> {lectre.price} جنية </h1>
                          </div>
                        </CardBody>
                        <hr />

                        <div className="my-3 text-center">
                          {lectre.open ? (
                            <Link to={`/month/${lectre.id}`}>
                              <Button
                                colorScheme="blue"
                                variant="outline"
                                className="w-[90%] m-auto"
                              >
                                دخول للكورس{" "}
                              </Button>
                            </Link>
                          ) : (
                            <div>
                              {" "}
                              <Button
                                variant="solid"
                                colorScheme="blue"
                                className="w-[90%] m-auto"
                                onClick={() => {
                                  setSelectedLecture(lectre);
                                  onOpen();
                                }}
                              >
                                شراء الكورس
                              </Button>
                              <AlertDialog
                                isOpen={isOpen}
                                leastDestructiveRef={cancelRef}
                                onClose={onClose}
                              >
                                <AlertDialogOverlay>
                                  <AlertDialogContent className="p-2">
                                    <AlertDialogHeader
                                      fontSize="lg"
                                      fontWeight="bold"
                                    >
                                      شراء الكورس
                                    </AlertDialogHeader>

                                    <div>
                                      {selectedLecture && (
                                        <>
                                          <h1 className="font-bold m-3 ">
                                            - هل بالتأكيد تريد شراء{" "}
                                            {selectedLecture.description}؟
                                          </h1>
                                          <h1 className="font-bold m-3 ">
                                            - سوف يتم خصم{" "}
                                            {selectedLecture.price} جنية من
                                            محفظتك ثمن الكورس
                                          </h1>
                                          <h1 className="font-bold m-3 text-red-500 ">
                                            - تاكد من عملية الشراء جيدا قبل
                                            اتمامها لان المنصة غير مسئولة عن اى
                                            عملية شراء خطاء
                                          </h1>

                                          <div style={{ direction: "ltr" }}>
                                            <Button
                                              ref={cancelRef}
                                              colorScheme="red"
                                              onClick={onClose}
                                              className="m-1"
                                            >
                                              الغاء
                                            </Button>
                                            <Button
                                              colorScheme="blue"
                                              ml={3}
                                              className="m-1"
                                              onClick={() => {
                                                buyMonth(selectedLecture.id);
                                              }}
                                              isDisabled={buyLoading}
                                            >
                                              {buyLoading ? (
                                                <Spinner />
                                              ) : (
                                                "نعم شراء"
                                              )}
                                            </Button>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  </AlertDialogContent>
                                </AlertDialogOverlay>
                              </AlertDialog>
                            </div>
                          )}
                        </div>
                      </Card>
                    </Zoom>
                  );
                })}
              </div>
            ) : (
              <div>
                <div
                  className="h-[200px] flex justify-center items-center bg-white"
                  style={{ borderRadius: "20px" }}
                >
                  <h1 className="font-bold flex text-xl ">
                    <MdCancelPresentation className="text-red-500 m-2" />
                    لا يوجد كورسات الان سوف يتم اضافتها فى اقرب وقت ممكن{" "}
                  </h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default TeacherDetails;
