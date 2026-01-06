import React, { useEffect } from "react";
import '../../Styles/layout.css';
import '../../Styles/responsive.css';

export default function Navbar() {
  useEffect(() => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const menuSvg = document.getElementById('menuSvg');

    if (!menuIcon || !navLinks || !menuSvg) return;

    const handleClick = () => {
      navLinks.classList.toggle('active');

      if (navLinks.classList.contains('active')) {
        // close icon
        menuSvg.innerHTML = `
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
        `;
      } else {
        // open menu icon
        menuSvg.innerHTML = `
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        `;
      }
    };

    menuIcon.addEventListener('click', handleClick);

    return () => menuIcon.removeEventListener('click', handleClick);
  }, []);

  return (
    <header>
      <nav id="nav-container" className="lato-thin">
        {/* Logo and Menu Icon */}
        <div className="logo-container">
          <h1 className="logo">Ajker<span className="nav-logo">Khabar</span></h1>
          <div className="menu-icon">
            <svg id="menuSvg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#fff">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        <div className="nav-links">
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">National</a></li>
            <li><a href="#">International</a></li>
            <li><a href="#">Sports</a></li>
          </ul>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">National</a></li>
          <li><a href="#">International</a></li>
          <li><a href="#">Sports</a></li>
        </ul>

        {/* Search Input */}
        <div className="search-container">
          <input className="search-input" type="text" placeholder="Search news, topics…" />
        </div>
      </nav>
    </header>
  );
}
