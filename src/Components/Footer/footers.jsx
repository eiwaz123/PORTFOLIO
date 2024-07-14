import react from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Socials = [
  {
    id: 1,
    name: "Facebook",
    icon: <FaSquareFacebook />,
    link: "https://www.facebook.com/L.C8DR",
  },
  {
    id: 2,
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/andrew-roi-9a9b1a1b3/",
  },
];
const socialStyle = { color: "orange", fontSize: "5.5em" };
const Footer = () => {
  return (
    //data-aos="fade-up" data-aos-anchor-placement="top-bottom"
    // bg-black bg-[url('src/assets/footerwave.svg')] bg-no-repeat bg-cover  md: lg: xl:

    <footer className="  bg-black relative overflow-hidden  transition-all delay-30 ease-in z-[2] ">
     <img
        className=" z-[0] absolute   xl:h-screen object-cover  overflow-hidden border-4"
        src="src\assets\wave.svg" 
        alt="profile.png"
      /> 
         
      <div className="  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 z-[3]  ">
        {/* Email  */}
        <div className="   flex flex-col items-center  justify-center  ">
          <div className="relative border-4 inset-3 md:inset-4 lg:inset-5 ">
            <h1 className="text-black lg:black text-4xl  font-roboto font-bold ">
             Contact
            </h1>
            <h1 className="text-black text-2xl font-roboto font-bold  ">
              email
            </h1>
            <h1 className="text-black text-1xl  semi-bold font-roboto font-bold ">
              pandrewroi@gmail.com
            </h1>
          </div>
        </div>
{/* Social */}
        <div className=" flex flex-col items-center justify-center relative ">
          <div className="relative border-4 inset-x-11 md:-inset-y-0.5 md:inset-x-[5.5rem] lg:inset-1 ">
            <div className="">
              <h1 className="text-yellow-500 md:text-yellow-500 lg:text-yellow-500 xl:text-yellow-500 text-4xl font-roboto  font-bold text-center  ">
                Social
              </h1>
              <h1 className="text-yellow-500 md:text-yellow-500 text-4xl font-roboto font-bold text-center  ">
                Media
              </h1>
            </div>
            <div className="flex justify-center  ">
              {Socials.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center  
             hover:bg-black hover:cursor-pointer hover:scale-110 transition-all delay-50 ease-in-out group"
                >
                  <a href={item.link}>
                    <div className="text-black-500 md:text-amber-500 lg:text-amber-100 lg:bg-amber-600  xl:text-amber-500 xl:bg-black text-5xl   group-hover:text-yellow-500 ">
                      {" "}
                      {item.icon}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
     
    </footer>
  );
};

export default Footer;
