import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

import { RiLogoutBoxRFill } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";

const ExamSection = ({
  examName,
  examId,
  lastResult,
  isTeacher,
  onDeleteExam,
}) => (
  <div className="w-[100%] border shadow h-[80px] my-5 p-3 flex justify-between items-center">
    <div>
      <h1 className="font-bold my-2 flex">{examName}</h1>
      {lastResult && <h1 className="font-bold m-2">- درجتك: {lastResult}</h1>}
    </div>
    <div className="flex">
      <Link
        to={isTeacher ? `/teacher_exam/${examId}` : `/exam/${examId}`}
        className="mx-1"
      >
        <Button colorScheme="green" variant="outline">
          <RiLogoutBoxRFill />
        </Button>
      </Link>
      {isTeacher && (
        <Button colorScheme="red" className="mx-1" onClick={onDeleteExam}>
          <MdOutlineDeleteOutline />
        </Button>
      )}
    </div>
  </div>
);

export default ExamSection;
