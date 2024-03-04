import { Button, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import avatar from "../../../img/th.jpeg";
const AddQuestion = () => {
  const [img, setImg] = useState(avatar);
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-xl"> اضافة سؤال </h1>
      </div>
      <div className="my-9">
        <h1 className="my-3 font-bold"> اختر صف الدراسى </h1>
        <Select
          placeholder="اختر   الصف الدراسى   "
          size="lg"
          style={{ direction: "ltr" }}
        >
          <option>....</option>
          <option>....</option>
        </Select>

        <h1 className="my-3 font-bold"> اختر الامتحان </h1>
        <Select
          placeholder="اختر الامتحان   "
          size="lg"
          style={{ direction: "ltr" }}
        >
          <option>....</option>
          <option>....</option>
        </Select>
        <div style={{ margin: "10px 0", width: "100%" }}>
          <label
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            htmlFor="upload-photo"
          >
            <h5 className="font-bold">
              {" "}
              اختر صورة <span style={{ color: "red" }}> للسؤال </span> (اختيارى
              )
            </h5>
            <img
              src={img}
              style={{ height: "150px", width: "150px", cursor: "pointer" }}
            />
          </label>
          <input
            type="file"
            name="photo"
            id="upload-photo"
            style={{ display: "none" }}
            onChange={onImageChange}
          />
        </div>
        <h1 className="my-3 font-bold"> ادخل السؤال </h1>
        <Input placeholder="   ادخل السؤال     " size="lg" />
        <div>
          <h1 className="my-3 font-bold"> ادخل الاجابات </h1>
          <div className=" md:flex ">
            <Input
              className="w-[25%] m-2"
              placeholder=" الاجابة الاولى        "
              size="lg"
            />
            <Input
              className="w-[25%] m-2"
              placeholder=" الاجابة الاولى   "
              size="lg"
            />
            <Input
              className="w-[25%] m-2"
              placeholder=" الاجابة الاولى   "
              size="lg"
            />
            <Input
              className="w-[25%] m-2"
              placeholder=" الاجابة الاولى   "
              size="lg"
            />
          </div>
        </div>
        <h1 className="my-3 font-bold"> رقم الاجابة الصحيحة </h1>
        <Input
          className="w-[25%] m-2"
          placeholder="  رقم الاجابة الصحيحة         "
          size="lg"
        />
        <div className="my-3 text-center">
          <Button colorScheme="blue"> اضافة الطالب </Button>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
