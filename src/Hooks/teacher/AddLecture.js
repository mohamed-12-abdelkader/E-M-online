import { useState } from "react";
import baseUrl from "../../api/baseUrl";
import avatar from "../../img/th.jpeg";

const useAddLecture = () => {
  const [image, setImage] = useState(avatar);
  const [description, setDescription] = useState("");
  const [grad_id, setGrade] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [img, setImg] = useState(avatar);
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        const base64String = reader.result;
        const imageFile = b64toFile(base64String, "image.png");
        setImage(imageFile);
        setImg(URL.createObjectURL(imageFile));
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);
    formData.append("grad_id", grad_id);
    formData.append("price", price);

    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    try {
      const response = await baseUrl.post("api/lecture/add", formData, {
        headers,
      });

      if (response.status === 200) {
        // Success
        setLoading(false);
        console.log("Lecture added successfully!");
        console.log(response);
      } else {
        // Error handling
        setLoading(false);
        setError(response.data.message);
      }
    } catch (error) {
      // Error handling
      setLoading(false);
      console.log(error);
    }
  };

  const b64toFile = (base64String, filename) => {
    const arr = base64String.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    const blob = new Blob([u8arr], { type: mime });
    return new File([blob], filename, { type: mime });
  };

  return {
    image,

    description,
    setDescription,

    setGrade,
    price,
    setPrice,
    loading,
    error,
    handleSubmit,
    onImageChange,
    img,
  };
};

export default useAddLecture;
