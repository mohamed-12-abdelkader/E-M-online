import img from "../../img/download.png";

const SectionFour = () => {
  return (
    <div
      className="bg-blue-500  my-9 p-3"
      style={{ borderTopLeftRadius: "100px", borderBottomLeftRadius: "100px" }}
    >
      <div className="w-[95%] h-[350px] m-auto md:flex justify-between items-center">
        <div>
          <img src={img} />
        </div>
        <div className="text-center">
          <h1 className="big-font   md:text-3xl text-white">
            Study with E-M Online
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
