import React from 'react';
import './Header.css';
import HeaderSection from './HeaderSection';
import Resume from '../Pages/Resume';
import Portfolio from '../Pages/Portfolio';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import { Routes, Route, Link } from "react-router-dom";



const Header = () => {

  return (

    <div className='header-css'>
      <div className='header-img-css container1' >
      </div>

      <div className='container2'>

        <div class="hamburger-menu">

          <input id='c' type="checkbox"></input>
          <div class="hamegurger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>

          <div className='Navbar menu-items'>
            <ul  >
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/Resume" >resume</Link></li>
              <li><Link to="/Portfolio" >projects</Link></li>
              {/* <li><Link to="/Blog" >blog</Link></li> */}
              <li><Link to="/Contact" >contact</Link></li>
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