import GitTeacherByToken from "../../Hooks/student/GitTeacherByToken";
import { Card, CardBody, Skeleton, Stack } from "@chakra-ui/react";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollToTop from "../scollToTop/ScrollToTop";
import { MdOutlineVideoLibrary } from "react-icons/md";
import Lectures from "../../components/lecture/Lectures";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import SectionTwo from "./SectionTwo";

const LoginHome = () => {
  const [loading, teachers] = GitTeacherByToken();

  console.log("teachers", teachers);

  return (
    <div className="mt-[50px]">
      <div className="m-auto">
        <Lectures />
      </div>

      <div>
        {loading ? (
          <Stack className="w-[90%] m-auto mt-[50px]">
            <div className="flex justify-center"></div>
            <Skeleton height="20px" className="mt-5" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        ) : teachers.length === 0 ? (
          <div className="w-[90%] border shadow h-[250px] m-auto my-8 flex justify-center items-center">
            <div className="ribbon">
              <h1 className="font-bold text-xl m-2">لا يوجد مدرسين الان !!!</h1>
            </div>
          </div>
        ) : (
          <div className="bg-[#00204a] p-5 m-auto my-5">
            <div className="p-5">
              <h1
                className="fonts font-bold text-3xl flex text-white"
                style={{ fontWeight: "bold", fontSize: "50px" }}
              >
                <PiChalkboardTeacherLight className="m-1 mx-2 text-red-500" />
                المدرسين
              </h1>
            </div>
            <div
              className="w-[95%] m-auto bg-white p-3 flex md:flex flex-wrap"
              style={{ borderRadius: "20px" }}
            >
              {teachers.map((teacher) => (
                <Link
                  className="w-[100%] md:w-[320px] m-2"
                  key={teacher.id}
                  to={`teacher/${teacher.id}`}
                >
                  <Card
                    className="border my-2 md:w-[320px]"
                    style={{ border: "solid 2px #ccc" }}
                  >
                    <CardBody>
                      <img
                        src={teacher.image}
                        alt="Green double couch with wooden legs"
                        className="h-[250px] w-[100%]"
                      />
                      <div className="flex justify-between">
                        <h1 color="blue.600" className="font-bold mt-2">
                          {teacher.name}
                        </h1>
                        <h1 color="blue.600" className="font-bold mt-2">
                          {teacher.subject}
                        </h1>
                      </div>
                    </CardBody>
                    <hr className="w-[90%] m-auto" />
                    <div className="px-5 my-3">
                      <h1 className="font-bold flex">
                        <FaVideo className="m-2 text-red-500" />
                        {teacher.description}
                      </h1>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <ScrollToTop />
    </div>
  );
};

export default LoginHome;
