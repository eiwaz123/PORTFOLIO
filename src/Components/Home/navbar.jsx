import react from "react";

const Navbar = () => {
  return (
    <nav  className="bg-black w-full px-1 py-4 flex items-center justify-evenly  transition-all delay-50 ease-in    " >
      <div className="text-white font-bold text-3xl  ">ROI PORTFOLIO</div>
      <div className="hidden items-center gap-4 text-1xl   md:flex     ">
        <a className="text-white transition-all delay-50 ease-in  " href="#home"   >Home</a>
        <a className="text-white transition-all delay-50 ease-in  " href="#about">About</a>
        <a className="text-white transition-all delay-50 ease-in   " href="#">Contact</a>
        <a className="text-white transition-all delay-50 ease-in  " href="#">Blog</a>
        <button className=" bg-white px-4 py-2 rounded-full text-black font-bold ">Login</button>
        <a className="text-white" href="#">TITE</a>
      </div>

    </nav>
  )
};

export default Navbar;
