import { useEffect } from "react";
import { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import UserType from "../../Hooks/auth/userType";
import img from "../../img/00a63fa2-ddd3-4c8c-91c8-1eb74156bb2f-removebg-preview.png";
const SectionOne = () => {
  const [userData, isAdmin, isTeacher, student] = UserType();
  const [displayedName, setDisplayedName] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const name = "    الدكتور  / محمد على فى المواد الفلسفية  ";
  const description = "استمتع بدروس الثانوية العامة واحصل على دعم تعليمى مميز";
  useEffect(() => {
    if (nameIndex < name.length) {
      const timer = setTimeout(() => {
        setDisplayedName(name.slice(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      }, 100); // تحديد معدل السرعة بالميلي ثانية
      return () => clearTimeout(timer);
    }
  }, [name, nameIndex]);

  return (
    <div className=" header bg-blue-500 " style={{ description: "rt" }}>
      <div className="  mt-[80px]   h-[650px] ">
        <div className="inner-header flex justify-center items-center ">
          <div className="w-[90%] m-auto md:flex  ">
            <div>
              <Zoom>
                <img
                  src={img}
                  className="m-auto mt-8 h-[300px] w-[300px] md:h-[400px] w-[400px] hover-effect"
                />
              </Zoom>
            </div>
            <div className="md:mt-[100px] mx-5">
              <h1 className="fonts font-bold text-xl  text-white md:text-3xl  ">
                {displayedName}
              </h1>

              <p className="h-1 w-[200px] bg-white m-2 my-2"></p>
              {isTeacher ? (
                <div className="grid justify-start"> </div>
              ) : student ? (
                <div className=" my-4">
                  <div className="flex justify-start">
                    <h1 className="fonts font-bold text-xl  text-white md:text-2xl  ">
                      كود الطالب : {userData.id}
                    </h1>
                  </div>
                </div>
              ) : isAdmin ? (
                <div></div>
              ) : (
                <div>
                  <Link to="/login">
                    <img src="log in (1).png" className="h-[80px] w-[200px]" />
                  </Link>
                  <Link to="/singup">
                    <img src="signup2.png" className="h-[80px] w-[200px]" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  );
};

export default SectionOne;
