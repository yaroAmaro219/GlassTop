import React, { Component, useState, useRef, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import ReactPlayer from "react-player"
import Nav from "./components/Nav";
import Show from './components/Show'
import Enroll from './components/Enroll'
import Home from './components/Home1'
import Payment from './components/Payment'
import Rent from './components/Rent'
import Host from './components/Host'
import Login from './components/Login'
import Contact from './components/Contact'
import Pricing from './components/Pricing'
import Team from './components/Team'
import About from './components/About'
import Work from './components/Work'
import Reviews from './components/Reviews'
import Begin from "./components/Begin"
import Nav1 from './components/Nav1'
import WebApp from './components/WebApp'
import WebDesign from './components/WebDesign'
import Services from './components/Services'
import Enterprise from './components/Enterprise'
import Consulting from './components/Consulting'
import HowWeWork from './components/HowWeWork'
import PWA from './components/PWA'
import Web from './components/Web'
import Startup from './components/Startup'
import insta from './images/instagram1.svg'
import cloud from './images/197-cloud-check.svg'
import stack from './images/047-stack.svg'
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import './styles/Nav.css'
import './styles/Enroll.css'
import './styles/Payment.css'
import "./App.css";
import './styles/Login.css'
import './styles/Design.css'
import './styles/Modal.css'
import './styles/Contact.css'
import './styles/Services.css'
import './styles/Home.css'
import './styles/Work.css'

import {
  showUser,
  postContact,
  showContact,
  registerUser,
  loginUser,
  verifyUser,
  removeToken,
} from './services/api-helper'


class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      phone: '',
      email: '',
      company: '',
      comment: '',
      authFormData: {
        email: '',
        password:''
      },
    }
  }

  componentDidMount = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser
      })
    }
  }

  getUser = async () => {
    const user = await showUser();
    if (user) {
      this.setState({ user })
    }
  }


  addContact = async (name, email, phone, company, comment) => {
   const newContact = await postContact({
      name: name,
      email: email,
      phone: phone,
      company: company,
      comment: comment,
   })
    this.setState(prevState => ({
      contact: newContact,
    }))
  }

  getContact = async () => {
    const contact = await showContact();
    if (contact) {
      this.setState({ contact })
    }
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    })
  }


  handleLogin = async (e) => {
    e.preventDefault();
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({
      currentUser
    })
    this.props.history.push("/home")
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.registerFormData);
    this.setState({
      currentUser
    })
    this.props.history.push("/home")
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({currentUser: null})
    removeToken();
    this.props.history.push("/login")
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  registerHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
        [name]: value
      }
    }));
  }


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
     color: change ? "#464646" : "white", 
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
            <a style={style2} class='link' href='/begin'>Services</a>
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
          <a style={style2} class='link' href='/portfolio'>How We Work</a>
          <div class="dropdown">
            <a style={style2} class='link' href='/portfolio'>Portfolio</a>
            <div class="dropdown-content-mini">
              <div class="dropdown-content1">
                <div class='dropdown-column'>
                  <a class='dropdown-sub' href='/consulting'>Projects</a>
                  <a class='dropdown-sub' href='/enterprise'>UI/UX Gallery</a> 
                </div>
                </div>
              </div>
            </div>
          <div class="dropdown">
            <a style={style2} class='link' href='/about'>Company</a>
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
      <div class="App">
        <link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=AvenirNext"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"></link>
        <div >
          <this.TestNav />
          </div>
        <Switch>
          <Route exact path="/enrolls" render={(props) => (
            <Enroll
              addEnroll={this.addEnroll}
            />
          )}/>
          <Route exact path="/" render={(props) => (
            <Home
            />
          )}/>
           <Route exact path="/website" render={(props) => (
            <Rent
            />
          )}/>
          <Route exact path="/show" render={(props) => (
            <Show
              getEnroll={this.getEnroll}
              enroll={this.state.enroll}
              destroyEnroll={this.destroyEnroll}
            />
          )}/>
           <Route exact path="/design" render={(props) => (
            <Host
              
            />
          )}/>
          <Route exact path="/login" render={(props) => (
            <Login
              
            />
          )} />
          <Route exact path="/how-we-work" render={(props) => (
            <HowWeWork
              
            />
          )} />
          <Route exact path="/contact" render={(props) => (
            <Contact
              addContact={this.addContact}
            />
          )}/>
          <Route exact path="/pricing" render={(props) => (
            <Pricing
              
            />
          )}/>
          <Route exact path="/team" render={(props) => (
            <Team
              
            />
          )}/>
          <Route exact path="/about" render={(props) => (
            <About
              
            />
          )}/>
          <Route exact path="/portfolio" render={(props) => (
            <Work
              
            />
          )}/>
          <Route exact path="/reviews" render={(props) => (
            <Reviews
              
            />
          )}/>
          <Route exact path="/begin" render={(props) => (
            <Begin
              
            />
          )}/>
          <Route exact path="/pwa" render={(props) => (
            <PWA
              
            />
          )} />
          <Route exact path="/services" render={(props) => (
            <Services
              
            />
          )} />
          <Route exact path="/startup" render={(props) => (
            <Startup
              
            />
          )} />
          <Route exact path="/webapp" render={(props) => (
            <WebApp
              
            />
          )} />
          <Route exact path="/web" render={(props) => (
            <Web
              
            />
          )} />
          <Route exact path="/webdesign" render={(props) => (
            <WebDesign
              
            />
          )}/>
          <Route exact path="/enterprise" render={(props) => (
            <Enterprise
              
            />
          )}/>
          <Route exact path="/consulting" render={(props) => (
            <Consulting
              
            />
          )}/>
        </Switch>
        <div class='container'>

          <a class='mobile' href='/portfolio'><img class='img-nav' src={cloud}/>Case Studies</a>
          <a class='mobile1' href='/contact'><img class='img-nav' src={stack}/>Get In Touch</a>
        </div>
        <div class='footer-container'>
        
          <div class='footer'>
          <h2>Glass Top © </h2>
          <div class='social-container'>
          <a class='social' href='https://www.instagram.com/glasstop.io/' target="_blank" rel="noopener noreferrer" ><img class='insta-img' src={insta} /></a>
            <a class='social' target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/GlassTop'><svg width="35" height="25" viewBox="0 0 35 35" fill="white" xmlns="http://www.w3.org/2000/svg" weight='900' viewBox="0 0 50 50" width="35px" height="35px"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z" /></svg></a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
