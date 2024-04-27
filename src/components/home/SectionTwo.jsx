import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Zoom, Fade } from "react-awesome-reveal";
const SectionTwo = () => {
  return (
    <div className="my-[50px]">
      <div className="w-[90%] m-auto md:flex justify-between">
        <div className="">
          <div className="flex justify-center">
            <h1 className="fonts font-bold text-xl"> ماذا نقدم للطالب ؟</h1>
          </div>

          <div className="mt-[50px]">
            <UnorderedList>
              <Zoom>
                <ListItem className=" font-bold m-1">
                  دعم فنى متاح خلال ال 24 ساعة{" "}
                </ListItem>
                <ListItem className="font-bold m-1">
                  محتوى باعلى جودة ممكنة{" "}
                </ListItem>
                <ListItem className="font-bold m-1">
                  {" "}
                  توفر المنصة الاحتفاظ بمحتويات الدروس والرجوع اليها في أي وقت
                </ListItem>
                <ListItem className="font-bold m-1">
                  {" "}
                  تغطية المناهج الدراسية
                </ListItem>
                <ListItem className="font-bold m-1">
                  {" "}
                  امتحانات دورية مستمرة
                </ListItem>
              </Zoom>
            </UnorderedList>
          </div>
        </div>

        <div>
          <Fade>
            <img src="img1.png" className="h-[250px]" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
