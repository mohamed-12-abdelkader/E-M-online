import { Button, Skeleton, Stack } from "@chakra-ui/react";
import GitClasses from "../../Hooks/teacher/GitClasses";
import { Link, Outlet } from "react-router-dom";
import ScrollToTop from "../scollToTop/ScrollToTop";

const TeacherCourses = () => {
  const [classesLoading, classes] = GitClasses();

  if (classesLoading) {
    return (
      <div style={{ minHeight: "70vh" }} className="flex items-center">
        <Stack className="w-[90%] m-auto ">
          <Skeleton height="20px" className="mt-5" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <ScrollToTop />
        </Stack>
      </div>
    );
  }
  return (
    <div className="mt-[150px] " style={{ minHeight: "60vh" }}>
      <div className="w-[90%] m-auto border shadow">
        <div>
          {classes ? (
            <div className="my-5 grid justify-center md:flex justify-center  ">
              {classes.map((classe) => {
                return (
                  <Link
                    key={classe.id}
                    to={`courses/${classe.id}`}
                    className=""
                  >
                    <Button colorScheme="blue" className="m-2">
                      كورسات الصف {classe.name}
                    </Button>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div>
              <h1>لا يوجد صفوف دراسية </h1>
            </div>
          )}
        </div>
        <Outlet />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default TeacherCourses;
