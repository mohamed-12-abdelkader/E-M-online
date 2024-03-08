import { Button, Skeleton, Stack } from "@chakra-ui/react";

import { Link, useParams } from "react-router-dom";
import GitLectureDetails from "../../Hooks/student/GitLectureDetails";
import { FaVideo } from "react-icons/fa6";
import GitLecturTdetails from "../../Hooks/teacher/GitLecturTdetails";
import LectureDetailsBase from "./LectureDetailsBase";

const LecturDetails = () => {
  const { id } = useParams();
  const [lectureLoading, lectures] = GitLectureDetails({ id: id });
  const [lectureTLoading, lecturesT] = GitLecturTdetails({ id: id });

  const videosToMap = lectures.videos || lecturesT.videos || [];

  console.log("lectr", lecturesT);

  return (
    <div className="mt-[150px]">
      <LectureDetailsBase
        videosToMap={videosToMap}
        lectureTLoading={lectureTLoading}
        lectureLoading={lectureLoading}
        lectures={lectures}
        lecturesT={lecturesT}
      />
    </div>
  );
};

export default LecturDetails;
