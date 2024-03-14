import img from "../../img/download.png";

const SectionOne = () => {
  return (
    <div className="bg-blue-500">
      <div className="h-[500px] w-[90%] m-auto md:flex justify-between items-center mx-auto max-w-screen-xl mt-[80px]">
        <div className="flex justify-center">
          <img src={img} alt="E-M online" />
        </div>
        <div className="text-white text-center">
          <h1 className="big-font text-5xl ">E-M online</h1>

          <h1 className="font-bold text-xl">
            {" "}
            استمتع بدروس الثانوية العامة واحصل على دعم تعليمى مميز{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
