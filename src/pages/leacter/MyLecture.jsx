import { Button, Card, CardBody, Skeleton, Stack } from "@chakra-ui/react";
import GitMyLecture from "../../Hooks/student/GitMyLecture";
import { Link } from "react-router-dom";

const MyLecture = () => {
  const [myLectureLoading, myLecture] = GitMyLecture();

  if (myLectureLoading) {
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
  console.log(myLecture);
  if (!myLecture || myLecture.length === 0) {
    return (
      <div className="mt-[150px] text-center" style={{ minHeight: "70vh" }}>
        <div className=" h-[200px] w-[90%] m-auto border shadow flex justify-center items-center ">
          <p className="font-bold "> انت لست مشترك فى محاضرات الان </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[150px]">
      <div className="w-[90%] m-auto border shadow">
        <div className="flex justify-center my-5">
          <div className="ribbon">
            <h1 className="font-bold m-2 big-font">my lecture </h1>
          </div>
        </div>
        <div>
          {myLecture ? (
            <div className="flex flex-wrap my-3">
              {myLecture.map((lectre) => {
                return (
                  <Card key={lectre.id} className="w-[340px] m-3">
                    <CardBody>
                      <img
                        src={lectre.cover_image}
                        className="h-[220px] w-[100%]"
                        alt="Green double couch with wooden legs"
                      />
                      <div className="my-2"></div>
                      <div spacing="3" className="flex justify-between mt-4">
                        <div>
                          <h1 className="font-bold">
                            {" "}
                            {lectre.online_description ||
                              lectre.group_description}{" "}
                          </h1>
                        </div>
                        {lectre.group_description ? (
                          <h1 className="font-bold"> محاضرة سنتر </h1>
                        ) : null}
                      </div>
                    </CardBody>
                    <hr />

                    <div className="my-3 text-center">
                      <Link
                        to={
                          lectre.price
                            ? `/lecture/${lectre.id}`
                            : `/lecture_center/${lectre.id}`
                        }
                      >
                        <Button
                          colorScheme="blue"
                          variant="outline"
                          className="w-[90%] m-auto"
                        >
                          دخول للمحاضرة{" "}
                        </Button>
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div>
              <div>
                <h1> انت لست مشترك فى محاضرات الان </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyLecture;
