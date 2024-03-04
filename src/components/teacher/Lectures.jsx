import { useParams } from "react-router-dom";
import GitTeacherLecture from "../../Hooks/teacher/GitTeacherLecture";
import { Button, Card, CardBody, Skeleton, Stack } from "@chakra-ui/react";
import { useEffect } from "react";

const Lectures = () => {
  const { id } = useParams();

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
        <div className="my-5">
          {mergedLectures ? (
            <div className="flex flex-wrap justify-center">
              {mergedLectures.map((lectre) => (
                <Card key={lectre.id} className="w-[320px] m-3">
                  <CardBody>
                    <img
                      src={lectre.image}
                      alt="Green double couch with wooden legs"
                    />

                    <div spacing="3" className="flex justify-between mt-4">
                      <div>
                        <h1 className="font-bold"> {lectre.description} </h1>
                      </div>
                      {lectre.price ? (
                        <h1 className="font-bold text-blue-500"> online </h1>
                      ) : (
                        <h1 className="font-bold text-red-500"> center </h1>
                      )}
                    </div>
                  </CardBody>
                  <hr />

                  <div className="my-3 flex justify-center">
                    <Button className="m-2" colorScheme="blue">
                      {" "}
                      دخول المحاضرة{" "}
                    </Button>
                    <Button className="m-2" colorScheme="red">
                      {" "}
                      حذف المحاضرة{" "}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lectures;
