import Navbar from "./Components/Home/navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Skill from "./pages/Skills.jsx";
import Proj from "./pages/Proj.jsx";
function App() {


  return (
    <>
      <div>
        <Navbar />
        <Homepage />
        <About />
        <Skill />
        <Proj />

      </div>
    </>
  );
}

export default App;
