import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Slide, Zoom } from "react-awesome-reveal";
const SectionThree = () => {
  return (
    <div className="my-[70px]">
      <div className="w-[90%] m-auto md:flex justify-between">
        <div className="">
          <div className="flex justify-center">
            <h1 className="font-bold text-xl"> ماذا نقدم للمدرس ؟</h1>
          </div>

          <div className="mt-[50px]">
            <UnorderedList>
              <ListItem className="font-bold m-1">
                التحكم الكامل فى المنصة وادارة المحاضرات
              </ListItem>
              <ListItem className="font-bold m-1">
                انشاء مجموعات دراسية لطلبة السنتر
              </ListItem>
              <ListItem className="font-bold m-1">
                توفر المنصة التدريب للمدرسين مما يطور من مهاراتهم للقيام بعملية
                التعليم عن بعد.
              </ListItem>
              <ListItem className="font-bold m-1">
                دعم فنى خلال ال 24 ساعة
              </ListItem>
            </UnorderedList>
          </div>
        </div>

        <div>
          <img src="vector2-480x291.png" className="h-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
