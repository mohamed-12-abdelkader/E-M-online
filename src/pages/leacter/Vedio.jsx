import { useState, useEffect, useRef } from "react";
import { Skeleton, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GitVedio from "../../Hooks/student/GitVedio";
import "react-html5video/dist/styles.css";
import GitVediot from "../../Hooks/teacher/GitVediot";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";

const Vedio = () => {
  const { videoId } = useParams();
  const [vedioLoading, vdiourl] = GitVedio({ id: videoId });
  const [vedioLoadingt, vdiourlt] = GitVediot({ id: videoId });
  const [isRecording, setIsRecording] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isRecording && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isRecording]);

  useEffect(() => {
    setIsRecording(true);
  }, []);

  if (vedioLoading || vedioLoadingt) {
    return (
      <div style={{ minHeight: "70vh" }} className="flex items-center">
        <Stack className="w-[90%] m-auto ">
          <Skeleton height="20px" className="mt-5" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <ScrollToTop />
        </Stack>
      </div>
    );
  }

  return (
    <div className={`w-100% mt-[50px] `}>
      <iframe
        src={vdiourl.video || vdiourlt.video}
        loading="lazy"
        className="w-[100%] h-[120vh] m-auto border"
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
        allowFullScreen="true"
      ></iframe>
      <ScrollToTop />
      <input ref={inputRef} className="input-vedio" type="password" />
    </div>
  );
};

export default Vedio;
