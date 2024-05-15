import { Link, useParams } from "react-router-dom";
import GitLectureDetails from "../../Hooks/student/GitLectureDetails";
import GitLecturTdetails from "../../Hooks/teacher/GitLecturTdetails";
import { FaFilePdf } from "react-icons/fa";
import { FaFileVideo } from "react-icons/fa6";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";

import { FaClipboardQuestion } from "react-icons/fa6";
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
} from "@chakra-ui/react";
import { FaPhotoVideo } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import UserType from "../../Hooks/auth/userType";
import DeleateExam from "../../Hooks/teacher/DeleateExam";
import { MdDelete } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import React, { useState } from "react";
import DeleateCenterVedio from "../../Hooks/teacher/DeleateCenterVedio";
import { MdOutlineDeleteOutline } from "react-icons/md";
import DeleateExamG from "../../Hooks/teacher/DeleateExamG";
import DeleatPdf from "../../Hooks/teacher/DeleatPdf";
import GitLectureCenterDetails from "../../Hooks/student/GitLectureCenterDetails";
import { RiLogoutBoxRFill } from "react-icons/ri";
const LecturDetails = () => {
  const { id } = useParams();
  const [lectureLoading, lectures] = GitLectureCenterDetails({ id: id });
  const [lectureTLoading, lecturesT] = GitLecturTdetails({ id: id });
  const [userData, isAdmin, isTeacher, student] = UserType();
  const videosToMap = lectures?.videos || lecturesT?.videos || [];

  const [deleteVedioCenterLoading, deletVedioCenter] = DeleateCenterVedio();
  const [deleteGLoading, deleteExamsG] = DeleateExamG();
  const [deletePdfLoading, deletPdf] = DeleatPdf();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [selectedVedio, setSelectedVedio] = useState(null);

  const pdfsToMap = lectures.pdfs || lecturesT.pdfs || [];
  // تحقق من حالة التحميل واستخدام الهيكل العظمي عند الحاجة
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
  console.log(lectures);
  return (
    <div className="mt-[150px]">
      <div className="mt-[120px]" style={{ minHeight: "80vh" }}>
        <img
          src={lecturesT.image || lectures.image}
          className="w-[90%] m-auto h-[400px]"
          alt="Image"
          style={{ borderRadius: "20px" }}
        />

        <div className="w-[90%]  border shadow my-[70px] m-auto p-3">
          <div className="flex font-bold text-xl">
            <FaFileVideo className="text-red-500 m-2" />
            <h1>محتوى المحاضرة</h1>
          </div>
          <hr className="w-[200px] my-3" />

          {/* عرض المحتوى */}
          {videosToMap.length > 0 ? (
            <div>
              {videosToMap.map((video) => (
                <div
                  key={video.id}
                  className="w-[100%] border shadow my-5 p-3 flex justify-between items-center"
                >
                  <h1 className="font-bold flex">
                    <FaFileVideo className="m-1 mx-2 text-blue-500" />
                    {video.v_name}{" "}
                  </h1>
                  <div className="flex">
                    {/* رابط مشاهدة الفيديو */}
                    <Link to={`/video/${video.id}`}>
                      <Button colorScheme="blue" className="m-2">
                        <GoVideo />
                      </Button>
                    </Link>
                    {/* عرض خيارات للمعلم */}
                    {isTeacher && (
                      <div>
                        <Button
                          colorScheme="red"
                          onClick={() => {
                            setSelectedVedio(video);
                            onOpen();
                          }}
                          className="m-2"
                        >
                          <MdDelete />
                        </Button>
                        <AlertDialog
                          isOpen={isOpen}
                          leastDestructiveRef={cancelRef}
                          onClose={onClose}
                        >
                          <AlertDialogOverlay>
                            <AlertDialogContent>
                              <AlertDialogHeader
                                fontSize="lg"
                                fontWeight="bold"
                              >
                                حذف فيديو
                              </AlertDialogHeader>
                              <AlertDialogBody>
                                {selectedVedio && (
                                  <h1 className="font-bold">
                                    هل بالتاكيد تريد حذف {selectedVedio.v_name}؟
                                  </h1>
                                )}
                              </AlertDialogBody>
                              <AlertDialogFooter>
                                <Button
                                  ref={cancelRef}
                                  onClick={onClose}
                                  className="mx-1"
                                >
                                  إلغاء
                                </Button>
                                <Button
                                  colorScheme="red"
                                  onClick={() => {
                                    deletVedioCenter(selectedVedio.id);
                                    onClose();
                                  }}
                                  ml={3}
                                  className="mx-1"
                                >
                                  {deleteVedioCenterLoading ? (
                                    <Spinner />
                                  ) : (
                                    <MdOutlineDeleteOutline />
                                  )}
                                </Button>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialogOverlay>
                        </AlertDialog>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center flex justify-center items-center my-3 h-[150px] ">
              {isTeacher ? (
                <h1 className="font-bold flex">
                  لا يوجد محتوى للمحاضرة
                  <GoArrowLeft className="m-1 text-red-500 text-xl" />
                  <Link to={`/admin/add_video`}>
                    <span className="text-red-500">اضف المحتوى الان</span>
                  </Link>
                </h1>
              ) : (
                <h1 className="font-bold flex ">
                  <FaPhotoVideo className="m-1 text-red-500 text-xl" />
                  سوف يتم اضافة محتوى المحاضرة قر قريبًا
                </h1>
              )}
            </div>
          )}

          {pdfsToMap.length > 0 ? (
            <div>
              {pdfsToMap.map((pdf) => (
                <div
                  key={pdf.id}
                  className="w-[100%] border shadow  my-5 p-3 flex justify-between items-center"
                >
                  <h1 className="font-bold flex">
                    <FaFilePdf className="text-red-500 m-1 mx-2" />
                    {pdf.pdf_name}{" "}
                  </h1>
                  <div className="flex">
                    <Link to={pdf.pdf_path}>
                      <Button
                        colorScheme="red"
                        variant="outline"
                        className="m-2"
                      >
                        {" "}
                        <FaFilePdf className="text-red-500" />
                      </Button>
                    </Link>
                    {isTeacher ? (
                      <div>
                        {" "}
                        <Button
                          colorScheme="red"
                          onClick={() => {
                            setSelectedVedio(pdf);
                            onOpen();
                          }}
                          className="m-2"
                        >
                          <MdOutlineDeleteOutline />
                        </Button>
                        <AlertDialog
                          isOpen={isOpen}
                          leastDestructiveRef={cancelRef}
                          onClose={onClose}
                        >
                          <AlertDialogOverlay>
                            <AlertDialogContent>
                              <AlertDialogHeader
                                fontSize="lg"
                                fontWeight="bold"
                              >
                                حذف PDF
                              </AlertDialogHeader>

                              <AlertDialogBody>
                                {selectedVedio && (
                                  <h1 className="font-bold ">
                                    هل بالتاكيد تريد حذف{" "}
                                    {selectedVedio.pdf_name} ؟
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
                                      deletPdf(selectedVedio.id);
                                    }
                                  }}
                                  ml={3}
                                  className="mx-1"
                                >
                                  {deletePdfLoading ? <Spinner /> : "نعم حذف "}
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
          ) : null}
          {lecturesT.exam_name || lectures.exam_name ? (
            <div className="w-[100%] border shadow h-[80px] my-5 p-3 flex justify-between items-center">
              <div>
                <h1 className="font-bold my-2 flex">
                  <FaClipboardQuestion className="text-red-500 m-1 mx-2" />
                  {lecturesT.exam_name || lectures.exam_name}{" "}
                </h1>
                {lectures.last_result ? (
                  <h1 className="font-bold m-2 ">
                    {" "}
                    - درجتك : {lectures.last_result}{" "}
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
                  className="mx-1"
                >
                  <Button colorScheme="gren" variant="outline">
                    {" "}
                    <RiLogoutBoxRFill />
                  </Button>
                </Link>
                {isTeacher ? (
                  <div>
                    <Button
                      colorScheme="red"
                      className="mx-1"
                      onClick={() => {
                        deleteExamsG(id);
                      }}
                    >
                      {deleteGLoading ? (
                        <Spinner />
                      ) : (
                        <MdOutlineDeleteOutline />
                      )}
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default LecturDetails;
