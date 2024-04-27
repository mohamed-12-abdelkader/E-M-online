import { FaFacebookSquare, FaTelegramPlane, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="header2 flex items-center justify-center h-[250px] mt-[50px]  ">
      <div>
        <div className="text-center">
          <h1 className="font-bold text-white md:text-xl">
            استمتع بدروس الثانوية العامة واحصل على دعم تعليمى مميز
          </h1>
        </div>
        <div className="flex justify-center  my-3">
          <a href="https://www.facebook.com/profile.php?id=61556280021487&mibextid=kFxxJD">
            <FaFacebookSquare className="text-4xl text-white mx-2" />
          </a>
          <a href="#">
            <FaYoutube className="text-4xl text-red-500 mx-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
