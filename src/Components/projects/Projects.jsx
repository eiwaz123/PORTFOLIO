import react from "react";

const Projects = () => {
  return (
    <section className=" py-10 px-[5.5rem] bg-black w-full overflow-hidden transition-all delay-50 ease-in  ">
      <div  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"  className="flex flex-col  ">
          <h1 className="text-yellow-500 font-roboto font-bold text-6xl flex justify-center  ">
            This is my projects
          </h1>
        <div className=" py-10 flex gap-4 justify-center  items-center ">
            <a href="https://github.com/eiwaz123/TODOAPP  ">
          <div className="  w-[20rem] md:w-[24rem] h-[10rem] border-orange-300 border-8 rounded-t-lg">
            <h1 className="text-yellow-500 font-roboto font-bold  flex justify-center gap-3  " >To do app</h1>
            <div className=" flex justify-center items-center">
            <img className="w-[18rem]  md:w-[22rem] h-[7rem]" src="./src/assets/tasks.png" alt="Projects"/>
            </div>
          </div> 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
