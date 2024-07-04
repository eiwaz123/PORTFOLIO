import react from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

const style = { color: "orange", fontSize: "5.5em" };
const Skills = () => {
  return (
    <section className=" py-20 bg-black w-full overflow-hidden transition-all delay-50 ease-in ">
      <div
        data-aos="flip-down"
        className="flex justify-center items-center "
      >
        <h1 className="text-yellow-500 font-roboto font-bold text-6xl">
          My Journey
        </h1>
      </div>
      <div
        data-aos="flip-down"
        className="  flex  justify-center items-center"
      >
        <p className="text-yellow-500 font-bold px-10 text-1xl">
          The journey towards becoming a web developer is that a I started to
          learn At the age of 17 where I started as a grade 11 ICT-Programming
          student Where I learn the basic concepts of programming such as HTML,
          CSS. At the end of my study as senior high student I ve taken a course
          on Bachelor science Information technology This is where I learn more
          about programming and Different ways of developing web applications
        </p>
      </div>
      <div data-aos="zoom-out-down" className=" flex justify-center py-28 ">
        <div className=" flex  items-center justify-center  w-[50rem] h-[7rem] border-8 rounded-t-lg">
          <FaReact style={style} /> 
          <FaHtml5 style={style} />
          <FaPhp style={style} />
          <FaFlask style={style} />
          <FaJava style={style} />
          <IoLogoJavascript style={style} />

        </div>
      </div>
    </section>
  );
};

export default Skills;
