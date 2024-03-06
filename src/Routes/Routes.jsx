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

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/verify_code" element={<VerifyCode />} />
        <Route path="/rest_pass" element={<ResetPassword />} />

        <Route path="/admin/*" element={<Admin />}>
          <Route path="management" element={<AdminMange />} />
          <Route path="addteacher" element={<AddTeacher />} />
          <Route path="create_code" element={<AdminCreateCode />} />
          <Route path="cridet" element={<AdminTeacherBalances />} />
          <Route path="create_lecture" element={<CreateLecture />} />
          <Route path="add_video" element={<AddVideo />} />
          <Route path="create_group" element={<CreateGroup />} />
          <Route path="add_student" element={<AddStudent />} />
          <Route path="addexam" element={<AddExam />} />
          <Route path="add_question" element={<AddQuestion />} />
        </Route>
        <Route path="/code" element={<Code />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/teacher_wallet" element={<TeacherWallet />} />
        <Route path="/teacher/:id" element={<TeacherDetails />} />
        <Route path="/my_lecture" element={<MyLecture />} />
        <Route path="/profile" element={<Profile />} />
        {""}
        <Route path="/teacher_lecture/*" element={<TeacherLecture />}>
          <Route path="lectures/:id" element={<Lectures />} />
        </Route>
        <Route path="/my_groups" element={<MyGroups />}>
          <Route path="group/:id" element={<Groups />} />
        </Route>
        <Route path="/group/:id" element={<GroupDetails />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
