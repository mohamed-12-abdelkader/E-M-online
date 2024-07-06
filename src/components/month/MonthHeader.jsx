const MonthHeader = ({ image, description, noflecture }) => (
  <div
    className="w-[90%] m-auto h-[400px] bg-blue-500 md:flex justify-between items-center p-10"
    style={{ borderRadius: "20px" }}
  >
    <div>
      <img
        src={image}
        className="w-[400px] m-auto"
        alt="Image"
        style={{ borderRadius: "20px" }}
      />
    </div>
    <div className="md:flex">
      <div
        className="h-50px p-3 bg-yellow-500 m-2"
        style={{ borderRadius: "20px" }}
      >
        <h1 className="font-bold text-white">{description}</h1>
      </div>
      <div
        className="h-50px p-3 bg-red-500 m-2"
        style={{ borderRadius: "20px" }}
      >
        <h1 className="font-bold text-white">عدد المحاضرات: {noflecture}</h1>
      </div>
    </div>
  </div>
);

export default MonthHeader;
