import { useState } from "react";

import baseUrl from "../../api/baseUrl";
import { toast } from "react-toastify";

const useLogin = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("user"); // افتراضياً نوع المستخدم عادي

  const mailChange = (e) => {
    setMail(e.target.value);
  };

  const passChange = (e) => {
    setPass(e.target.value);
  };

  const handleLogin = async (e) => {
    if (!mail || !pass) {
      toast.warn("يجب ادخال جميع البيانات ");
    }
    e.preventDefault();

    try {
      setLoading(true);
      let loginApi;

      if (userType === "admin") {
        loginApi = "api/admin/login";
      } else if (userType === "teacher") {
        loginApi = "api/teacher/login";
      } else {
        loginApi = "api/user/login";
      }

      // إذا كان المستخدم نوع "user"، قم بإرسال الـ IP
      const requestData =
        userType === "user"
          ? { mail, pass, ip: window.location.hostname }
          : { mail, pass };

      const response = await baseUrl.post(`${loginApi}`, requestData);

      // هنا يمكنك إضافة المنطق الخاص بعملية تسجيل الدخول

      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.Data || response.data.data)
      );

      // يمكنك إظهار رسالة نجاح باستخدام toast
      console.log(response);
      toast.success("تم تسجيل الدخول بنجاح");
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    } catch (error) {
      // يمكنك إظهار رسالة خطأ باستخدام toast
      toast.error("بيانات المستخدم غير صحيحة ");
      console.error("Error logging in:", error.response.data.msg);
      if (error.response.data.msg == "You must login from the same device") {
        toast.error("لقد تجاوزت الحد المسموح لك من الاجهزة ");
      } else if (error.response.data.msg == " Invalid username or password") {
        toast.error("بيانات المستخدم غير صحيحة ");
      }
    } finally {
      setLoading(false);
      setMail("");
      setPass("");
    }
  };

  return [
    handleLogin,
    passChange,
    mailChange,
    mail,
    pass,
    userType,
    setUserType,
    loading,
  ];
};

export default useLogin;
