import { useParams } from "react-router-dom";
import GitLectureDetails from "../../Hooks/student/GitLectureDetails";
import GitLecturTdetails from "../../Hooks/teacher/GitLecturTdetails";
import LectureDetailsBase from "./LectureDetailsBase";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";
const LecturDetails = () => {
  const { id } = useParams();
  const [lectureLoading, lectures] = GitLectureDetails({ id: id });
  const [lectureTLoading, lecturesT] = GitLecturTdetails({ id: id });

  const videosToMap = lectures.videos || lecturesT.videos || [];

  console.log("lectr", lecturesT);

  return (
    <div className="mt-[150px]">
      <LectureDetailsBase
        id={id}
        videosToMap={videosToMap}
        lectureTLoading={lectureTLoading}
        lectureLoading={lectureLoading}
        lectures={lectures}
        lecturesT={lecturesT}
      />
      <ScrollToTop />
    </div>
  );
};

export default LecturDetails;
