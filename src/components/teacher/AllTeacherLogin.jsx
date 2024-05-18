import { PiChalkboardTeacherBold } from "react-icons/pi";
import { Card, CardBody, Skeleton, Stack } from "@chakra-ui/react";
import { MdCancelPresentation } from "react-icons/md";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import { FaVideo } from "react-icons/fa";
import GitTeacherByToken from "../../Hooks/student/GitTeacherByToken";
const AllTeacherLogin = () => {
  const [loading, teachers] = GitTeacherByToken();
  return (
    <div className="bg-[#00204a] p-5 w-[100%] my-[50px]">
      <div className="p-5">
        <h1
          className="fonts font-bold text-3xl flex text-white my-3"
          style={{ fontWeight: "bold", fontSize: "50px" }}
        >
          <PiChalkboardTeacherBold className="m-1 mx-2 text-red-500" />
          المدرسين
        </h1>
      </div>
      <div>
        {loading ? (
          <Stack className="w-[90%] m-auto my-5">
            <Skeleton height="20px" className="mt-5" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        ) : teachers && teachers.length > 0 ? (
          <div
            className="w-[95%] m-auto teacher-card-content bg-white p-3 flex md:flex  flex-wrap"
            style={{ borderRadius: "20px" }}
          >
            <div className="flex justify-center card-content  flex-wrap md:justify-start   ">
              {teachers.map((teacher) => (
                <Card
                  key={teacher.id}
                  className=" w-[300px] my-3   md:mx-10 w-[320px] m-2 "
                  style={{ border: "1px solid #ccc" }}
                >
                  <Link to={`teacher/${teacher.id}`}>
                    <CardBody>
                      <img
                        src={teacher.image}
                        className="h-[220px] w-[100%]"
                        alt="Course"
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
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="text-center py-5 bg-white h-[200px] flex justify-center items-center"
            style={{ borderRadius: "20px" }}
          >
            <h1 className="font-bold flex justify-center text-black">
              <MdCancelPresentation className="m-1 text-red-500" />
              لا يوجد مدرسين الان
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTeacherLogin;
