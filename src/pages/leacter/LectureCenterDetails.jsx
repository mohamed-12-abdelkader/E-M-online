import { Button, Skeleton, Stack } from "@chakra-ui/react";

import { Link, useParams } from "react-router-dom";
import { FaVideo } from "react-icons/fa6";
import GitLectureCenterDetails from "../../Hooks/student/GitLectureCenterDetails";
import GitLectureCeterTdetails from "../../Hooks/teacher/GitLectureCeterTdetails";
import LectureDetailsBase from "./LectureDetailsBase";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";
const LectureCenterDetails = () => {
  const { lectureId } = useParams();
  const [lectureLoading, lectures] = GitLectureCenterDetails({ id: lectureId });
  const [lectureLoadingt, lecturest] = GitLectureCeterTdetails({
    id: lectureId,
  });
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

  return (
    <div className="mt-[150px]">
      <LectureDetailsBase
        id={lectureId}
        videosToMap={videosToMap}
        lectureTLoading={lectureLoadingt}
        lectureLoading={lectureLoading}
        lectures={lectures}
        lecturesT={lecturest}
      />
      <ScrollToTop />
    </div>
  );
};

export default LectureCenterDetails;
