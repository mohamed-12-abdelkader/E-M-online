import ScrollToTop from "../../components/scollToTop/ScrollToTop";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div
      style={{ height: "80vh" }}
      className=" flex  items-center justify-center mt-[150px]"
    >
      <div className="flex flex-wrap items-center justify-center">
        <Link to="/teacher_login">
          <div className="text-center m-5">
            <img
              src="teacher.png"
              className="h-[150px] w-[150px]"
              style={{ borderRadius: "50%" }}
            />
            <h1 className="my-1 font-bold text-xl"> مدرس</h1>
          </div>
        </Link>
        <Link to="/student_login">
          <div className="text-center m-5">
            <img
              src="loginstudent.png"
              className="h-[150px] w-[150px]"
              style={{ borderRadius: "50%" }}
            />
            <h1 className="my-1 font-bold text-xl"> طالب</h1>
          </div>
        </Link>
        <Link to="/admin_login">
          <div className="text-center m-5">
            <img
              src="admin.png"
              className="h-[150px] w-[150px]"
              style={{ borderRadius: "50%" }}
            />
            <h1 className="my-1 font-bold text-xl"> ادمن </h1>
          </div>
        </Link>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default LoginPage;
