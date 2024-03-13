import { Skeleton, Stack } from "@chakra-ui/react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import GitVedio from "../../Hooks/student/GitVedio";
const Vedio = () => {
  const { videoId } = useParams();

  const [vedioLoading, vdiourl] = GitVedio({ id: videoId });
  if (vedioLoading) {
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
  console.log("id", vdiourl.video);
  return (
    <div className="flex justify-center my-[50px]">
      <div className="w-[100%]">
        <iframe
          src="https://iframe.mediadelivery.net/play/209681/d006cabb-54ee-4043-9794-d4b46c816be7"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowfullscreen="true"
          className="w-[70%] m-auto h-[500px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Vedio;
