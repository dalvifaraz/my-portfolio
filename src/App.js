import "./css/App.css";
import "./css/css-reset.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarC from './Components/NavbarC'
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './css/variable.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <NavbarC/> */}
        <Navbar />
        <Header />
        <Home />
        <Project />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
