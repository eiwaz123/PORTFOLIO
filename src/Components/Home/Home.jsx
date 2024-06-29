import react from "react";

const Home = () => {
  return (
    <section id="home" className="relative px-[4rem] bg-black  w-full h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden transition-all delay-50 ease-in">
      {/* Left */}
      <div className="flex flex-col gap-[2rem]  z-[2] items-center  order-2 md:justify-center  md:order-1 ">
        <div className="flex flex-col gap-3">
          <h1 className="text-yellow-500 text-center font-roboto font-bold text-5xl  md:text-6xl ">
            Hello Im Andrew Roi
          </h1>
          <h1 className="text-yellow-500 text-center font-roboto font-bold text-4xl  md:text-2xl lg:text-5xl">
            Im a web developer
          </h1>
        </div>
        <div className="flex justify-center">
          <button className=" bg-yellow-500 px-4 py-2 rounded-full font-roboto text-black font-bold text-2xl  md:text-2xl  ">
            This is my projects
          </button>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center justify-center order-1  md:order-2 ">
        <div className=" w-[20rem] h-[20rem] z-[2]   md:h-[20rem] md:w-[20rem] lg:w-[20rem] lg:h-[20rem] border rounded-full overflow-hidden ">
          <img
            className="w-full h-full object-cover object-center"
            src="src\assets\profile.jpg"
            alt="profile.png"
          />
        </div>
      </div>
      <div className=" absolute inset-1  z-[1] left-[50%] top-[60%] rounded-full w-[20rem] h-[20rem] md:h-[20rem] md:w-[20rem] lg:w-[20rem] lg:h-[20rem] bg-gradient-to-r opacity-50 from-violet-500 to-blue-500 "></div>
      <div className=" absolute inset-1  z-[1] left-[3%]  rounded-full w-[20rem] h-[20rem] md:h-[20rem] md:w-[20rem] lg:w-[20rem] lg:h-[20rem] bg-gradient-to-r opacity-50 from-violet-500 to-pink-500 "></div>
      <div className=" absolute inset-1  z-[1] left-[40%] rounded-full w-[20rem] h-[20rem] md:h-[20rem] md:w-[20rem] lg:w-[20rem] lg:h-[20rem] bg-gradient-to-r opacity-50 from-yellow-500 to-green-500 "></div>
      <div className=" absolute inset-1  z-[1] left-[78%] rounded-full w-[20rem] h-[20rem] md:h-[20rem] md:w-[20rem] lg:w-[20rem] lg:h-[20rem] bg-gradient-to-r opacity-50 from-red-500 to-orange-500 "></div>
      <div className=" absolute inset-1  z-[1] left-[10%] top-[65%] rounded-full w-[20rem] h-[20rem] md:h-[20rem] md:w-[20rem] lg:w-[15rem] lg:h-[15rem] bg-gradient-to-r opacity-50 from-yellow-500 to-purple-500 "></div>
    </section>
  );
};
export default Home;
