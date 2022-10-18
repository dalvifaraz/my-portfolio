import './css/App.css';
import './css/css-reset.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarC from './Components/NavbarC'
import { Nav } from './Components/Nav';
import Header from './Components/Header'
import Home from './Components/Home'
import Project from './Components/Project'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      {/* <NavbarC/> */}
      <Nav/>
      <Header/>
      <Home/>
      <Project/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
