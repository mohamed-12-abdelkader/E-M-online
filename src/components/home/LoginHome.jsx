import GitTeacherByToken from "../../Hooks/student/GitTeacherByToken";
import { Card, CardBody, Skeleton, Stack } from "@chakra-ui/react";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollToTop from "../scollToTop/ScrollToTop";
import { MdOutlineVideoLibrary } from "react-icons/md";
import Lectures from "../../components/lecture/Lectures";
import { PiChalkboardTeacherLight } from "react-icons/pi";
const LoginHome = () => {
  const [loading, teachers] = GitTeacherByToken();
  if (loading) {
    return (
      <Stack className="w-[90%] m-auto mt-[50px]">
        <div className="flex justify-center"></div>
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
      <div
        className="
      "
      >
        <div className="p-5">
          <h1
            className="fonts font-bold text-3xl flex"
            style={{ fontWeight: "bold", fontSize: "50px" }}
          >
            <MdOutlineVideoLibrary className="m-1 mx-2 text-red-500" />
            كورساتي
          </h1>
          <p className="h-1 w-[200px]  my-2"> ______________________________</p>
        </div>
        <div className="w-[90%] m-auto">
          <Lectures />
        </div>
      </div>
      <div className="p-5">
        <h1
          className="fonts font-bold text-3xl flex "
          style={{ fontWeight: "bold", fontSize: "50px" }}
        >
          <PiChalkboardTeacherLight className="m-1 mx-2 text-red-500" />
          المدرسين
        </h1>
        <p className="h-1 w-[200px]  my-2"> ______________________________</p>
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
          <div className="  flex md:flex flex-wrap  w-[90%] m-auto my-5 ">
            {teachers.map((teacher) => (
              <Link key={teacher.id} to={`teacher/${teacher.id}`}>
                <Card className="w-[340px] border m-2">
                  <CardBody>
                    <img
                      src={teacher.image}
                      alt="Green double couch with wooden legs"
                      className="h-[250px] w-[100%]"
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
                  <div className=" px-5  my-3">
                    <h1 className="font-bold flex">
                      <FaVideo className="m-2 text-red-500" />
                      {teacher.description}
                    </h1>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
      <hr className="w-[90%] m-auto" />
      <ScrollToTop />
    </div>
  );
};

export default LoginHome;
