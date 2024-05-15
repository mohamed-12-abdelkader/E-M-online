import { Fade, Zoom } from "react-awesome-reveal";
const SectionFour = () => {
  return (
    <div
      className="  my-9 p-3 bg-[#00204a] "
      style={{
        borderTopLeftRadius: "100px",
        borderBottomLeftRadius: "100px",
      }}
    >
      <div className="w-[95%] h-[350px] m-auto md:flex justify-between items-center">
        <div>
          <Zoom>
            <img
              src="Rectangle.a433f53cf185268fb6f4.png"
              className="h-[300px] m-auto"
            />
          </Zoom>
        </div>
        <div className="text-center">
          <Fade bottom>
            <h1 className="big-font md:text-3xl text-white">
              Study with E-M Online
            </h1>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
