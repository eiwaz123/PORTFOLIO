import react from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
const skillset = 
  [
  {
id:1,
name:"HTML",
icon:<FaHtml5/>
  },
  {
id:2,
name:"React", 
icon:<FaReact/>
  },
  {
id:3,
name:"PHP",
icon:<FaPhp/>
  },
  {
id:4,
name:"Java",
icon:<FaJava/>
  },
  {
id:5,
name:"Javascript",
icon:<IoLogoJavascript/>
  },
  {
  id:6,
  name:"Flask",
  icon:<SiFlask/>
}
]
  


const style = { color: "orange", fontSize: "5.5em"   };
const Skills = () => {
  return (
    <section className=" py-20 bg-black w-full overflow-hidden transition-all delay-50 ease-in ">
      <div data-aos="flip-down" className="flex justify-center items-center ">
        <h1 className="text-yellow-500 font-roboto font-bold text-6xl">
          My Journey
        </h1>
      </div>
      <div data-aos="flip-down" className="  flex  justify-center items-center">
        <p className="text-yellow-500 font-bold px-10 text-1xl">
          The journey towards becoming a web developer is that a I started to
          learn At the age of 17 where I started as a grade 11 ICT-Programming
          student Where I learn the basic concepts of programming such as HTML,
          CSS. At the end of my study as senior high student I ve taken a course
          on Bachelor science Information technology This is where I learn more
          about programming and Different ways of developing web applications
        </p>
      </div>
      <div className=" py-28 ">
        <div data-aos="zoom-out-down"  className=" mx-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  ">
          {/* <div className="flex flex-col items-center justify-center border-4"> <h1>hello 1</h1></div>
          <div className="flex flex-col items-center justify-center border-4"> <h1>hello 2</h1></div>
          <div className="flex flex-col items-center justify-center border-4"> <h1>hello 3</h1></div>
          <div className="flex flex-col items-center justify-center border-4"> <h1>hello 4</h1></div>
          <div className="flex flex-col items-center justify-center border-4"> <h1>hello 5</h1></div>
          <div className="flex flex-col items-center justify-center border-4"> <h1>hello 6</h1></div>
          <div className="flex flex-col items-center justify-center border-4"> <h1>hello 7</h1></div>
          <div className="flex flex-col items-center justify-center border-4"> <h1>hello 8</h1></div> */}
        {/* padding, gap */}
         {
           skillset.map((item,index)=>(
             <div key={index} className="flex flex-col items-center justify-center
             hover:bg-yellow-500  hover:cursor-pointer hover:scale-110 transition-all delay-50 ease-in-out group" >
              <div className="text-yellow-500 text-7xl group-hover:text-black "> {item.icon}</div>
              <div className="text-yellow-500 text-2xl md:text-4xl lg:text-4xl xl:text-4xl  group-hover:text-black font-semibold">{item.name}</div>
              
             </div>
           ))
         }
        </div>
      </div>
    </section>
  );
};

export default Skills;
