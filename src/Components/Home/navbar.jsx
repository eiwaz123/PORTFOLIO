import react from "react";

const Navbar = () => {
  return (
    <nav  className="bg-black w-full px-4 py-4 flex items-center justify-evenly  transition-all delay-50 ease-in-out    " >
      <div className="text-yellow-500 font-bold text-3xl  ">ROI PORTFOLIO</div>
      <div className="hidden items-center gap-4 text-1xl   md:flex     ">
        <a className="text-yellow-500 transition-all delay-50 ease-in-out  " href="#home"   >Home</a>
        <a className="text-yellow-500 " href="#about">About</a>
        <a className="text-yellow-500" href="#">Contact</a>
        <a className="text-yellow-500" href="#">Blog</a>
        <button className=" bg-yellow-500 px-4 py-2 rounded-full text-black font-bold ">Login</button>
      </div>

    </nav>
  )
};

export default Navbar;
