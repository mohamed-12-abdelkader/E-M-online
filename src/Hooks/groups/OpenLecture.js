import { useState } from "react";
import { toast } from "react-toastify";
import baseUrl from "../../api/baseUrl";

const OpenLectureToGroup = ({ id }) => {
  const token = localStorage.getItem("token");
  const [loadingOpen, setLoading] = useState(false);
  const [g_id, setGrad] = useState("");
  const [l_id, setL_id] = useState("");
  const handleOpenLecture = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Pass the token in the headers
      const response = await baseUrl.post(
        `api/groups/openlecture/group`,
        { g_id: id, l_id },
        {
          headers: {
            token: token,
            // Add any additional headers if needed
          },
        }
      );

      localStorage.setItem("code", JSON.stringify(response.data));
      toast.success("تم   فتح المحاضرة   بنجاح");
    } catch (error) {
      console.error("Error logging in:", error);

      if (
        error.response.data.msg ==
        'duplicate key value violates unique constraint "groupslecture_pkey"'
      ) {
        toast.error("هذة المحاضرة مفتوحة لهذة المجموعة من قبل");
      }
    } finally {
      setLoading(false);
    }
  };
  return [handleOpenLecture, l_id, setL_id, g_id, setGrad, loadingOpen];
};

export default OpenLectureToGroup;
