import { Button, Card, CardBody, Skeleton, Stack } from "@chakra-ui/react";
import GitMyLecture from "../../Hooks/student/GitMyLecture";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";
import Lectures from "../../components/lecture/Lectures";

const MyLecture = () => {
  return (
    <div className="mt-[150px]">
      <div className="w-[90%] m-auto border shadow">
        <div className="flex justify-center my-5">
          <div className="ribbon">
            <h1 className="font-bold m-2 big-font">my lecture </h1>
          </div>
        </div>
        <Lectures />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default MyLecture;
