import { Link, useParams } from "react-router-dom";
import GitGroupStudent from "../../Hooks/groups/GitGroupStudent";
import { GoArrowLeft } from "react-icons/go";
import {
  Button,
  Skeleton,
  Spinner,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import DeleateGroup from "../../Hooks/teacher/DeleateGroup";
import { MdDelete } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DeleateStudentGroup from "../../Hooks/teacher/DeleateStudentGroup";
import { Select } from "@chakra-ui/react";
import GitClasses from "../../Hooks/teacher/GitClasses";
import GitTeacherLecture from "../../Hooks/teacher/GitTeacherLecture";
import { toast } from "react-toastify";
import baseUrl from "../../api/baseUrl";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";
import OpenLectureToGroup from "../../Hooks/groups/OpenLecture";
const GroupDetails = () => {
  const [classesLoading, classes] = GitClasses();
  const { id } = useParams();
  const [studentLoading, students] = GitGroupStudent({ id: id });
  const [deleteLoading, deleteGroup] = DeleateGroup();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedStudent, setSelectedStudent] = useState(null);
  const cancelRef = React.useRef();
  const [handleOpenLecture, l_id, setL_id, g_id, setGrad, loadingOpen] =
    OpenLectureToGroup({ id: id });
  const [deleteStudentLoading, deleteStudent] = DeleateStudentGroup({
    group_id: id,
  });

  const [
    mergedLectures,
    lecturesCenter,
    lecturesOnline,
    lectureLoading,
    lectureCenterLoading,
  ] = GitTeacherLecture({ id: g_id });

  if (studentLoading) {
    return (
      <Stack
        className="w-[90%] m-auto my-[100px] "
        style={{ minHeight: "70vh" }}
      >
        <Skeleton height="20px" className="mt-5" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }

  return (
    <div className="mt-[150px]" style={{ minHeight: "60vh" }}>
      <div className="w-[90%] m-auto border shadow  p-5">
        <div className="flex justify-center mt-5">
          <div className="ribbon2">
            <h1 className="font-bold m-4 text-white text-center">
              {students.group_name}
            </h1>
          </div>
        </div>
        <div>
          <div className="w-[95%] m-auto flex justify-between my-9">
            <h1 className="font-bold text-xl">{students.group_name}</h1>
            <Button
              colorScheme="red"
              onClick={() => {
                deleteGroup(id);
              }}
            >
              {deleteLoading ? <Spinner /> : "حذف المجموعة "}{" "}
            </Button>
          </div>

          <div>
            <Select
              className="my-2"
              placeholder={
                classesLoading ? "جار تحميل الصفوف..." : " اختر صف المحاضرة "
              }
              size="lg"
              style={{ direction: "ltr" }}
              disabled={classesLoading}
              onChange={(e) => {
                setGrad(e.target.value);
              }}
            >
              {classesLoading ? (
                <option disabled>Loading...</option>
              ) : classes.length > 0 ? (
                classes.map((classItem) => (
                  <option key={classItem.id} value={classItem.id}>
                    {classItem.name}
                  </option>
                ))
              ) : (
                <option disabled> لا يوجد صفوف دراسية متاحة </option>
              )}
            </Select>
            <Select
              className="my-2"
              placeholder={
                lectureCenterLoading
                  ? "جار تحميل الصفوف..."
                  : " اختر  المحاضرة   "
              }
              size="lg"
              style={{ direction: "ltr" }}
              onChange={(e) => {
                setL_id(e.target.value);
              }}
              disabled={lectureCenterLoading}
            >
              {lectureCenterLoading ? (
                <option disabled>Loading...</option>
              ) : lecturesCenter.length > 0 ? (
                lecturesCenter.map((lecture) => (
                  <option key={lecture.id} value={lecture.id}>
                    {lecture.description}
                  </option>
                ))
              ) : (
                <option disabled> لا يوجد محاضرات متاحة </option>
              )}
            </Select>
            <div className="text-center">
              <Button colorScheme="blue" onClick={handleOpenLecture}>
                {" "}
                {loadingOpen ? <Spinner /> : " فتح المحاضرة "}
              </Button>
            </div>
          </div>

          <div>
            {students.data ? (
              <div>
                {students.data.map((st) => {
                  return (
                    <div
                      key={st.id}
                      className="w-[100%] h-[80px] border shadow my-5 p-2 flex justify-between items-center"
                    >
                      <div>
                        <h1 className="font-bold ">
                          اسم الطالب : {st.fname} {st.lname}{" "}
                        </h1>
                        <h1 className="font-bold ">ايميل الطالب : {st.mail}</h1>
                      </div>
                      <div>
                        <MdDelete
                          className="text-red-500 text-3xl"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSelectedStudent(st); // Pass the ID of the selected teacher
                            onOpen();
                          }}
                        />
                        <AlertDialog
                          isOpen={isOpen}
                          leastDestructiveRef={cancelRef}
                          onClose={onClose}
                        >
                          <AlertDialogOverlay>
                            <AlertDialogContent className="p-3">
                              <h1 className="font-bold ">
                                - حذف طالب من المجموعة
                              </h1>
                              {selectedStudent && (
                                <>
                                  {" "}
                                  <h1 className="font-bold my-5">
                                    - هل بالفعل تريد حذف {selectedStudent.fname}{" "}
                                    {selectedStudent.lname}
                                  </h1>
                                  <div style={{ direction: "ltr" }}>
                                    <Button ref={cancelRef} onClick={onClose}>
                                      الغاء
                                    </Button>
                                    <Button
                                      colorScheme="red"
                                      onClick={() => {
                                        deleteStudent(st.id);
                                      }}
                                      ml={3}
                                    >
                                      {deleteStudentLoading ? (
                                        <Spinner />
                                      ) : (
                                        "      نعم حذف"
                                      )}
                                    </Button>
                                  </div>
                                </>
                              )}
                            </AlertDialogContent>
                          </AlertDialogOverlay>
                        </AlertDialog>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <div className="w-[100%] my-5 m-auto h-[80px] border shadow flex justify-center items-center">
                  <h1 className="font-bold flex">
                    {" "}
                    لا يوجد طلاب فى هذة المجموعة{" "}
                    <GoArrowLeft className="m-1 text-xl" />
                    <Link to={`/admin/add_student`}>
                      <span className="text-red-500">اضف الطلاب </span>{" "}
                    </Link>
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

export default GroupDetails;
