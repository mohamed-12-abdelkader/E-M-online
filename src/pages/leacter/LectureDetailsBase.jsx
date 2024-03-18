import {
  Button,
  Skeleton,
  Spinner,
  Stack,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { FaVideo } from "react-icons/fa6";
import { FaPhotoVideo } from "react-icons/fa";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";
import UserType from "../../Hooks/auth/userType";
import { GoArrowLeft } from "react-icons/go";
import DeleateExam from "../../Hooks/teacher/DeleateExam";
import DeleateExamG from "../../Hooks/teacher/DeleateExamG";
import React, { useState } from "react";
import DeleateVedio from "../../Hooks/teacher/DeleateVedio";
import DeleateCenterVedio from "../../Hooks/teacher/DeleateCenterVedio";
const LectureDetailsBase = ({
  lectures,
  lecturesT,
  videosToMap,
  lectureLoading,
  lectureTLoading,
  id,
}) => {
  const [userData, isAdmin, isTeacher, student] = UserType();
  const [deleteLoading, deleteExams] = DeleateExam();
  const [deleteGLoading, deleteExamsG] = DeleateExamG();
  const [deleteVedioLoading, deletVedio] = DeleateVedio();
  const [deleteVedioCenterLoading, deletVedioCenter] = DeleateCenterVedio();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [selectedVedio, setSelectedVedio] = useState(null);
  if (lectureLoading || lectureTLoading) {
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

  return (
    <div style={{ minHeight: "60vh" }}>
      <div className="w-[90%] m-auto md:flex justify-between items-center ">
        <img
          src={lecturesT.image || lectures.image}
          className="h-[250px] w-[350px]"
          style={{ borderRadius: "20px" }}
        />
        <div className="flex justify-center my-3">
          <div className="ribbon2 flex justify-center">
            <h1 className="font-bold  m-3 text-white">
              {" "}
              {lectures.description || lecturesT.description}
            </h1>
          </div>
        </div>
      </div>
      <Outlet />
      <div className="w-[90%] m-auto border shadow my-[50px] h-auto  p-5">
        <div>
          <h1 className="flex font-bold text-xl">
            <FaVideo className="m-2 text-red-500" />
            محتوى المحاضرة
          </h1>
        </div>
        {videosToMap.length > 0 ? (
          <div>
            {videosToMap.map((video) => (
              <div
                key={video.id}
                className="w-[100%] border shadow  my-5 p-3 flex justify-between items-center"
              >
                <h1 className="font-bold"> {video.v_name} </h1>
                <div className="md:flex">
                  <Link to={`/video/${video.id}`}>
                    <Button
                      colorScheme="blue"
                      variant="outline"
                      className="m-2"
                    >
                      {" "}
                      شاهد الفيديو{" "}
                    </Button>
                  </Link>
                  {isTeacher ? (
                    <div>
                      {" "}
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          setSelectedVedio(video);
                          onOpen();
                        }}
                        className="m-2"
                      >
                        حذف الفيديو
                      </Button>
                      <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                      >
                        <AlertDialogOverlay>
                          <AlertDialogContent>
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                              حذف فيديو
                            </AlertDialogHeader>

                            <AlertDialogBody>
                              {selectedVedio && (
                                <h1 className="font-bold ">
                                  هل بالتاكيد تريد حذف {selectedVedio.v_name} ؟
                                </h1>
                              )}
                            </AlertDialogBody>

                            <AlertDialogFooter>
                              <Button
                                ref={cancelRef}
                                onClick={onClose}
                                className="mx-1"
                              >
                                الغاء
                              </Button>
                              <Button
                                colorScheme="red"
                                onClick={() => {
                                  if (lecturesT) {
                                    if (
                                      lecturesT.price ||
                                      lecturesT.price == 0
                                    ) {
                                      deletVedio(selectedVedio.id);
                                    } else {
                                      deletVedioCenter(selectedVedio.id);
                                    }
                                  }
                                }}
                                ml={3}
                                className="mx-1"
                              >
                                {deleteVedioLoading ||
                                deleteVedioCenterLoading ? (
                                  <Spinner />
                                ) : (
                                  "نعم حذف "
                                )}
                              </Button>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialogOverlay>
                      </AlertDialog>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center flex justify-center my-3 ">
            {isTeacher ? (
              <h1 className="font-bold flex">
                {" "}
                لا يوجد محتوى للمحاضرة{" "}
                <GoArrowLeft className="m-1 text-red-500 text-xl" />
                <Link to={`/admin/add_video`}>
                  <span className="text-red-500">اضف المحتوى الان </span>
                </Link>
              </h1>
            ) : (
              <h1 className="font-bold flex ">
                <FaPhotoVideo className="m-1 text-red-500 text-xl " />
                سوف يتم اضافة محتوى المحاضرة قريبا{" "}
              </h1>
            )}
          </div>
        )}
        {lectures.exam_name || lecturesT.exam_name ? (
          <div className="w-[100%] border shadow h-[80px] my-5 p-3 flex justify-between items-center">
            <div>
              <h1 className="font-bold my-2">
                {" "}
                {lectures.exam_name || lecturesT.exam_name}{" "}
              </h1>
              {lectures.last_result ? (
                <h1 className="font-bold my-2">
                  {" "}
                  درجتك : {lectures.last_result}{" "}
                </h1>
              ) : null}
            </div>
            <div className="flex">
              <Link
                to={
                  isTeacher
                    ? `/teacher_exam/${lecturesT.exam_id || lectures.exam_id}`
                    : `/exam/${lectures.exam_id}`
                }
                // to={`/exam/${lecturesT.exam_id || lectures.exam_id}`}
                className="mx-1"
              >
                <Button colorScheme="orange" variant="outline">
                  {" "}
                  ادخل الامتحان{" "}
                </Button>
              </Link>
              {isTeacher ? (
                <div>
                  <Button
                    colorScheme="red"
                    className="mx-1"
                    onClick={() => {
                      if (lecturesT) {
                        if (lecturesT.price || lecturesT.price == 0) {
                          deleteExams(id);
                        } else {
                          deleteExamsG(id);
                        }
                      }
                    }}
                  >
                    {deleteGLoading || deleteLoading ? (
                      <Spinner />
                    ) : (
                      " حذف الامتحان"
                    )}
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LectureDetailsBase;
