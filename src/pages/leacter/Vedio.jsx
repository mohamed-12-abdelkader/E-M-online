import { useState } from "react";

const Vedio = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div
      className="flex justify-center items-center mt-[100px] "
      style={{ minHeight: "80vh" }}
    >
      <iframe
        title="BunnyCDN Video Player"
        className="h-[500px] w-[550px]"
        src={`https://E-M-online.b-cdn.net/eslam/VID_20240307_145451.mp4`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Vedio;
