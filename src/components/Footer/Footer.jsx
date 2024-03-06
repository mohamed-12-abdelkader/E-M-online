import { FaFacebookSquare, FaTelegramPlane, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-center h-[250px] mt-[50px]  bg-blue-500">
      <div>
        <div className="text-center">
          <h1 className="font-bold text-white md:text-xl">
            استمتع بدروس الثانوية العامة واحصل على دعم تعليمى مميز
          </h1>
        </div>
        <div className="flex justify-center  my-3">
          <a href="#">
            <FaFacebookSquare className="text-4xl text-white mx-2" />
          </a>
          <a href="#">
            <FaYoutube className="text-4xl text-red-500 mx-2" />
          </a>
          <a href="#">
            <FaTelegramPlane className="text-4xl text-white mx-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
