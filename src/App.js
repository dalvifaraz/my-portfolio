import './css/App.css';
import './css/css-reset.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarC from './Components/NavbarC'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Home from './Components/Home';
import Project from './Components/Project';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
// import Footer from './Components/Footer';
import './css/variable.css';
import React from 'react';
import NoMatch from './Apps/NoMatch';
import { Route, Routes } from 'react-router-dom';
import Haamid from './Components/Haamid';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='projects' element={<Project />} />
          <Route path='blogs' element={<Blog />} />
          <Route path='header' element={<Header />} />
          <Route path='haamid' element={<Haamid />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
