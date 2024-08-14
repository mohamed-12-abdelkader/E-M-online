import { useState } from "react";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import {
  Box,
  Heading,
  Spinner,
  FormControl,
  Select,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import { MdCancelPresentation } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaVideo } from "react-icons/fa";
import GitTeacherByToken from "../../Hooks/student/GitTeacherByToken";

const AllTeacherLogin = () => {
  const [loading, teachers] = GitTeacherByToken();
  const [selectedStream, setSelectedStream] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleStreamChange = (e) => {
    setSelectedStream(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const filteredTeachers = Array.isArray(teachers)
    ? teachers.filter((teacher) => {
        let isValid = teacher.id !== 25;

        if (selectedStream === "علمي") {
          isValid =
            isValid &&
            !["علم نفس واجتماع", "فلسفة ومنطق", "تاريخ", "جغرافيا"].includes(
              teacher.subject.trim()
            );
        } else if (selectedStream === "ادبي") {
          isValid =
            isValid &&
            !["فيزياء", "كيمياء", "احياء", "جيولوجيا", "رياضيات"].includes(
              teacher.subject.trim()
            );
        }

        if (selectedSubject) {
          isValid =
            isValid && teacher.subject.trim() === selectedSubject.trim();
        }

        return isValid;
      })
    : [];

  return (
    <Box w="100%" my="5" px={{ base: "3", md: "5" }}>
      <Heading
        as="h1"
        fontSize="50px"
        color="blue.500"
        display="flex"
        alignItems="center"
        mb="2"
      >
        <PiChalkboardTeacherBold className=" mx-2 text-red-500" />
        المدرسين
      </Heading>
      <Flex justify="center" px="3">
        <FormControl w="200px" m="2">
          <Select placeholder="اختر الشعبة" onChange={handleStreamChange}>
            <option value="علمي">علمي</option>
            <option value="ادبي">ادبي</option>
          </Select>
        </FormControl>
        <FormControl w="200px" m="2">
          <Select placeholder="اختر المادة" onChange={handleSubjectChange}>
            <option value="لغة عربية ">لغة عربية</option>
            <option value="English">لغة انجليزية</option>
            <option value="French">لغة فرنسية</option>
            <option value="فيزياء ">فيزياء</option>
            <option value="كيمياء ">كيمياء</option>
            <option value="احياء ">احياء</option>
            <option value="جيولوجيا ">جيولوجيا</option>
            <option value="تاريخ">تاريخ</option>
            <option value="جغرافيا ">جغرافيا</option>
            <option value=" فلسفة ومنطق ">فلسفة</option>
            <option value="علم نفس واجتماع ">علم نفس</option>
            <option value="رياضيات ">رياضيات</option>
          </Select>
        </FormControl>
      </Flex>
      <Box>
        {loading ? (
          <Flex w="90%" m="auto" my="5" justify="center" flexWrap="wrap">
            <Spinner size="xl" color="primary" m="2" />
            <Spinner size="xl" color="primary" m="2" />
            <Spinner size="xl" color="primary" m="2" />
            <Spinner size="xl" color="primary" m="2" />
            <Spinner size="xl" color="primary" m="2" />
            <Spinner size="xl" color="primary" m="2" />
            <Spinner size="xl" color="primary" m="2" />
          </Flex>
        ) : filteredTeachers.length > 0 ? (
          <Flex
            w="95%"
            m="auto"
            flexWrap="wrap"
            justify={{ base: "center", md: "start" }}
            bg="white"
            p="5"
          >
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="w-[300px] border shadow m-2 p-2 h-auto"
                style={{ height: "auto" }}
              >
                <Link to={`teacher/${teacher.id}`}>
                  <div>
                    <Image
                      src={teacher.image}
                      h="220px"
                      w="100%"
                      borderRadius="10px"
                      alt="Course"
                    />
                    <Flex justify="space-between" py="2">
                      <Text fontWeight="bold" mt="2">
                        {teacher.name}
                      </Text>
                      <Text fontWeight="bold" mt="2">
                        {teacher.subject}
                      </Text>
                    </Flex>
                  </div>
                  <hr className="w-[90%] m-auto" />
                  <div className="h-auto">
                    <h1 fontWeight="bold" className="flex font-bold my-2">
                      <FaVideo className="m-1 text-red-500" /> مدرس ال{" "}
                      {teacher.subject} للثانوية العامة
                    </h1>
                  </div>
                </Link>
              </div>
            ))}
          </Flex>
        ) : (
          <Flex
            justify="center"
            alignItems="center"
            bg="white"
            h="200px"
            borderRadius="20px"
          >
            <Text
              fontWeight="bold"
              display="flex"
              alignItems="center"
              color="black"
            >
              <MdCancelPresentation className="m-1 text-red-500" />
              لا يوجد مدرسين الان
            </Text>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default AllTeacherLogin;
