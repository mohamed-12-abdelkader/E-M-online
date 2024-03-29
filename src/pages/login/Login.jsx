import { Button, Input, Spinner } from "@chakra-ui/react";
import useLogin from "../../Hooks/auth/useLogin";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";

const Login = () => {
  const [
    handleLogin,
    passChange,
    mailChange,
    mail,
    pass,
    userType,
    setUserType,
    loading,
  ] = useLogin();
  return (
    <div
      style={{ minHeight: "80vh" }}
      className="flex justify-center items-center mt-[100px]"
    >
      <div className="w-[90%]  shadow border p-5 md:w-[60%]">
        <div>
          <div className="text-center">
            <h1 className="font-bold text-xl"> تسجيل الدخول </h1>
          </div>
          <div className="w-[100%] my-7">
            <h1 className="font-bold my-2">ادخل الايميل </h1>
            <Input
              className=""
              placeholder="ادخل الايميل "
              size="lg"
              value={mail}
              onChange={mailChange}
            />
            <h1 className="font-bold mt-5 mb-2">ادخل كلمة السر </h1>
            <Input
              className=""
              type="password"
              placeholder="ادخل كلمة السر  "
              size="lg"
              value={pass}
              onChange={passChange}
            />
          </div>
        </div>
        <div className="my-5">
          <Link to="/verify_code" className="text-blue-500">
            هل نسيت كلمة السر ؟
          </Link>
        </div>
        <div className="flex justify-between">
          <div className="flex ">
            <input
              type="checkbox"
              onChange={() => setUserType("admin")}
              checked={userType === "admin"}
            />
            <h1 className="m-1 font-bold"> ادمن </h1>
          </div>
          <div className="flex ">
            <input type="checkbox" />
            <h1 className="m-1 font-bold"> طالب </h1>
          </div>

          <div className="flex ">
            <input
              type="checkbox"
              onChange={() => setUserType("teacher")}
              checked={userType === "teacher"}
            />
            <h1 className="m-1 font-bold"> مدرس </h1>
          </div>
        </div>
        <div className="text-center my-3">
          <Button
            colorScheme="blue"
            onClick={handleLogin}
            isDisabled={loading || !mail || !pass}
          >
            {" "}
            {loading ? <Spinner /> : "تسجيل الدخول "}{" "}
          </Button>
        </div>
        <h1 className="my-5  font-bold">
          {" "}
          لا يوجد لديك حساب ؟{" "}
          <Link to="/singup" style={{ color: "red", textDecoration: "none" }}>
            {" "}
            انشئ حسابك الان!{" "}
          </Link>
        </h1>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Login;
