import { Button, Select, Input, Spinner } from "@chakra-ui/react";
import GitClasses from "../../../Hooks/teacher/GitClasses";
import GitTeacherLecture from "../../../Hooks/teacher/GitTeacherLecture";
import { useState } from "react";
import useAddVideo from "../../../Hooks/teacher/AddVideo";

const AddVideo = () => {
  const [classesLoading, classes] = GitClasses();
  const [grad, setGrad] = useState("");
  const [
    videoloading,
    handleAddVideo,
    video,

    name,
    setLg_id,
    setLo_id,
    setName,
    setVideo,
  ] = useAddVideo();
  const [
    mergedLectures,
    lecturesCenter,
    lecturesOnline,
    lectureLoading,
    lectureCenterLoading,
  ] = GitTeacherLecture({ id: grad });
  console.log(lecturesCenter);
  return (
    <div className="p-5">
      <div className="text-center">
        <h1 className="font-bold text-xl"> اضافة محاضرة </h1>
      </div>
      <div>
        <h1 className="font-bold my-2"> اختر الصف الدراسى </h1>
        <Select
          className="my-2"
          placeholder={classesLoading ? "جار تحميل الصفوف..." : " اختر  الصف  "}
          size="lg"
          onChange={(e) => {
            setGrad(e.target.value);
          }}
          style={{ direction: "ltr" }}
          disabled={classesLoading}
        >
          {classesLoading ? (
            <option disabled>Loading...</option>
          ) : classes.length > 0 ? (
            classes.map((classItem) => (
              <option key={classItem.id} value={classItem.id}>
                {classItem.name}
              </option>
            ))
          ) : (
            <option disabled> لا يوجد صفوف دراسية متاحة </option>
          )}
        </Select>
        <h1 className="text-red-500">يجب اختيار محاضرة واحدة بحد ادنى !</h1>
        <h1 className="font-bold my-2"> اختر محاضرة السنتر </h1>
        <Select
          className="my-2"
          placeholder={
            lectureCenterLoading ? "جار تحميل الصفوف..." : " اختر  الصف  "
          }
          size="lg"
          onChange={(e) => {
            setLg_id(e.target.value);
          }}
          style={{ direction: "ltr" }}
          disabled={lectureCenterLoading}
        >
          {lectureCenterLoading ? (
            <option disabled>Loading...</option>
          ) : lecturesCenter.length > 0 ? (
            lecturesCenter.map((lecture) => (
              <option key={lecture.id} value={lecture.id}>
                {lecture.description}
              </option>
            ))
          ) : (
            <option disabled> لا يوجد محاضرات متاحة </option>
          )}
        </Select>
        <h1 className="font-bold my-2"> اختر محاضرة الاونلاين </h1>
        <Select
          className="my-2"
          placeholder={lectureLoading ? "جار تحميل الصفوف..." : " اختر  الصف  "}
          size="lg"
          onChange={(e) => {
            setLo_id(e.target.value);
          }}
          style={{ direction: "ltr" }}
          disabled={lectureLoading}
        >
          {lectureLoading ? (
            <option disabled>Loading...</option>
          ) : lecturesOnline.length > 0 ? (
            lecturesOnline.map((lecture) => (
              <option key={lecture.id} value={lecture.id}>
                {lecture.description}
              </option>
            ))
          ) : (
            <option disabled> لا يوجد محاضرات متاحة </option>
          )}
        </Select>
        <div className="my-3">
          <h1 className="font-bold my-2">اسم الفيديو </h1>
          <Input
            placeholder="  اسم الفيديو "
            size="lg"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="my-3">
          <h1 className="font-bold my-2">رابط الفيديو </h1>
          <Input
            placeholder="  ادخل رابط الفيديو "
            size="lg"
            value={video}
            onChange={(e) => {
              setVideo(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="text-center my-3">
        <Button colorScheme="blue" onClick={handleAddVideo}>
          {videoloading ? <Spinner /> : "انشاء المحاضرة "}
        </Button>
      </div>
    </div>
  );
};

export default AddVideo;
