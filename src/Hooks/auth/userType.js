import { useEffect, useState } from "react";

const UserType = () => {
  const [userData, setUserData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);

        // تعيين الحالة بناءً على الدور
        if (parsedUserData.role === "teacher") {
          setIsTeacher(true);
        } else if (parsedUserData.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsStudent(true);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  return [userData, isAdmin, isTeacher, isStudent];
};

export default UserType;
