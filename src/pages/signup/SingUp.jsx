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
    <div
      className=" mt-[70px] mb-10 grid justify-center bg-[#00204a] p-3  md:flex justify-between items-center "
      style={{ direction: "ltr", minHeight: "90vh" }}
    >
      <div
        className="md:w-[70%] bg-white p-3 mt-[50px]"
        style={{ borderRadius: "20px" }}
      >
        <div>
          <div className="text-center">
            <h1 className="fonts font-bold text-xl text-black">
              {" "}
              انشاء حساب جديد
            </h1>
          </div>

          <div
            className="flex p-5 flex-wrap w-[100%]  my-7 p-1"
            style={{ direction: "rtl" }}
          >
            <div className="m-2 w-[100%] md:w-[45%]">
              <h1 className="fonts font-bold m-2 text-black"> الاسم الاول </h1>
              <Input
                placeholder="الاسم الاول  "
                size="lg"
                className="m-2 w-[90%] mx-auto md:w-[48%]"
                value={fName}
                onChange={handleFnameChange}
                style={{ border: "solid 2px #ccc" }}
              />
            </div>
            <div className="m-2 w-[100%] md:w-[45%]">
              <h1 className="fonts font-bold m-2 text-black"> الاسم الاخير </h1>
              <Input
                placeholder="الاسم الاخير "
                size="lg"
                className="m-2 w-[90%] mx-auto md:w-[48%]"
                value={lName}
                onChange={handleLnameChange}
                style={{ border: "solid 2px #ccc" }}
              />
            </div>
            <div className="m-2 w-[100%] md:w-[45%]">
              <h1 className="fonts font-bold m-2 text-black"> رقم الهاتف </h1>
              <Input
                type="number"
                placeholder="رقم الهاتف "
                size="lg"
                className="m-2 w-[90%] mx-auto md:w-[48%] border "
                style={{ border: "solid 2px #ccc" }}
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
            <div className="m-2 w-[100%] md:w-[45%]">
              <h1 className="fonts font-bold m-2 text-black"> الايميل </h1>
              <Input
                placeholder=" ادخل الايميل  "
                size="lg"
                className="m-2 w-[90%] mx-auto md:w-[48%]"
                value={mail}
                onChange={handleMailChange}
                style={{ border: "solid 2px #ccc" }}
              />
            </div>
            <div className="m-2 w-[100%] md:w-[45%]">
              <h1 className="fonts font-bold m-2 text-black"> كلمة السر </h1>
              <Input
                type="password"
                placeholder="كلمة السر "
                size="lg"
                className="m-2 w-[90%] mx-auto md:w-[48%]"
                value={pass}
                onChange={handlePassChange}
                style={{ border: "solid 2px #ccc" }}
              />
            </div>
            <div className="m-2 w-[100%] md:w-[45%]">
              <h1 className="fonts font-bold m-2 text-black">
                {" "}
                تاكيد كلمة السر{" "}
              </h1>
              <Input
                type="password"
                placeholder="تاكيد كلمة السر "
                size="lg"
                className="m-2 w-[90%] mx-auto md:w-[48%]"
                value={passCon}
                onChange={handlePassConChange}
                style={{ border: "solid 2px #ccc" }}
              />
            </div>
            <div className="m-2 w-[94%]">
              <h1 className="fonts font-bold m-2 text-black"> اختر الصف </h1>
              <Select
                value={grad}
                onChange={handleGradeChange}
                placeholder="اختر الصف الدراسى "
                className="text-black"
                size="lg"
                style={{ direction: "ltr", border: "solid 2px #ccc" }}
              >
                <option value={1}> الصف الاول الثانوى </option>
                <option value={2}> الصف الثانى الثانوى </option>
                <option value={3}> الصف الثالث الثانوى </option>
              </Select>
            </div>
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
      <div>
        <img src="Untitled-1.png" className="h-[400px]" />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default SingUp;
