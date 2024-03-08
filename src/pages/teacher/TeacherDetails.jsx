import { MdOutlineClass } from "react-icons/md";
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

import BuyLecture from "../../Hooks/student/BuyLecture";
const TeacherDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const { id } = useParams();
  const [teacherLoading, teacher] = GitTeacherDetails({ id });
  const [lectureLoading, lectures] = GitLecture({ id });

  const [buyLoading, buyLecture] = BuyLecture();
  const [selectedLecture, setSelectedLecture] = useState(null);
  if (teacherLoading || lectureLoading) {
    return (
      <Stack className="w-[90%] m-auto mt-[150px]" style={{ height: "60vh" }}>
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
  console.log("lecture", lectures);
  if (!teacher || teacher.length === 0) {
    return (
      <div className="mt-[150px] text-center" style={{ minHeight: "70vh" }}>
        <div className=" h-[200px] w-[90%] m-auto border shadow flex justify-center items-center ">
          <p className="font-bold "> هذا المدرس غير موجود على الموقع</p>
        </div>
      </div>
    );
  }

  console.log(teacher);
  return (
    <div className="mt-[150px]">
      <div className="w-[90%] m-auto">
        <div className="text-center md:flex justify-between">
          <div className="flex justify-center md:w-[50%]">
            <img
              src={teacher[0].image}
              className="h-[280px] w-[400px] m-3 "
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className="mt-[50px]">
            <div className="text-center">
              <h1 className="font-bold text-xl">
                {" "}
                منهج {teacher[0].subject} -مع {teacher[0].name} الصف لـ{" "}
                {teacher[0].grad}
              </h1>
            </div>
            <div className="flex my-2 flex-wrap justify-center">
              <div className="h-[50px] border w-[200px] m-2 flex justify-center items-center">
                <h1 className="font-bold flex">
                  <MdOutlineClass className="m-1 text-blue-500 " />
                  الصف {teacher[0].grad}
                </h1>
              </div>
              <div className="h-[50px] border w-[200px] m-2 flex  items-center p-2">
                <img
                  src={teacher[0].image}
                  className="h-[30px] w-[30px] m-3 "
                />
                <h1 className="font-bold m-1 ">{teacher[0].name}</h1>
              </div>
              <div className="h-[50px] border w-[200px] m-2 flex  items-center p-2">
                <h1 className="font-bold flex">
                  <BiBook className="m-1 text-blue-500 " />
                  الصف {teacher[0].subject}
                </h1>
              </div>
            </div>
            <div className="">
              <h1 className="font-bold">{teacher[0].description}</h1>
            </div>
          </div>
        </div>
        <hr className="my-5" />

        <div className="  m-auto border shadow p-5">
          <div>
            <h1 className="font-bold flex text-xl">
              <FaFileVideo className="m-1 text-red-500" />
              المحاضرات ({teacher[0].lecture_count})
            </h1>
          </div>
          <div className="">
            {lectures ? (
              <div className="flex flex-wrap my-3">
                {lectures.map((lectre) => {
                  return (
                    <Card key={lectre.id} className="w-[320px] m-3">
                      <CardBody>
                        <img
                          src={lectre.cover_image}
                          className="h-[220px] w-[100%]"
                          alt="Green double couch with wooden legs"
                        />
                        <div className="my-2">
                          <h1 className="font-bold"> الصف {teacher[0].grad}</h1>
                        </div>
                        <div spacing="3" className="flex justify-between mt-4">
                          <div>
                            <h1 className="font-bold">
                              {" "}
                              {lectre.description}{" "}
                            </h1>
                          </div>
                          <h1 className="font-bold"> {lectre.price} جنية </h1>
                        </div>
                      </CardBody>
                      <hr />

                      <div className="my-3 text-center">
                        {lectre.open ? (
                          <Link to={`/lecture/${lectre.id}`}>
                            <Button
                              colorScheme="blue"
                              variant="outline"
                              className="w-[90%] m-auto"
                            >
                              دخول للمحاضرة{" "}
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
                              شراء المحاضرة
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
                                    شراء المحاضرة
                                  </AlertDialogHeader>

                                  <div>
                                    {selectedLecture && (
                                      <>
                                        <h1 className="font-bold m-3 ">
                                          - هل بالتأكيد تريد شراء{" "}
                                          {selectedLecture.description}؟
                                        </h1>
                                        <h1 className="font-bold m-3 ">
                                          - سوف يتم خصم {selectedLecture.price}{" "}
                                          جنية من محفظتك ثمن المحاضرة
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
                                              buyLecture(selectedLecture.id);
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
                  );
                })}
              </div>
            ) : (
              <div>
                <div>
                  <h1>
                    {" "}
                    لا يوجد محاضرات الان سوف يتم اضافتها فى اقرب وقت ممكن{" "}
                  </h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
