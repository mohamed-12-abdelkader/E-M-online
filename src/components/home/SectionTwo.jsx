import { PiExamLight } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { GiBookmarklet } from "react-icons/gi";
import { Fade, Zoom } from "react-awesome-reveal";
const SectionTwo = () => {
  return (
    <div className="my-[50px] mx-5 ">
      <div className="w-[90%] m-auto flex  flex-wrap justify-between">
        <Zoom>
          <div
            className="h-[320px] my-[30px] w-[270px] bg-[#f1f0fe] relative shadow border md:m-5 "
            style={{ borderRadius: "20px" }}
          >
            <div
              className="bg-[#00204a] h-[120px] w-[120px] absolute top-[-15%] right-[-10%] flex justify-center items-center md:right-[-15%]"
              style={{ borderRadius: "50%" }}
            >
              <PiExamLight className="text-white text-5xl" />
            </div>
            <div className="mt-[80px] p-2">
              <h1 className="font-bold text-xl"> - امتحانات دورية ومستمرة </h1>
              <div className="mt-[30px]">
                <h1 className="font-bold">
                  اختبر مستواك من خلال امتحانات دورية مستمرة على كل كورس او على
                  كل محاضرة
                </h1>
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div
            className="h-[320px] my-[30px] w-[270px] bg-[#f1f0fe] relative shadow border md:m-5 "
            style={{ borderRadius: "20px" }}
          >
            <div
              className="bg-[#00204a] h-[120px] w-[120px] absolute top-[-15%] right-[-10%] flex justify-center items-center md:right-[-15%]"
              style={{ borderRadius: "50%" }}
            >
              <GiTeacher className="text-white text-5xl" />
            </div>
            <div className="mt-[80px] p-2">
              <h1 className="font-bold text-xl"> - نخبة من اكفاء المدرسين </h1>
              <div className="mt-[30px]">
                <h1 className="font-bold">
                  المنصة بتوفرلك مجموعة من اكفاء وافضل المدرسين على مستوى
                  الجمهورية فى كل مواد الثانوية العامة
                </h1>
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div
            className="h-[320px] my-[30px] w-[270px] bg-[#f1f0fe] relative shadow border md:m-5 "
            style={{ borderRadius: "20px" }}
          >
            <div
              className="bg-[#00204a] h-[120px] w-[120px] absolute top-[-15%] right-[-10%] flex justify-center items-center md:right-[-15%]"
              style={{ borderRadius: "50%" }}
            >
              <GiBookmarklet className="text-white text-5xl" />
            </div>
            <div className="mt-[80px] p-2">
              <h1 className="font-bold text-xl"> - كتب و pdf لكل المواد </h1>
              <div className="mt-[30px]">
                <h1 className="font-bold">
                  متاح لكل محاضرة ال pdf الخاص بها او تقدر تطلب الكتاب الخاص
                  بالمدرس وهيجيلك شحن لحد البيت{" "}
                </h1>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default SectionTwo;
