import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Skeleton,
  Stack,
  Spinner,
  useDisclosure,
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { GoArrowLeft } from "react-icons/go";
import { MdCollections } from "react-icons/md";
import GitLecturMonth from "../../Hooks/teacher/GitLecturMonth";
import React, { useState } from "react";
import DeleateLecture from "../../Hooks/teacher/DeleateLecture";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";
import UserType from "../../Hooks/auth/userType";

const Month = () => {
  const { id } = useParams();
  const [months, monthLoading] = GitLecturMonth({ id });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [deleteOnlineLoading, deleteLecture] = DeleateLecture({ m_id: id });
  const [userData, isAdmin, isTeacher, student] = UserType();
  if (monthLoading) {
    // عرض الهيكل العظمي أثناء التحميل
    return (
      <Stack
        className="w-[90%] m-auto my-5 mt-[150px]"
        style={{ minHeight: "80vh" }}
      >
        <Skeleton height="20px" className="mt-5" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }

  if (!months || !months.monthData) {
    // معالجة الحالة عندما تكون months أو months.monthData غير معرفة
    return <div>Error loading data</div>;
  }
  console.log(months.monthcontent);
  return (
    <div className="mt-[120px]" style={{ minHeight: "80vh" }}>
      {months.monthData.image && (
        <img
          src={months.monthData.image}
          className="w-[90%] m-auto h-[400px]"
          alt="Image"
          style={{ borderRadius: "20px" }}
        />
      )}

      <div className="w-[90%] m-auto border shadow my-[50px] p-3 ">
        <div className="flex text-xl">
          <MdCollections className="text-red-500 m-2" />
          <h1 className="font-bold">
            عدد المحاضرات: ({months.monthData.noflecture})
          </h1>
        </div>
        <div>
          {months.monthcontent && months.monthcontent.length > 0 ? (
            <div className="flex flex-wrap justify-center px-auto  my-3 w-[98%] m-auto md:justify-start  ">
              {months.monthcontent.map((lecture) => (
                <Card
                  key={lecture.id}
                  className=" w-[300px] my-3  md:mx-7 w-[320px] m-2 "
                >
                  <CardBody>
                    <img
                      src={lecture.image}
                      className="h-[220px] w-[100%]"
                      alt={lecture.description || lecture.group_description}
                    />
                    <div className="my-2"></div>
                    <div className="flex justify-between mt-4">
                      <div>
                        <h1 className="font-bold">
                          {lecture.description || lecture.group_description}
                        </h1>
                      </div>
                      {lecture.group_description && (
                        <h1 className="font-bold text-red-500">محاضرة سنتر</h1>
                      )}
                    </div>
                  </CardBody>
                  <hr />
                  <div className="w-[100%]">
                    {isTeacher ? (
                      <div className="my-3 text-center flex">
                        <Link
                          to={`/lecture/${lecture.id}`}
                          className="w-[50%] mx-1 m-auto"
                        >
                          <Button
                            colorScheme="blue"
                            variant="outline"
                            className="m-auto mx-1"
                          >
                            دخول للمحاضرة
                          </Button>
                        </Link>
                        <Button
                          colorScheme="red"
                          variant="outline"
                          className="w-[50%] mx-1 m-auto"
                          onClick={() => {
                            setSelectedLecture(lecture);
                            onOpen();
                          }}
                        >
                          حذف المحاضرة
                        </Button>
                      </div>
                    ) : (
                      <div className="my-3 text-center flex w-[100%]">
                        {lecture.open ? (
                          <Link
                            to={`/lecture/${lecture.id}`}
                            className="w-[100%] m-auto"
                          >
                            <Button
                              colorScheme="blue"
                              variant="outline"
                              className="w-[90%] m-auto"
                            >
                              دخول للمحاضرة
                            </Button>
                          </Link>
                        ) : (
                          <Button colorScheme="red" className="w-[90%] m-auto">
                            يجب حل امتحان المحاضرة السابقة
                          </Button>
                        )}
                      </div>
                    )}

                    {/* نافذة التأكيد لحذف المحاضرة */}
                    <AlertDialog
                      isOpen={isOpen}
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}
                    >
                      <AlertDialogOverlay>
                        <AlertDialogContent>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            حذف الكورس
                          </AlertDialogHeader>
                          <div className="p-3">
                            {selectedLecture ? (
                              <>
                                <h1 className="font-bold">
                                  هل تريد حذف {selectedLecture.description}
                                </h1>
                              </>
                            ) : (
                              <p>Selected lecture is null</p>
                            )}
                          </div>

                          <AlertDialogFooter>
                            <Button
                              ref={cancelRef}
                              onClick={onClose}
                              className="mx-2"
                            >
                              إلغاء
                            </Button>
                            <Button
                              colorScheme="red"
                              ml={3}
                              className="mx-2"
                              onClick={() => {
                                if (selectedLecture) {
                                  deleteLecture({
                                    l_id: selectedLecture.id,
                                  });
                                }
                              }}
                            >
                              {deleteOnlineLoading ? <Spinner /> : "نعم حذف"}
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialogOverlay>
                    </AlertDialog>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-[200px]">
              {isTeacher ? (
                <h1 className="font-bold flex">
                  {" "}
                  لا يوجد محاضرات فى هذا الكورس
                  <GoArrowLeft className="text-red-500 m-2" />
                  <Link to={`/admin/add_lecture_month`}>
                    <span className="text-red-500">اضف محاضراتك الان </span>{" "}
                  </Link>
                </h1>
              ) : (
                <h1 className="font-bold">سوف يتم إضافة المحتوى قريبًا</h1>
              )}
            </div>
          )}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Month;
