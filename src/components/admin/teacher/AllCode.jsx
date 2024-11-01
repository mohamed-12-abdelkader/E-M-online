import React from "react";
import {
  Box,
  VStack,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Divider,
  Button,
  useToast,
} from "@chakra-ui/react";

const AllCode = () => {
  // جلب البيانات من localStorage
  const storedData = localStorage.getItem("code");

  // التحقق من وجود البيانات وتحويلها إلى كائن
  let codesData;
  try {
    codesData = JSON.parse(storedData);
  } catch (error) {
    codesData = null;
  }

  // استخدام useToast لعرض رسائل الخطأ إن وجدت
  const toast = useToast();

  if (!codesData) {
    toast({
      title: "خطأ في البيانات",
      description: "لم يتم العثور على بيانات الأكواد في التخزين المحلي.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
    return <Text>لم يتم العثور على بيانات الأكواد.</Text>;
  }

  const { name: courseName, codes } = codesData;

  return (
    <VStack
      spacing={2}
      mt={10}
      width="%"
      mx="auto"
      className="flex justify-center"
    >
      {/* عنوان الكورس */}
      <Heading as="h2" size="lg">
        {courseName}
      </Heading>

      {/* عرض الأكواد في شبكة بسيطة */}
      <div className="flex flex-wrap">
        {codes.map((code, index) => (
          <Card
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            className="card_code h-[] w-[400px] m-2 px-3"
          >
            <div className="text-center my-3">
              <Heading size="md">كود تفعيل {courseName}</Heading>
            </div>

            <div>
              <div className="text-center">
                <Text
                  fontSize="xl"
                  className="text-red-500"
                  fontWeight="bold"
                  mb={2}
                >
                  {code}
                </Text>
              </div>
              <div>
                <div></div>
                <div>
                  <h1 className="font-bold m-1">
                    {" "}
                    تواصل مع خدمة العملاء لمعرفة كيفية تفعيل الكورس
                  </h1>
                  <h1 className="font-bold m-1">01286524804</h1>
                  <h1 className="font-bold m-1">01286525940</h1>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </VStack>
  );
};

export default AllCode;
