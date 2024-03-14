import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SingUp from "../pages/signup/SingUp";
import Admin from "../pages/Admin/Admin";
import AdminMange from "../components/admin/AdminMange";
import AdminCreateCode from "../components/admin/AdminCreateCode";
import AdminTeacherBalances from "../components/admin/AdminTeacherBalances";
import Code from "../pages/code/Code";
import CreateLecture from "../components/admin/teacher/CreateLecture";
import AddVideo from "../components/admin/teacher/AddVideo";
import Wallet from "../pages/wallet/Wallet";
import TeacherDetails from "../pages/teacher/TeacherDetails";
import MyLecture from "../pages/leacter/MyLecture";
import Profile from "../pages/profile/Profile";
import VerifyCode from "../pages/password/VerifyCode";
import ResetPassword from "../pages/password/ResetPassword";
import CreateGroup from "../components/admin/teacher/CreateGroup";
import AddStudent from "../components/admin/teacher/AddStudent";
import AddExam from "../components/admin/teacher/AddExam";
import AddQuestion from "../components/admin/teacher/AddQuestion";
import TeacherLecture from "../components/teacher/TeacherLecture";
import Lectures from "../components/teacher/Lectures";
import TeacherWallet from "../pages/wallet/TeacherWallet";
import MyGroups from "../pages/groups/MyGroups";
import Groups from "../pages/groups/Groups";
import GroupDetails from "../pages/groups/GroupDetails";
import AddTeacher from "../components/admin/AddTeacher";
import LecturDetails from "../pages/leacter/LecturDetails";
import LectureCenterDetails from "../pages/leacter/LectureCenterDetails";
import Vedio from "../pages/leacter/Vedio";
import Exam from "../pages/exam/Exam";
import AllResult from "../components/admin/teacher/AllResult";
import ExamTeacher from "../pages/exam/ExamTeacher";
import StudentResult from "../components/admin/teacher/StudentResult";
import UserType from "../Hooks/auth/userType";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";
import ProtectedLogin from "../components/protectedRoute/ProtectedLogin";
import OpenPhone from "../components/admin/OpenPhone";

const AppRouter = () => {
  const [userData, isAdmin, isTeacher, student] = UserType();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <ProtectedLogin auth={isAdmin || student || isTeacher}>
              <Login />
            </ProtectedLogin>
          }
        />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/verify_code" element={<VerifyCode />} />
        <Route path="/rest_pass" element={<ResetPassword />} />

        <Route path="/admin/*" element={<Admin />}>
          <Route element={<ProtectedRoute auth={isAdmin} />}>
            <Route path="management" element={<AdminMange />} />
            <Route path="addteacher" element={<AddTeacher />} />
            <Route path="create_code" element={<AdminCreateCode />} />
            <Route path="cridet" element={<AdminTeacherBalances />} />
            <Route path="open_phone" element={<OpenPhone />} />
          </Route>
          <Route element={<ProtectedRoute auth={isTeacher} />}>
            <Route path="create_lecture" element={<CreateLecture />} />
            <Route path="add_video" element={<AddVideo />} />
            <Route path="create_group" element={<CreateGroup />} />
            <Route path="add_student" element={<AddStudent />} />
            <Route path="addexam" element={<AddExam />} />
            <Route path="add_question" element={<AddQuestion />} />
            <Route path="result/" element={<AllResult />}>
              <Route path="all_result/:resId" element={<StudentResult />} />
            </Route>
          </Route>
        </Route>
        <Route
          path="/code"
          element={
            <ProtectedRoute auth={isAdmin}>
              <Code />
            </ProtectedRoute>
          }
        />
        <Route element={<ProtectedRoute auth={student} />}>
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my_lecture" element={<MyLecture />} />
          <Route path="/teacher/:id" element={<TeacherDetails />} />
          <Route path="/exam/:examId" element={<Exam />} />
        </Route>
        <Route element={<ProtectedRoute auth={isTeacher} />}>
          <Route path="/teacher_wallet" element={<TeacherWallet />} />
          <Route path="/teacher_exam/:examId" element={<ExamTeacher />} />
          <Route path="/teacher_lecture/*" element={<TeacherLecture />}>
            <Route path="lectures/:id" element={<Lectures />} />
          </Route>
          <Route path="/my_groups" element={<MyGroups />}>
            <Route path="group/:id" element={<Groups />} />
          </Route>
          <Route path="/group/:id" element={<GroupDetails />} />
        </Route>
        <Route element={<ProtectedRoute auth={isTeacher || student} />}>
          <Route path="/lecture/:id/" element={<LecturDetails />}>
            <Route path="video/:videoId" element={<Vedio />} />
          </Route>
          <Route
            path="/lecture_center/:lectureId/"
            element={<LectureCenterDetails />}
          >
            <Route path="video/:videoId" element={<Vedio />} />
          </Route>
        </Route>
        {""}
      </Routes>
    </div>
  );
};

export default AppRouter;
