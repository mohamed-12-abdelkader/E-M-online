import { Button, Skeleton, Stack } from "@chakra-ui/react";

import { Link, useParams } from "react-router-dom";
import { FaVideo } from "react-icons/fa6";
import GitLectureCenterDetails from "../../Hooks/student/GitLectureCenterDetails";
import GitLectureCeterTdetails from "../../Hooks/teacher/GitLectureCeterTdetails";
import LectureDetailsBase from "./LectureDetailsBase";
const LectureCenterDetails = () => {
  const { id } = useParams();
  const [lectureLoading, lectures] = GitLectureCenterDetails({ id: id });
  const [lectureLoadingt, lecturest] = GitLectureCeterTdetails({ id: id });
  const videosToMap = lectures.videos || lecturest.videos || [];
  if (lectureLoading || lectureLoadingt) {
    return (
      <Stack className="w-[90%] m-auto mt-[150px]" style={{ height: "60vh" }}>
        <Skeleton height="20px" className="mt-5" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }
  console.log("lectures", lectures);
  return (
    <div className="mt-[150px]">
      <LectureDetailsBase
        videosToMap={videosToMap}
        lectureTLoading={lectureLoadingt}
        lectureLoading={lectureLoading}
        lectures={lectures}
        lecturesT={lecturest}
      />
    </div>
  );
};

export default LectureCenterDetails;
