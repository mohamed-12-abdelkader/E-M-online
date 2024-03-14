import { Skeleton, Stack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import GitVedio from "../../Hooks/student/GitVedio";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import GitVediot from "../../Hooks/teacher/GitVediot";
const Vedio = () => {
  const { videoId } = useParams();

  const [vedioLoading, vdiourl] = GitVedio({ id: videoId });
  const [vedioLoadingt, vdiourlt] = GitVediot({ id: videoId });
  const [currentTime, setCurrentTime] = useState(0);
  const playerRef = useRef(null);

  if (vedioLoading || vedioLoadingt) {
    return (
      <div style={{ minHeight: "60vh" }} className="flex items-center">
        <Stack className="w-[90%] m-auto ">
          <Skeleton height="20px" className="mt-5" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      </div>
    );
  }

  return (
    <div className="w-100% my-[50px]">
      <iframe
        src={vdiourl.video || vdiourlt.video}
        loading="lazy"
        className="w-[70%] m-auto h-[500px]"
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
        allowfullscreen="true"
      ></iframe>
    </div>
  );
};

export default Vedio;
