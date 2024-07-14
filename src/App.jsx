import Navbar from "./Components/Home/navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Skill from "./pages/Skills.jsx";
import Proj from "./pages/Proj.jsx";
import Footer from "./pages/footer.jsx";
function App() {


  return (
    <>
      <div>
        <Navbar />
        <Homepage />
        <About />
        <Skill />
        <Proj />
        <Footer />

      </div>
    </>
  );
}

export default App;
