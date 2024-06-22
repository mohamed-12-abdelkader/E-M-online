import React from "react";
import { Zoom } from "react-awesome-reveal";
import { BiBook } from "react-icons/bi";

const TeacherInfo = ({ teacher }) => (
  <div className="text-center m-auto md:flex justify-between my-[50px]">
    <div className="flex justify-center m-auto w-[80%] md:w-[50%]">
      <Zoom>
        <img
          src={teacher.image}
          className="h-[280px] w-[400px] m-3 m-auto"
          style={{ borderRadius: "20px" }}
        />
      </Zoom>
    </div>
    <div className="mt-[50px] w-[80%]">
      <div>
        <h1 className="fonts font-bold">{teacher.description}</h1>
      </div>
      <div className="flex my-2 flex-wrap justify-center">
        <Zoom>
          <div className="h-[50px] border w-[220px] m-2 flex items-center p-2">
            <img src={teacher.image} className="h-[30px] w-[30px] m-3" />
            <h1 className="font-bold m-1">أ/{teacher.name}</h1>
          </div>
        </Zoom>
        <Zoom>
          <div className="h-[50px] border w-[220px] m-2 flex items-center p-2">
            <h1 className="font-bold flex">
              <BiBook className="m-1 text-blue-500" />
              المادة:{teacher.subject}
            </h1>
          </div>
        </Zoom>
      </div>
    </div>
  </div>
);

export default TeacherInfo;
