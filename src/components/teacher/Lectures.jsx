import { Link, useParams } from "react-router-dom";
import GitTeacherLecture from "../../Hooks/teacher/GitTeacherLecture";
import {
  Button,
  Card,
  CardBody,
  Skeleton,
  Spinner,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { GoArrowLeft } from "react-icons/go";
import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DeleateLecture from "../../Hooks/teacher/DeleateLecture";
const Lectures = () => {
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [
    deleteOnlineLoading,
    deleteOnlineLecture,
    deleteCenterLoading,
    deleteCenterLecture,
  ] = DeleateLecture();
  const [
    mergedLectures,
    lecturesCenter,
    lecturesOnline,
    lectureLoading,
    lectureCenterLoading,
  ] = GitTeacherLecture({ id });
  {
    lectureCenterLoading || lectureLoading ? null : console.log(mergedLectures);
  }

  if (lectureLoading || lectureCenterLoading) {
    return (
      <div style={{ minHeight: "60vh" }} className="flex items-center">
        <Stack className="w-[90%] m-auto ">
          <Skeleton height="20px" className="mt-5" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      </div>
    );
  }
  console.log(mergedLectures);
  return (
    <div>
      <div className="mt-8">
        <div className="flex justify-center">
          <div className="ribbon2">
            <h1 className="font-bold text-white m-2 ">
              {id == 1
                ? "محاضرات الصف الاول الثانوى "
                : id == 2
                ? "محاضرات الصف الثانى الثانوى "
                : id == 3
                ? " محاضرات الصف الثالث الثانوى "
                : ""}
            </h1>
          </div>
        </div>
        <div className=" my-5 flex justify-center">
          {mergedLectures && mergedLectures.length > 0 ? (
            <div className="flex flex-wrap m-auto">
              {mergedLectures.map((lectre) => (
                <Card key={lectre.id} className="w-[330px] m-3">
                  <CardBody>
                    <img
                      src={lectre.image}
                      alt="Green double couch with wooden legs"
                      className="h-[220px] w-[100%]"
                    />

                    <div spacing="3" className="flex justify-between mt-4">
                      <div>
                        <h1 className="font-bold"> {lectre.description} </h1>
                      </div>
                      {lectre.price || lectre.price == 0 ? (
                        <h1 className="font-bold text-blue-500"> online </h1>
                      ) : (
                        <h1 className="font-bold text-red-500"> center </h1>
                      )}
                    </div>
                  </CardBody>
                  <hr />

                  <div className="my-3 flex justify-center">
                    <Link
                      to={
                        lectre.price || lectre.price == 0
                          ? `/lecture/${lectre.id}`
                          : `/lecture_center/${lectre.id}`
                      }
                    >
                      <Button className="m-2" colorScheme="blue">
                        {" "}
                        دخول المحاضرة{" "}
                      </Button>
                    </Link>
                    <Button
                      className="m-2"
                      colorScheme="red"
                      onClick={() => {
                        setSelectedLecture(lectre); // Pass the ID of the selected teacher
                        onOpen();
                      }}
                    >
                      {" "}
                      حذف المحاضرة{" "}
                    </Button>
                    <AlertDialog
                      isOpen={isOpen}
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}
                    >
                      <AlertDialogOverlay>
                        <AlertDialogContent>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            حذف محاضرة
                          </AlertDialogHeader>
                          <div className="p-3">
                            {selectedLecture ? (
                              <>
                                <h1 className="font-bold">
                                  هل تريد حذف {selectedLecture.description}{" "}
                                </h1>
                                {/* Additional details or components related to selectedLecture can be added here */}
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
                              الغاء
                            </Button>
                            <Button
                              colorScheme="red"
                              ml={3}
                              className="mx-2"
                              onClick={() => {
                                if (selectedLecture) {
                                  if (selectedLecture.price) {
                                    deleteOnlineLecture(selectedLecture.id);
                                  } else {
                                    deleteCenterLecture(selectedLecture.id);
                                  }
                                }
                              }}
                            >
                              {deleteOnlineLoading || deleteCenterLoading ? (
                                <Spinner />
                              ) : (
                                " نعم حذف"
                              )}
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
            <div>
              <div className=" m-auto border shadow ">
                <h1 className="font-bold m-5 flex">
                  لا يوجد محاضرات لهذا الصف{" "}
                  <GoArrowLeft className="m-1 font-bold text-xl" />
                  <Link to="/admin/create_lecture">
                    <spun className="text-red-500"> اضف محاضراتك !</spun>
                  </Link>
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lectures;
