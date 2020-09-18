import React, { Component, useState, useRef, useEffect } from 'react';
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import Nav1 from './Nav1'

export default class Testnav extends Component {
  TestNav = () => {
    const [change, setChange] = useState(false);
    const changePosition = 10;
    
    let position = useWindowScrollPosition();
    // position == { x: 0, y: 0 }
  
    if (position.y > changePosition && !change) {
      setChange(true);
    }
  
    if (position.y <= changePosition && change) {
      setChange(false);
    }
  
    let style = {
      backgroundColor: change ? "white" : "transparent",
      transition: ".3s ease",
      height: "69px",
      position: "fixed",
      right: 0,
      left: 0,
      top: 0,
    };
   
   let style2 = {
     color: change ? "#464646" : "#464646", 
   }

   let navtext = {
     width: '100%',
     display: 'flex',
     margin: ' 0 0 0 auto',
  }
  
    return (
      <div style={style} class="nav-container">
        <div class='title1-container'>
          <a style={style2} class='nav-title' href='/'> Glass Top </a>
          <a style={style2} class='nav-title1' href='/'>Web Developers</a>
        </div>
        <div style={navtext} class='nav-text'>
<div class="dropdown">
            <a style={style2} class='link3' href='/begin'>Services</a>
            <div class="dropdown-content">
              <div class="dropdown-content1">
                <div class='dropdown-column'>
                  <a class='dropdown-main' href='/consulting'>Consulting</a>
                  <a class='dropdown-sub' href='/enterprise'>Enterprise</a> 
                  <a class='dropdown-sub' href='/startup'>Start Up</a> 
                </div>
                <div class='dropdown-column'>
                  <a class='dropdown-main' href='/web'>Web</a>
                  <a class='dropdown-main' href='/webapp'>Web App</a>
                  <a class='dropdown-main' href='/webdesign'>Web Design</a>
                  <a class='dropdown-main' href='/pwa'>PWA</a>
                </div>
                <div class='dropdown-column'>
                  <a class='dropdown-main' href='/webapps'>Mobile Apps</a>
                  </div>
                </div>
              </div>
            </div>
          <a style={style2} class='link3' href='/how-we-work'>How We Work</a>
          <div class="dropdown">
            <a style={style2} class='link3' href='/portfolio'>Portfolio</a>
            <div class="dropdown-content-mini">
              <div class="dropdown-content1">
                <div class='dropdown-column'>
                  <a class='dropdown-sub' href='/portfolio'>Projects</a>
                  <a class='dropdown-sub' href='/enterprise'>UI/UX Gallery</a> 
                </div>
                </div>
              </div>
            </div>
          <div class="dropdown">
            <a style={style2} class='link3' href='/about'>Company</a>
            <div class="dropdown-content-mini">
              <div class="dropdown-content1">
                <div class='dropdown-column'>
                  <a class='dropdown-sub' href='/consulting'>About Us</a>
                  <a class='dropdown-sub' href='/enterprise'>Careers</a> 
                  <a class='dropdown-sub' href='/startup'>Blog</a> 
                  <a class='dropdown-sub' href='/startup'>Contact Us</a> 
                </div>
                </div>
              </div>
            </div>
          <a  class='contact11' href='/contact'>Contact</a>
          </div>
        <div>
          <Nav1/>
        </div>
        </div>
    );
  }
  render() {
    return (
      <div>
        <this.TestNav/>
      </div>
    )
  }
}
