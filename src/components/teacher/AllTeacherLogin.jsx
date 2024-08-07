import { useState } from "react";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import {
  Box,
  Heading,
  Spinner,
  Button,
  FormControl,
  Select,
  Image,
  Flex,
  Text,
  VStack,
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
        let isValid = true;

        if (selectedStream === "علمي") {
          isValid = ![
            "علم نفس واجتماع  ",
            " فلسفة ومنطق   ",
            "تاريخ",
            "جغرافيا",
          ].includes(teacher.subject);
        } else if (selectedStream === "ادبي") {
          isValid = ![
            "فيزياء",
            "كيمياء",
            "احياء",
            "جيولوجيا",
            "رياضة",
          ].includes(teacher.subject);
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
            <option value="جغرفيا ">جغرافيا</option>
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
              <Box
                key={teacher.id}
                w="300px"
                my="3"
                mx={{ base: "2", md: "10" }}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
              >
                <Link to={`teacher/${teacher.id}`}>
                  <Box>
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
                  </Box>
                  <hr className="w-[90%] m-auto" />
                  <Box px="2" my="3">
                    <Text fontWeight="bold" display="flex" alignItems="center">
                      <FaVideo className="m-1 text-red-500" />
                      {teacher.description}
                    </Text>
                  </Box>
                </Link>
              </Box>
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
