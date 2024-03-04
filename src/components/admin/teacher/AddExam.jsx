import { Button, Input, Select } from "@chakra-ui/react";

const AddExam = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-xl"> انشاء امتحان </h1>
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
        <h1 className="text-red-500 my-2">
          {" "}
          - يجب اختيار محاضرة واحدة بحد ادنى للامتحان
        </h1>
        <h1 className="my-3 font-bold"> اختر المحاضر (سنتر ) </h1>
        <Select
          placeholder="اختر المحاضرة   "
          size="lg"
          style={{ direction: "ltr" }}
        >
          <option>....</option>
          <option>....</option>
        </Select>
        <h1 className="my-3 font-bold"> اختر المحاضر (اونلاين ) </h1>
        <Select
          placeholder="اختر المحاضرة   "
          size="lg"
          style={{ direction: "ltr" }}
        >
          <option>....</option>
          <option>....</option>
        </Select>
        <h1 className="my-3 font-bold"> ادخل اسم الامتحان </h1>
        <Input placeholder="  اسم الامتحان    " size="lg" />
        <h1 className="my-3 font-bold"> عدد الاسئلة </h1>
        <Input placeholder="   عدد الاسئلة     " size="lg" />

        <div className="my-3 text-center">
          <Button colorScheme="blue"> اضافة الطالب </Button>
        </div>
      </div>
    </div>
  );
};

export default AddExam;
