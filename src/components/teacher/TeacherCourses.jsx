import { useState } from "react";
import { Button, Skeleton, Stack, Box } from "@chakra-ui/react";
import GitClasses from "../../Hooks/teacher/GitClasses";
import { Link, Outlet } from "react-router-dom";
import ScrollToTop from "../scollToTop/ScrollToTop";

const TeacherCourses = () => {
  const [classesLoading, classes] = GitClasses();
  const [selectedClassId, setSelectedClassId] = useState(null); // حالة لتعقب الصف المختار

  if (classesLoading) {
    return (
      <div style={{ minHeight: "70vh" }} className="flex items-center">
        <Stack className="w-[90%] m-auto">
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

  const handleClassClick = (classId) => {
    // تحديث حالة الصف المختار
    setSelectedClassId(classId);
  };

  return (
    <div className="mt-[150px]" style={{ minHeight: "60vh" }}>
      <div className="w-[90%] m-auto border shadow">
        <div>
          {classes ? (
            <div className="my-5 grid justify-center md:flex justify-center">
              {classes.map((classe) => {
                const isSelected = selectedClassId === classe.id; // تحقق إذا كان الصف الحالي هو المختار
                return (
                  <Link
                    key={classe.id}
                    to={`courses/${classe.id}`}
                    className=""
                    onClick={() => handleClassClick(classe.id)}
                  >
                    <Box
                      cursor="pointer"
                      borderWidth="1px"
                      borderRadius="md"
                      boxShadow="md"
                      px={5}
                      py={3}
                      className="m-2"
                      bg={isSelected ? "#00204a" : "white"} // تغيير لون الخلفية إذا كان الصف مختارًا
                      color={isSelected ? "white" : "black"} // تغيير لون النص إذا كان الصف مختارًا
                      borderColor={isSelected ? "#00204a" : "gray.300"} // تغيير لون الإطار إذا كان الصف مختارًا
                    >
                      كورسات الصف {classe.name}
                    </Box>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div>
              <h1>لا يوجد صفوف دراسية</h1>
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
