import React, { useState } from 'react';
import './Header.css';
import HeaderSection from './HeaderSection';
import Resume from '../Pages/Resume';
import Portfolio from '../Pages/Portfolio';
// import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import { Routes, Route, NavLink } from "react-router-dom";
import { useWindowScroll } from "@uidotdev/usehooks";



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, scrollTo] = useWindowScroll();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollTo = () =>{
    if(window.innerWidth < 901 ){
      scrollTo({ left: 0, top: 540, behavior: "smooth" })}
    }
  

  return (
    <div className='header-css'>
      <div className='header-img-css container1' >
      </div>

      <div className='container2'>

        <div onClick={toggleMenu} className="hamburger-menu">

          <input id='c' type="checkbox"></input>
          <div className="hamegurger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>

          <div className={`Navbar ${menuOpen ? 'menu-items-open' : 'menu-items'}`}>
            <ul  >
              <li onClick={() => scrollTo({ left: 0, top: 0, behavior: "smooth" })} >
                <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
              </li>
              <li onClick={handleScrollTo} >
                <NavLink to="/Resume" onClick={toggleMenu}>resume</NavLink>
              </li>
              <li onClick={handleScrollTo} >
                <NavLink to="/Portfolio" onClick={toggleMenu}>projects</NavLink>
              </li>
              <li onClick={handleScrollTo} >
                <NavLink to="/Contact" onClick={toggleMenu}>contact</NavLink>
              </li>
              {/* <li><NavLink to="/Blog" >blog</NavLink></li> */}
            </ul>
          </div>

        </div>
        <Routes>
          <Route path="/" element={<HeaderSection />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          {/* <Route path="/Blog" element={<Blog />} /> */}
          <Route path="/Contact" element={<Contact />} />
        </Routes>

      </div>

    </div>

  );
}

export default Header;