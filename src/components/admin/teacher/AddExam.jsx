import { Button, Input, Select, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import GitClasses from "../../../Hooks/teacher/GitClasses";
import GitTeacherLecture from "../../../Hooks/teacher/GitTeacherLecture";
import useAddExam from "../../../Hooks/teacher/AddExam";

const AddExam = () => {
  const [
    examloading,
    handleAddExam,
    number,
    name,
    setLg_id,
    setLo_id,
    setName,
    setNamber,
  ] = useAddExam();
  const [grad, setGrad] = useState("");
  const [
    mergedLectures,
    lecturesCenter,
    lecturesOnline,
    lectureLoading,
    lectureCenterLoading,
  ] = GitTeacherLecture({ id: grad });
  const [classesLoading, classes] = GitClasses();
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-xl"> انشاء امتحان </h1>
      </div>
      <div className="my-9">
        <h1 className="my-3 font-bold"> اختر صف الدراسى </h1>
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
        <h1 className="text-red-500 my-2">
          {" "}
          - يجب اختيار محاضرة واحدة بحد ادنى للامتحان
        </h1>
        <h1 className="my-3 font-bold"> اختر المحاضر (سنتر ) </h1>
        <Select
          onChange={(e) => {
            setLg_id(e.target.value);
          }}
          className="my-2"
          placeholder={
            lectureCenterLoading ? "جار تحميل الصفوف..." : " اختر  الصف  "
          }
          size="lg"
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
        <h1 className="my-3 font-bold"> اختر المحاضر (اونلاين ) </h1>
        <Select
          onChange={(e) => {
            setLo_id(e.target.value);
          }}
          className="my-2"
          placeholder={lectureLoading ? "جار تحميل الصفوف..." : " اختر  الصف  "}
          size="lg"
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
        <h1 className="my-3 font-bold"> ادخل اسم الامتحان </h1>
        <Input
          placeholder="  اسم الامتحان    "
          size="lg"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <h1 className="my-3 font-bold"> عدد الاسئلة </h1>
        <Input
          placeholder="   عدد الاسئلة     "
          size="lg"
          value={number}
          onChange={(e) => {
            setNamber(e.target.value);
          }}
        />

        <div className="my-3 text-center">
          <Button colorScheme="blue" onClick={handleAddExam}>
            {" "}
            {examloading ? <Spinner /> : " اضافة الطالب "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddExam;
