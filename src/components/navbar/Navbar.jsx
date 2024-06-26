import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Spinner,
} from "@chakra-ui/react";
import logo from "../../img/e-m megmg.png";
import { FaMoon, FaSun } from "react-icons/fa"; // استخدمت react-icons بدلاً من @chakra-ui/icons
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaCreditCard, FaWallet } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import UserType from "../../Hooks/auth/userType";
import { GrGroup } from "react-icons/gr";
import { FaVideo } from "react-icons/fa6";
import MyWallet from "../../Hooks/student/MyWallet";
import { PiVideoFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
const NavLink = () => {
  return (
    <Box
      style={{ width: "100%" }}
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    ></Box>
  );
};

export default function Nav() {
  const [walletLoading, mytwallet] = MyWallet();
  const [userData, isAdmin, isTeacher, student] = UserType();
  const user = JSON.parse(localStorage.getItem("user"));
  const { colorMode, toggleColorMode } = useColorMode();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
    // يمكنك إضافة أي إجراءات إضافية هنا، على سبيل المثال إعادة توجيه المستخدم إلى صفحة تسجيل الدخول
  };

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position="fixed"
        top={0}
        left={0}
        width="100%"
        height="80px"
        zIndex={1000}
        style={{ direction: "ltr" }}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          className="mt-1"
        >
          <Link to="/">
            <img src={logo} className="h-[60px] w-[100px] my-2" />
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={2}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <FaMoon /> : <FaSun />}{" "}
                {/* استخدام react-icons بدلاً من @chakra-ui/icons */}
              </Button>
              {user ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Button colorScheme="teal" variant="outline">
                      <IoPerson className="m-1 text-xl text-blue-500" />
                    </Button>
                  </MenuButton>
                  <MenuList alignItems={"center"} style={{ direction: "rtl" }}>
                    <MenuItem className="font-bold">
                      <IoPerson className="m-1 text-xl text-blue-500" />
                      اهلا :{user.name || user.fname}
                    </MenuItem>
                    {isAdmin ? (
                      <div>
                        <Link to="/admin/management">
                          <MenuItem className="font-bold">
                            <MdAdminPanelSettings className="m-1 text-xl text-blue-500" />
                            صفحة الادمن
                          </MenuItem>
                        </Link>
                        <Link to="/code">
                          <MenuItem className="font-bold">
                            <FaCreditCard className="m-1 text-xl text-blue-500" />
                            اكواد الشحن
                          </MenuItem>
                        </Link>
                      </div>
                    ) : isTeacher ? (
                      <div>
                        <Link to="/admin/add_month">
                          <MenuItem className="font-bold">
                            <MdAdminPanelSettings className="m-1 text-xl text-blue-500" />
                            لوحة التحكم
                          </MenuItem>
                        </Link>
                        <Link to="/teacher_courses">
                          <MenuItem className="font-bold">
                            <FaVideo className="m-1 text-xl text-blue-500" />
                            كورساتى
                          </MenuItem>
                        </Link>
                        <Link to="/my_groups">
                          <MenuItem className="font-bold">
                            <GrGroup className="m-1 text-xl text-blue-500" />
                            مجموعاتى
                          </MenuItem>
                        </Link>
                        <Link to="/teacher_wallet">
                          <MenuItem className="font-bold">
                            <FaWallet className="m-1 text-xl text-blue-500" />
                            محفظتى
                          </MenuItem>
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link to="/profile">
                          <MenuItem className="font-bold">
                            <IoPerson className="m-1 text-xl text-blue-500" />
                            الملف الشخصى
                          </MenuItem>
                        </Link>
                        <Link to="/my_lecture">
                          <MenuItem className="font-bold">
                            <PiVideoFill className="m-1 text-xl text-blue-500" />
                            كورساتى
                          </MenuItem>
                        </Link>

                        <Link to="/wallet">
                          <MenuItem className="font-bold">
                            <FaWallet className="m-1 text-xl text-blue-500" />
                            محفظة الطالب
                          </MenuItem>
                        </Link>
                        <MenuItem className="font-bold">
                          <GiWallet className="m-1 text-xl text-blue-500" />
                          رصيدى :{" "}
                          {walletLoading ? (
                            <Spinner />
                          ) : (
                            <div>{mytwallet.value}</div>
                          )}{" "}
                          جنية
                        </MenuItem>
                      </div>
                    )}

                    <MenuItem onClick={handleLogout} className="font-bold">
                      <CiLogin className="m-1 text-xl text-red-500" />
                      تسجيل الخروج
                    </MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <div className="flex">
                  <Link to="/login">
                    <Button
                      className="m-1 w-[120px] md:w-[150px]"
                      colorScheme="teal"
                      variant="outline"
                    >
                      تسجيل دخول
                      <RiLockPasswordFill className="m-1 " />
                    </Button>
                  </Link>
                  <Link to="/singup">
                    <Button
                      className="m-1 w-[120px] md:w-[150px]"
                      colorScheme="red"
                    >
                      ! انشئ حسابك
                      <CgProfile className="m-1" />
                    </Button>
                  </Link>
                </div>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
