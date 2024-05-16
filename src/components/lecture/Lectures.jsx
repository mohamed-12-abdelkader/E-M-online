import { Button, Card, CardBody, Skeleton, Stack } from "@chakra-ui/react";
import { MdOutlineVideoLibrary, MdCancelPresentation } from "react-icons/md";
import { Link } from "react-router-dom";
import GitMyMonthes from "../../Hooks/student/GitMyMonthes";

const Lectures = () => {
  const [myMonth, myMonthLoading] = GitMyMonthes();

  return (
    <div className="bg-[#00204a] p-5 w-[100%]">
      <div className="p-5">
        <h1
          className="fonts font-bold text-3xl flex text-white my-3"
          style={{ fontWeight: "bold", fontSize: "50px" }}
        >
          <MdOutlineVideoLibrary className="m-1 mx-2 text-red-500" />
          كورساتي
        </h1>
      </div>
      <div
        className={`w-[95%] m-auto bg-white p-3`}
        style={{ borderRadius: "20px" }}
      >
        {myMonthLoading ? (
          <Stack className="w-[90%] m-auto my-5">
            <Skeleton height="20px" className="mt-5" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        ) : myMonth && myMonth.length > 0 ? (
          <div className="flex flex-wrap my-3">
            {myMonth.map((lectre) => (
              <Card
                key={lectre.id}
                className="w-[320px] m-3 manth-card"
                style={{ border: "1px solid #ccc" }}
              >
                <CardBody>
                  <img
                    src={lectre.image}
                    className="h-[220px] w-[100%]"
                    alt="Course"
                  />
                  <div className="my-2"></div>
                  <div className="flex justify-between mt-4">
                    <div>
                      <h1 className="font-bold"> {lectre.description} </h1>
                      <h1 className="font-bold">
                        عدد المحاضرات : {lectre.noflecture}
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
                      دخول للكورس
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <h1 className="font-bold flex justify-center text-black">
              <MdCancelPresentation className="m-1 text-red-500" />
              انت لست مشترك فى كورسات الان
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lectures;
