import { Button, Skeleton, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaVideo } from "react-icons/fa6";

const LectureDetailsBase = ({
  lectures,
  lecturesT,
  videosToMap,
  lectureLoading,
  lectureTLoading,
}) => {
  if (lectureLoading || lectureTLoading) {
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
  console.log(lectures);
  return (
    <div>
      <div className="w-[90%] m-auto flex justify-between items-center ">
        <img
          src={lecturesT.image || lectures.image}
          className="h-[250px] w-[350px]"
          style={{ borderRadius: "20px" }}
        />
        <div className="ribbon2 flex justify-center">
          <h1 className="font-bold  m-3 text-white">
            {" "}
            {lectures.description || lecturesT.description}
          </h1>
        </div>
      </div>
      <div className="w-[90%] m-auto border shadow my-[50px]  p-5">
        <div>
          <h1 className="flex font-bold text-xl">
            <FaVideo className="m-2 text-red-500" />
            محتوى المحاضرة
          </h1>
        </div>
        {videosToMap.length > 0 && (
          <div>
            {videosToMap.map((video) => (
              <div
                key={video.id}
                className="w-[100%] border shadow h-[70px] my-5 p-3 flex justify-between items-center"
              >
                <h1 className="font-bold"> {video.v_name} </h1>
                <Link to={`video/${video.id}`}>
                  <Button colorScheme="blue" variant="outline">
                    {" "}
                    شاهد الفيديو{" "}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        )}
        {lectures.exam_name || lecturesT.exam_name ? (
          <div className="w-[100%] border shadow h-[70px] my-5 p-3 flex justify-between items-center">
            <h1 className="font-bold">
              {" "}
              {lectures.exam_name || lecturesT.exam_name}{" "}
            </h1>
            <Button colorScheme="orange" variant="outline">
              {" "}
              ادخل الامتحان{" "}
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LectureDetailsBase;
