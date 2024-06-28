import react from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
  return (
    <section id="about" className=" w-full md:h-screen bg-black grid grid-cols-1 md:grid-cols-2 overflow-hidden transition-all delay-50 ease-in ">
      <div  data-aos="zoom-in-right" className=" py-2 flex items-center justify-center order-1  md:order-1  ">
        <div className=" w-[20rem] h-[20rem] md:h-[20rem] md:w-[20rem] lg:w-[30rem] lg:h-[30rem] rounded-md overflow-hidden ">
          <img
            className="w-full h-full object-cover object-center"
            src="src\assets\profile.jpg"
            alt="profile.png"
          />
        </div>
      </div>

      <div data-aos="fade-up" className=" px-10 flex flex-col justify-center order-2 md:order-2  ">
        <h1 className="text-white font-roboto font-bold text-6xl  ">
          About me
        </h1>
        <br />
        <h1   className="text-yellow-500 font-roboto font-bold text-4xl ">
          Andrew Roi Pascual -Web developer
        </h1>
        <h1 className="text-white ">
          Hello! Andrew Roi Pascual  is an aspiring web developer based in
          Philippines who have a passion to create a beautiful, functional and user-friendly
          websites. who also eager to learn new things enagage on different challenges and
          projects to improve  skills as a web developer.
        </h1>
       
        {/* <h1 className="text-white font-roboto font-bold text-4xl py-2">
          My Journey
        </h1>
        <h1 className="text-white">
          The journey towards becoming a web developer is that a I started to
          learn
        </h1>
        <h1 className="text-white">
          At the age of 17 where I started as a grade 11 ICT-Programming student
        </h1>
        <h1 className="text-white">
          Where I learn the basic concepts of programming such as HTML, CSS.
        </h1>
        <h1 className="text-white">
          At the end of my study as senior high student
        </h1>
        <h1 className="text-white">
          I ve taken a course on Bachelor science Information technology
        </h1>
        <h1 className="text-white">
          This is where I learn more about programming and this is where I
          learend
        </h1>
        <h1 className="text-white">
          Different ways of developing web applications such as
        </h1>
        <br />
        <ul className="list-disc text-white px-5">
          <li> PHP </li>
          <li> Python with flask framework </li>
          <li> Javascript </li>
          <li> React JavaScript </li>
        </ul>
        <br />
        <h1 className="text-white">
          Im fairly confident at my skills as a web developer to deliver a
          satisfactory product
        </h1>
        <h1 className="text-white">
          but I am always willing to learn more and improve my skills.
        </h1> */}
      </div>
    </section>
  );
};

export default About;
