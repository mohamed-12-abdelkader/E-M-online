import { useParams } from "react-router-dom";
import GitGroupStudent from "../../Hooks/groups/GitGroupStudent";
import { Skeleton, Stack } from "@chakra-ui/react";
const GroupDetails = () => {
  const { id } = useParams();
  const [studentLoading, students] = GitGroupStudent({ id: id });
  if (studentLoading) {
    return (
      <Stack
        className="w-[90%] m-auto my-[100px] "
        style={{ minHeight: "70vh" }}
      >
        <Skeleton height="20px" className="mt-5" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }
  console.log(students);
  return (
    <div className="mt-[150px]" style={{ minHeight: "60vh" }}>
      <div className="w-[90%] m-auto border shadow h-[500px]">
        <div className="flex justify-center mt-5">
          <div className="ribbon2">
            <h1 className="font-bold m-4 text-white text-center">
              {students.group_name}
            </h1>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default GroupDetails;
