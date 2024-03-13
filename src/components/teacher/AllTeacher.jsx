import { FaYoutube } from "react-icons/fa";
import GitAllTeacher from "../../Hooks/teacher/GitAllTeacher";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Card, CardBody, Skeleton, Stack } from "@chakra-ui/react";

const AllTeacher = () => {
  const [loading, teachers] = GitAllTeacher();

  if (loading) {
    return (
      <Stack className="w-[90%] m-auto">
        <div className="flex justify-center">
          <div className="ribbon">
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

  console.log(teachers);

  return (
    <div className="">
      <div className="flex justify-center">
        <div className="ribbon">
          <h1 className="big-font m-4 text-xl text-center">
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
        <div className="flex flex-wrap w-[85%] m-auto my-5 ">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="w-[320px] border m-2">
              <CardBody>
                <img
                  src={teacher.image}
                  alt="Green double couch with wooden legs"
                  className="h-[220px] w-[100%]"
                />
                <div className="flex justify-between ">
                  <h1 color="blue.600" className="font-bold mt-2">
                    {teacher.name}
                  </h1>
                  <h1 color="blue.600" className="font-bold mt-2">
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
  );
};

export default AllTeacher;
