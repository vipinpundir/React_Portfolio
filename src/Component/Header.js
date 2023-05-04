import React from 'react';
import './Header.css';
import HeaderSection from './HeaderSection';
import Resume from '../Pages/Resume';
import Portfolio from '../Pages/Portfolio';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import { Routes, Route, NavLink } from "react-router-dom";



const Header = () => {

  return (

    <div className='header-css'>
      <div className='header-img-css container1' >
      </div>

      <div className='container2'>

        <div className="hamburger-menu">

          <input id='c' type="checkbox"></input>
          <div className="hamegurger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>

          <div className='Navbar menu-items'>
            <ul  >
              <li><NavLink  to="/" >Home</NavLink></li>
              <li><NavLink  to="/Resume" >resume</NavLink></li>
              <li><NavLink  to="/Portfolio" >projects</NavLink></li>
              <li><NavLink  to="/Contact" >contact</NavLink></li>
              {/* <li><NavLink to="/Blog" >blog</NavLink></li> */}
            </ul>
          </div>

        </div>
        <Routes>
          <Route path="/" element={<HeaderSection />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

      </div>

    </div>

  );
}

export default Header;