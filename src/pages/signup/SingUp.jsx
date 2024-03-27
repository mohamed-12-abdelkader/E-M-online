import { Select, Input, Button, Spinner } from "@chakra-ui/react";
import StudentSignUp from "../../Hooks/auth/StudentSignUp";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";

const SingUp = () => {
  const [
    loading,
    handleLSignUp,
    fName,
    handleFnameChange,
    lName,
    handleLnameChange,
    pass,
    handlePassChange,
    passCon,
    handlePassConChange,
    mail,
    handleMailChange,
    phone,
    handlePhoneChange,
    grad,
    handleGradeChange,
  ] = StudentSignUp();
  return (
    <div className=" flex justify-center items-center mt-[150px] mb-10">
      <div className="w-[90%]  shadow border p-5 md:w-[60%]">
        <div>
          <div className="text-center">
            <h1 className="font-bold text-xl"> انشاء حساب جديد</h1>
          </div>

          <div className="w-[100%] my-7">
            <h1 className="font-bold m-2"> الاسم الاول </h1>
            <Input
              placeholder="الاسم الاول  "
              size="lg"
              className="m-2"
              value={fName}
              onChange={handleFnameChange}
            />
            <h1 className="font-bold m-2"> الاسم الاخير </h1>
            <Input
              placeholder="الاسم الاخير "
              size="lg"
              className="m-2"
              value={lName}
              onChange={handleLnameChange}
            />
            <h1 className="font-bold m-2"> رقم الهاتف </h1>
            <Input
              placeholder="رقم الهاتف "
              size="lg"
              className="m-2"
              value={phone}
              onChange={handlePhoneChange}
            />
            <h1 className="font-bold m-2"> الايميل </h1>
            <Input
              placeholder=" ادخل الايميل  "
              size="lg"
              className="m-2"
              value={mail}
              onChange={handleMailChange}
            />
            <h1 className="font-bold m-2"> كلمة السر </h1>
            <Input
              type="password"
              placeholder="كلمة السر "
              size="lg"
              className="m-2"
              value={pass}
              onChange={handlePassChange}
            />
            <h1 className="font-bold m-2"> تاكيد كلمة السر </h1>
            <Input
              type="password"
              placeholder="تاكيد كلمة السر "
              size="lg"
              className="m-2"
              value={passCon}
              onChange={handlePassConChange}
            />
            <h1 className="font-bold m-2"> اختر الصف </h1>
            <Select
              value={grad}
              onChange={handleGradeChange}
              placeholder="اختر الصف الدراسى "
              size="lg"
              style={{ direction: "ltr" }}
            >
              <option value={1}> الصف الاول الثانوى </option>
              <option value={2}> الصف الثانى الثانوى </option>
              <option value={3}> الصف الثالث الثانوى </option>
            </Select>
          </div>
          <div className="flex justify-center">
            <Button
              colorScheme="blue"
              onClick={handleLSignUp}
              isDisabled={
                !fName ||
                !lName ||
                !mail ||
                !pass ||
                !passCon ||
                !phone ||
                !grad ||
                loading
              }
            >
              {" "}
              {loading ? <Spinner /> : "انشاء حساب "}{" "}
            </Button>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default SingUp;
