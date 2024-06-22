import { FaYoutube } from "react-icons/fa";
import GitAllTeacher from "../../Hooks/teacher/GitAllTeacher";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Card, CardBody, Skeleton, Stack } from "@chakra-ui/react";
import { Zoom } from "react-awesome-reveal";
const AllTeacher = () => {
  const [loading, teachers] = GitAllTeacher();

  if (loading) {
    return (
      <Stack className="w-[90%] m-auto">
        <div className="flex justify-center">
          <div className="">
            <h1 className="big-font m-4 text-xl text-center">
              E-M online Teachers
            </h1>
          </div>
        </div>
        <Skeleton height="20px" className="mt-5" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }

  return (
    <div className=" bg-[#00204a] py-5 mb-[50px]">
      <div className="flex justify-center">
        <div className="">
          <h1 className="big-font m-4 text-xl text-center text-white">
            E-M online Teachers
          </h1>
        </div>
      </div>
      {teachers.length === 0 ? (
        <div>
          <div className="w-[90%] border shadow h-[250px] m-auto my-8 flex justify-center items-center">
            <div className="ribbon">
              <h1 className="font-bold text-xl m-2">لا يوجد مدرسين الان !!!</h1>
            </div>
          </div>
        </div>
      ) : (
        <div dir="rtl" className="flex w-full my-5 ">
          <div
            className="flex  items-center justify-center  bg-white w-[90%] m-auto"
            style={{ borderRadius: "20px" }}
          >
            {loading ? (
              <Stack className="w-[90%] m-auto">
                <Skeleton height="20px" className="mt-5" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            ) : (
              <div
                className="flex justify-center card-content  flex-wrap md:justify-start   "
                style={{ flexWrap: "wrap" }}
              >
                {teachers.map((teacher) => (
                  <Card
                    key={teacher.id}
                    className=" w-[90%] my-5  md:w-[320px] mx-6 m-2 "
                    style={{
                      borderRadius: "10px",
                      border: "solid 2px #ccc",
                    }}
                  >
                    <CardBody>
                      <div className="">
                        <img
                          src={teacher.image}
                          alt="Green double couch with wooden legs"
                          className="h-[180px] w-[100%] border "
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                      <div className=" flex justify-between text-center">
                        <h1 color="blue.600" className="font-bold mt-2  my-2">
                          {teacher.name}
                        </h1>
                        <h1 color="blue.600" className="font-bold mt-2  my-2">
                          {teacher.subject}
                        </h1>
                      </div>
                    </CardBody>
                    <hr className="w-[90%] m-auto" />
                    <div className="flex justify-center  my-3">
                      <a href={teacher.facebook}>
                        <FaFacebookSquare className="text-4xl text-blue-600 mx-2" />
                      </a>
                      <a href={teacher.tele}>
                        <FaYoutube className="text-4xl text-red-500 mx-2" />
                      </a>
                      <a href={teacher.whats}>
                        <FaTelegramPlane className="text-4xl text-blue-600 mx-2" />
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
                  
        </div>
      )}
    </div>
  );
};

export default AllTeacher;
