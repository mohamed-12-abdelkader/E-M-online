import { toast } from "react-toastify";
import baseUrl from "../../api/baseUrl";
import { useState } from "react";

const JoinStudent = () => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [mail, setMail] = useState("");
  const [grad_id, setGrad] = useState("");
  const [group_id, setGroup] = useState("");
  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (!grad_id || !mail || !group_id) {
      toast.warn("يجب ادخال جميع البيانات ");
    } else {
      try {
        setLoading(true);

        // Pass the token in the headers
        const response = await baseUrl.post(
          `api/groups/join`,
          { group_id, mail },
          {
            headers: {
              token: token,
              // Add any additional headers if needed
            },
          }
        );

        localStorage.setItem("code", JSON.stringify(response.data));
        toast.success("تم   اضافة الطالب    بنجاح");
      } catch (error) {
        console.error("Error logging in:", error);
        toast.error("فشل  انشاء المجموعة  ");
        console.log(error);
      } finally {
        setLoading(false);
        setGrad("");
        setMail("");
      }
    }
  };
  return [loading, mail, setMail, grad_id, setGrad, setGroup, handleAddStudent];
};

export default JoinStudent;
