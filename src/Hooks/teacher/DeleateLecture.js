import { toast } from "react-toastify";
import baseUrl from "../../api/baseUrl";
import { useState } from "react";

const DeleateLecture = () => {
  const token = localStorage.getItem("token");
  const [deleteOnlineLoading, setDeleteOnlineLoading] = useState(false);
  const [deleteCenterLoading, setDeleteCenterLoading] = useState(false);
  const deleteOnlineLecture = async (id) => {
    try {
      setDeleteOnlineLoading(true);
      await baseUrl.delete(`api/lecture/online/${id}`, {
        headers: {
          token: token,
        },
      });

      toast.success("تم حذف محاضرة الاونلاين بنجاح   ");

      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error("Error deleting teacher:", error);
      toast.error("فشل حذف المحاضرة  ");
    } finally {
      setDeleteOnlineLoading(false);
    }
  };
  const deleteCenterLecture = async (id) => {
    try {
      setDeleteCenterLoading(true);
      await baseUrl.delete(`api/lecture/group/${id}`, {
        headers: {
          token: token,
        },
      });

      toast.success("تم حذف محاضرة سنتر  بنجاح   ");

      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      toast.error("فشل حذف المحاضرة  ");
    } finally {
      setDeleteCenterLoading(false);
    }
  };
  return [
    deleteOnlineLoading,
    deleteOnlineLecture,
    deleteCenterLoading,
    deleteCenterLecture,
  ];
};

export default DeleateLecture;
