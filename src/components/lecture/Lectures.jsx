import { Button, Card, CardBody, Skeleton, Stack } from "@chakra-ui/react";
import GitMyLecture from "../../Hooks/student/GitMyLecture";
import { Link } from "react-router-dom";
import { MdCancelPresentation } from "react-icons/md";
import GitMyMonthes from "../../Hooks/student/GitMyMonthes";
const Lectures = () => {
  const [myLectureLoading, myLecture] = GitMyLecture();
  const [myMonth, myMonthLoading] = GitMyMonthes();
  if (myMonthLoading) {
    return (
      <Stack className="w-[90%] m-auto my-5">
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
  console.log(myMonth);
  if (!myMonth || myMonth.length === 0) {
    return (
      <div className="my-5 text-center">
        <div className=" h-[200px] w-[90%] m-auto   flex justify-center items-center ">
          <p className="font-bold flex">
            <MdCancelPresentation className="text-red-500 m-1" />
            انت لست مشترك فى اى كورسات الان{" "}
          </p>
        </div>
        <hr className="w-[90%] m-auto" />
      </div>
    );
  }

  return (
    <div>
      <div className="w-[95%] m-auto">
        {myMonth ? (
          <div className="flex flex-wrap my-3">
            {myMonth.map((lectre) => {
              return (
                <Card key={lectre.id} className="w-[320px] m-3">
                  <CardBody>
                    <img
                      src={lectre.image}
                      className="h-[220px] w-[100%]"
                      alt="Green double couch with wooden legs"
                    />
                    <div className="my-2"></div>
                    <div spacing="3" className="flex justify-between mt-4">
                      <div className=" ">
                        <h1 className="font-bold"> {lectre.description} </h1>
                        <h1 className="font-bold">
                          {" "}
                          عدد المحاضرات : {lectre.noflecture}{" "}
                        </h1>
                      </div>
                      {lectre.price ? (
                        <h1 className="font-bold text-red-500"> كورس سنتر </h1>
                      ) : (
                        <h1 className="font-bold text-blue-500">
                          {" "}
                          كورس اونلاين{" "}
                        </h1>
                      )}
                    </div>
                  </CardBody>
                  <hr />

                  <div className="my-3 text-center">
                    <Link to={`/month/${lectre.id}`}>
                      <Button
                        colorScheme="blue"
                        variant="outline"
                        className="w-[90%] m-auto"
                      >
                        دخول للكورس{" "}
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
              <h1> انت لست مشترك فى كورسات الان </h1>
            </div>
          </div>
        )}
      </div>
      <hr className="w-[90%] m-auto" />
    </div>
  );
};

export default Lectures;
