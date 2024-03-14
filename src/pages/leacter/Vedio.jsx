import { Skeleton, Stack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import GitVedio from "../../Hooks/student/GitVedio";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
const Vedio = () => {
  const { videoId } = useParams();

  const [vedioLoading, vdiourl] = GitVedio({ id: videoId });
  const [currentTime, setCurrentTime] = useState(0);
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    if (playerRef.current) {
      if (playerRef.current.isPlaying()) {
        playerRef.current.pause();
      } else {
        playerRef.current.play();
      }
    }
  };

  const handleForward = () => {
    if (playerRef.current) {
      const newTime = currentTime + 10;
      playerRef.current.seekTo(newTime, "seconds");
      setCurrentTime(newTime);
    }
  };

  const handleRewind = () => {
    if (playerRef.current) {
      const newTime = currentTime - 10;
      playerRef.current.seekTo(newTime, "seconds");
      setCurrentTime(newTime);
    }
  };

  const handleQualityChange = (quality) => {
    if (playerRef.current) {
      playerRef.current.getInternalPlayer().setPlaybackQuality(quality);
    }
  };

  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
  };
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
    <div>
      <ReactPlayer
        ref={playerRef}
        url="https://youtu.be/soylbvulfL0?si=qowwEfX9eqi6TLnU"
        controls
        onProgress={handleProgress}
      />
      <div>
        <button onClick={handlePlayPause}>تشغيل/إيقاف</button>
        <button onClick={handleForward}>تقديم 10 ثواني</button>
        <button onClick={handleRewind}>تأخير 10 ثواني</button>
        <button onClick={() => handleQualityChange("1080p")}>1080p</button>
        <button onClick={() => handleQualityChange("720p")}>720p</button>
        <button onClick={() => handleQualityChange("480p")}>480p</button>
      </div>
    </div>
  );
};

export default Vedio;
