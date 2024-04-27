import { Link, useParams } from "react-router-dom";
import GitGroupStudent from "../../Hooks/groups/GitGroupStudent";
import { GoArrowLeft } from "react-icons/go";
import {
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
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
import ScrollToTop from "../../components/scollToTop/ScrollToTop";
import OpenLectureToGroup from "../../Hooks/groups/OpenLecture";
import GitTeacherMonth from "../../Hooks/teacher/GitTeacherMonth";

const GroupDetails = () => {
  const { id } = useParams();
  const [classesLoading, classes] = GitClasses();
  const [studentLoading, students] = GitGroupStudent({ id: id });
  const [deleteLoading, deleteGroup] = DeleateGroup();
  const {
    isOpen: isGroupDeleteOpen,
    onOpen: onGroupDeleteOpen,
    onClose: onGroupDeleteClose,
  } = useDisclosure();
  const {
    isOpen: isStudentDeleteOpen,
    onOpen: onStudentDeleteOpen,
    onClose: onStudentDeleteClose,
  } = useDisclosure();
  const [selectedStudent, setSelectedStudent] = useState(null);
  const cancelRef = React.useRef();

  const [handleOpenLecture, m_id, setm_id, g_id, setGrad, loadingOpen] =
    OpenLectureToGroup({ id: id });
  const [deleteStudentLoading, deleteStudent] = DeleateStudentGroup({
    group_id: id,
  });

  const [
    monthes,
    monthesLoading,
    lectureCenterLoading,
    mergedLectures,
    monthesCenter,
  ] = GitTeacherMonth({ id: g_id });

  if (studentLoading) {
    return (
      <Stack
        className="w-[90%] m-auto my-[100px]"
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
      <div className="w-[90%] m-auto border shadow p-5">
        <div className="flex justify-center">
          <div
            className="header h-[200px] w-[100%] bg-blue-500"
            style={{ description: "rt" }}
          >
            <div className="flex justify-center items-center h-[150px]">
              <h1 className="font-bold text-xl text-white">
                {students.group_name}
              </h1>
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
                  fill="rgba(255,255,255,0.7)"
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
        </div>
        <div>
          <div className="w-[95%] m-auto flex justify-between my-9">
            <div className="ribbon2">
              <h1 className="font-bold m-2 text-white">
                {students.group_name}
              </h1>
            </div>
            <Button colorScheme="red" onClick={onGroupDeleteOpen}>
              {deleteLoading ? <Spinner /> : "حذف المجموعة"}
            </Button>

            {/* نافذة تأكيد حذف المجموعة */}
            <AlertDialog
              isOpen={isGroupDeleteOpen}
              leastDestructiveRef={cancelRef}
              onClose={onGroupDeleteClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent className="p-3">
                  <h1 className="font-bold">- حذف المجموعة</h1>
                  <AlertDialogBody>
                    هل أنت متأكد من أنك تريد حذف المجموعة؟
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button
                      ref={cancelRef}
                      onClick={onGroupDeleteClose}
                      className="m-2"
                    >
                      إلغاء
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => deleteGroup(id)}
                      ml={3}
                      className="m-2"
                    >
                      {deleteLoading ? <Spinner /> : "نعم، حذف"}
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </div>

          <div>
            <Select
              className="my-2"
              placeholder={
                classesLoading ? "جار تحميل الصفوف..." : "اختر صف الكورس"
              }
              size="lg"
              style={{ direction: "ltr" }}
              disabled={classesLoading}
              onChange={(e) => setGrad(e.target.value)}
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
                lectureCenterLoading ? "جار تحميل الكورسات..." : "اختر الكورس"
              }
              size="lg"
              style={{ direction: "ltr" }}
              onChange={(e) => setm_id(e.target.value)}
              disabled={lectureCenterLoading}
            >
              {lectureCenterLoading ? (
                <option disabled>Loading...</option>
              ) : monthesCenter.length > 0 ? (
                monthesCenter.map((lecture) => (
                  <option key={lecture.id} value={lecture.id}>
                    {lecture.description}
                  </option>
                ))
              ) : (
                <option disabled> لا يوجد كورسات متاحة </option>
              )}
            </Select>
            <div className="text-center">
              <Button
                colorScheme="blue"
                onClick={handleOpenLecture}
                isDisabled={!g_id || !m_id}
              >
                {loadingOpen ? <Spinner /> : "فتح المحاضرة"}
              </Button>
            </div>
          </div>

          <div>
            {students.data ? (
              <div>
                {students.data.map((st) => (
                  <div
                    key={st.id}
                    className="w-[100%] h-[80px] border shadow my-5 p-2 flex justify-between items-center"
                  >
                    <div>
                      <h1 className="font-bold">
                        اسم الطالب: {st.fname} {st.lname}
                      </h1>
                      <h1 className="font-bold">ايميل الطالب: {st.mail}</h1>
                    </div>
                    <div>
                      <MdDelete
                        className="text-red-500 text-3xl"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setSelectedStudent(st);
                          onStudentDeleteOpen();
                        }}
                      />

                      {/* نافذة تأكيد حذف الطالب */}
                      <AlertDialog
                        isOpen={isStudentDeleteOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onStudentDeleteClose}
                      >
                        <AlertDialogOverlay>
                          <AlertDialogContent className="p-3">
                            <h1 className="font-bold">
                              - حذف طالب من المجموعة
                            </h1>
                            {selectedStudent && (
                              <>
                                <h1 className="font-bold my-5">
                                  هل بالفعل تريد حذف {selectedStudent.fname}{" "}
                                  {selectedStudent.lname}؟
                                </h1>
                                <div style={{ direction: "ltr" }}>
                                  <Button
                                    ref={cancelRef}
                                    onClick={onStudentDeleteClose}
                                  >
                                    إلغاء
                                  </Button>
                                  <Button
                                    colorScheme="red"
                                    onClick={() =>
                                      deleteStudent(selectedStudent.id)
                                    }
                                    ml={3}
                                  >
                                    {deleteStudentLoading ? (
                                      <Spinner />
                                    ) : (
                                      "نعم، حذف"
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
                ))}
              </div>
            ) : (
              <div>
                <div className="w-[100%] my-5 m-auto h-[80px] border shadow flex justify-center items-center">
                  <h1 className="font-bold flex">
                    لا يوجد طلاب في هذه المجموعة
                    <GoArrowLeft className="m-1 text-xl" />
                    <Link to={`/admin/add_student`}>
                      <span className="text-red-500">أضف الطلاب</span>
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
