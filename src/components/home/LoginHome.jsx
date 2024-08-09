import GitTeacherByToken from "../../Hooks/student/GitTeacherByToken";
import {
  Card,
  CardBody,
  Skeleton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollToTop from "../scollToTop/ScrollToTop";
import { MdCancelPresentation, MdOutlineVideoLibrary } from "react-icons/md";
import Lectures from "../../components/lecture/Lectures";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import SectionTwo from "./SectionTwo";
import AllTeacherLogin from "../teacher/AllTeacherLogin";
import LectureCard from "../teacher/LectureCard";
import GitTeacherDetails from "../../Hooks/teacher/GitTeacherDetails";
import React, { useState } from "react";
import Loading from "../loading/Loading";
import { FaFileVideo } from "react-icons/fa6";
import PurchaseAlert from "../../ui/modal/PurchaseAlert";
import BuyLecture from "../../Hooks/student/BuyLecture";

const LoginHome = () => {
  const [teacherLoading, teacher] = GitTeacherDetails();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedLecture, setSelectedLecture] = useState(null);
  const cancelRef = React.useRef();
  const [buyLoading, buyLecture, buyMonth] = BuyLecture();
  if (teacherLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-[50px]">
      <div className="m-auto">
        <Lectures />
      </div>
      <div className="my-5">
        <h1
          className="fonts font-bold text-3xl flex text-blue-500 my-3"
          style={{ fontWeight: "bold", fontSize: "50px" }}
        >
          <FaFileVideo className="m-1 text-red-500" />
          كورسات الدكتور
        </h1>
      </div>
      <div>
        {teacher.months && teacher.months.length > 0 ? (
          <div
            className="flex flex-wrap justify-center my-3 bg-white w-[95%] m-auto p-3 md:justify-start flex-wrap"
            style={{ borderRadius: "20px" }}
          >
            {teacher.months.map((lecture) => (
              <LectureCard
                key={lecture.id}
                lecture={lecture}
                onOpen={onOpen}
                setSelectedLecture={setSelectedLecture}
              />
            ))}
          </div>
        ) : (
          <div
            className="h-[200px] flex justify-center items-center bg-white"
            style={{ borderRadius: "20px" }}
          >
            <h1 className="font-bold flex text-xl text-black">
              <MdCancelPresentation className="text-red-500 m-2" />
              لا يوجد كورسات الان سوف يتم اضافتها فى اقرب وقت ممكن
            </h1>
          </div>
        )}
      </div>
      <PurchaseAlert
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
        selectedLecture={selectedLecture}
        buyLoading={buyLoading}
        buyMonth={buyMonth}
      />
      <ScrollToTop />
    </div>
  );
};

export default LoginHome;
