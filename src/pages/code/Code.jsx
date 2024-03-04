const Code = () => {
  // Retrieve data from local storage and parse it as JSON
  const codes = JSON.parse(localStorage.getItem("code"));
  console.log(codes);
  return (
    <div className="mt-[100px]">
      <div className="flex justify-center">
        <div className="ribbon">
          <h1 className="big-font m-4 text-xl text-center">اكواد الشحن </h1>
        </div>
      </div>
      <div className="my-9 w-[90%] m-auto p-5 border shadow  flex justify-center">
        <div className="flex flex-wrap">
          {codes ? (
            <div className="my-9 flex justify-center flex-wrap">
              {codes.map((code, index) => (
                <div
                  key={index}
                  className="h-[100px] w-[300px] border shadow m-2 p-3"
                >
                  <div>
                    <h1 className="font-bold my-3">كود الشحن : {code.code}</h1>
                    <h1 className="font-bold my-3">
                      قيمة كود الشحن :{code.value} جنية
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h1>لا يوجد اكواد الان </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Code;
