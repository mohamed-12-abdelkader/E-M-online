import GitTeacherByToken from "../../Hooks/student/GitTeacherByToken";
import { Card, CardBody, Skeleton, Stack } from "@chakra-ui/react";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
const LoginHome = () => {
  const [loading, teachers] = GitTeacherByToken();
  if (loading) {
    return (
      <Stack className="w-[90%] m-auto mt-[50px]">
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
  console.log("teachers", teachers);
  return (
    <div className="mt-[50px]">
      <div className="flex justify-center">
        <div className="ribbon">
          <h1 className="big-font m-4 text-xl text-center">
            E-M online Teachers
          </h1>
        </div>
      </div>
      <div>
        {teachers.length === 0 ? (
          <div>
            <div className="w-[90%] border shadow h-[250px] m-auto my-8 flex justify-center items-center">
              <div className="ribbon">
                <h1 className="font-bold text-xl m-2">
                  لا يوجد مدرسين الان !!!
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap w-[90%] m-auto my-5 ">
            {teachers.map((teacher) => (
              <Link key={teacher.id} to={`teacher/${teacher.id}`}>
                <Card className="w-[330px] border m-2">
                  <CardBody>
                    <img
                      src={teacher.image}
                      alt="Green double couch with wooden legs"
                    />
                    <div className="flex justify-between ">
                      <h1 color="blue.600" className="font-bold mt-2">
                        {teacher.name}
                      </h1>
                      <h1 color="blue.600" className="font-bold mt-2">
                        {teacher.subject}
                      </h1>
                    </div>
                    <div>
                      <h1 className="font-bold m-1">{teacher.description}</h1>
                    </div>
                  </CardBody>
                  <hr className="w-[90%] m-auto" />
                  <div className=" px-5  my-3">
                    <h1 className="font-bold flex">
                      <FaVideo className="m-2 text-red-500" />
                      عدد المحاضرات :{teacher.lecture_count}
                    </h1>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginHome;
