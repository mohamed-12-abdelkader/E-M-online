import GitClasses from "../../Hooks/teacher/GitClasses";
import { Button, Skeleton, Stack } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

const MyGroups = () => {
  const [classesLoading, classes] = GitClasses();
  if (classesLoading) {
    return (
      <Stack className="w-[90%] m-auto" style={{ minHeight: "75vh" }}>
        <div className="flex justify-center">
          <div className="ribbon">
            <h1 className="font-bold m-4 text-xl text-center">مجموعاتى</h1>
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
    <div className="mt-[150px]" style={{ minHeight: "50vh" }}>
      <div className="border shadow w-[90%] m-auto ">
        <div className="flex justify-center my-5">
          <div className="ribbon">
            <h1 className="font-bold m-4 mx-9 text-xl text-center">مجموعاتى</h1>
          </div>
        </div>
        <div>
          {classes ? (
            <div className=" grid justify-center  md:flex ">
              {classes.map((classe) => {
                return (
                  <Link key={classe.id} to={`group/${classe.id}`}>
                    <Button colorScheme="blue" className="m-2">
                      {" "}
                      مجموعات الصف {classe.name}
                    </Button>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MyGroups;
