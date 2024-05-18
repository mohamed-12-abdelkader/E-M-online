import { Button, Card, CardBody, Skeleton, Stack } from "@chakra-ui/react";
import GitMyLecture from "../../Hooks/student/GitMyLecture";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";
import Lectures from "../../components/lecture/Lectures";

const MyLecture = () => {
  return (
    <div className="mt-[150px]" style={{ minHeight: "60vh" }}>
      <div className="w-[90%] m-auto border shadow ">
        <Lectures />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default MyLecture;
