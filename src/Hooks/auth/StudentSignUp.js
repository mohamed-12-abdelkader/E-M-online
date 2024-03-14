import { useState } from "react";
import baseUrl from "../../api/baseUrl";
import { toast } from "react-toastify";
const StudentSignUp = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [passCon, setPassCon] = useState("");
  const [phone, setPhone] = useState("");
  const [grad, setGrad] = useState("");
  const [loading, setLoading] = useState("");

  const handleFnameChange = (e) => {
    setFname(e.target.value);
  };
  const handleLnameChange = (e) => {
    setLname(e.target.value);
  };
  const handleMailChange = (e) => {
    setMail(e.target.value);
  };
  const handlePassConChange = (e) => {
    setPassCon(e.target.value);
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleGradeChange = (e) => {
    setGrad(e.target.value);
  };

  const handleLSignUp = async (e) => {
    if (pass !== passCon) {
      toast.warn("كلمة السر غير متطابقة ");
    } else if (
      !fName ||
      !lName ||
      !mail ||
      !pass ||
      !passCon ||
      !phone ||
      !grad
    ) {
      toast.warn(" يجب اكمال البيانات ");
    }
    e.preventDefault();

    try {
      setLoading(true);

      const response = await baseUrl.post(`api/user/signup`, {
        mail,
        fName,
        lName,
        pass,
        grad,
        phone,
        ip: window.location.hostname,
      });

      // هنا يمكنك إضافة المنطق الخاص بعملية تسجيل الدخول

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.Data));

      // يمكنك إظهار رسالة نجاح باستخدام toast
      toast.success("تم  انشاء الحساب بنجاح  بنجاح");
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    } catch (error) {
      // يمكنك إظهار رسالة خطأ باستخدام toast

      console.error("Error logging in:", error.response.data.msg);
      if (error.response.data.msg == "You must login from the same device") {
        toast.error("لقد تجاوزت الحد المسموح لك من الاجهزة ");
      } else if (error.response.data.msg == " Invalid username or password") {
        toast.error("بيانات المستخدم غير صحيحة ");
      } else if (error.response.data.msg == "This user already registered") {
        toast.error("هذا الايميل موجود بالفعل على المنصة ");
      }
    } finally {
      setLoading(false);
      setMail("");
      setFname("");
      setLname("");
      setPhone("");
      setPass("");
      setPassCon("");
      setGrad("");
    }
  };
  return [
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
  ];
};

export default StudentSignUp;
