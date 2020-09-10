import React, { Component } from 'react'
import insta from '../images/instagram1.svg'
import Modal from '../services/Modal'
import Google from '../services/GoogleBtn'

export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      sign: false,
      login: false,
      show: false,
      register: false,
      user: false,
    }
  }

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  showModalRegister = e => {
    this.setState({
      show: !this.state.register
    });
  };

//   onOpenModal = () => {
//     this.setState({ sign: true });
// };

// onOpenModalLogin = () => {
//     this.setState({ login: true });
// };

// onCloseModal = () => {
//     this.setState({ sign: false });
// };

// onCloseModalclose = () => {
//     this.setState({ login: false });
// };

  render() {
    // const { login, sign } = this.state;
    return (
      <>
        <div class="nav">
     
          

          <div class='nav-text'>
        <a class='link' href='/begin'>Get Started</a>
        <a class='link' href='/work'>How We Work</a>
        <a class='link' href='/about'>About Us</a>
        <a class='link' href='/reviews'>Reviews</a>
        <a class='link' href='/contact'>Contact</a>
        {/* <button  class="link" onClick={e => {
            this.showModal(e); document.getElementById("nav-toggle").checked = false 
                }}
                >Sign In</button> */}
            </div>
         
              <div class="hamburger">
                <input type="checkbox" id="nav-toggle" />
                <label for="nav-toggle">
                  <span class="toggle-words"><i class="fa fa-bars" id="bar"><svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="15"></rect>
                    <rect y="30" width="100" height="15"></rect>
                    <rect y="60" width="100" height="15"></rect>
                  </svg></i></span>
                </label>
                <div class="menu">
                  <ul>
                    {/* <li><button  class="nav-link-button" onClick={e => {
            this.showModal(e); document.getElementById("nav-toggle").checked = false 
                }}
               
                >Sign In</button></li> */}
                    <li><a href="/begin" class="nav-link"
                      onClick={() => document.getElementById("nav-toggle").checked = false}>Services</a></li>
                    {/* <li><a href='/#dates' class="nav-link"
                      onClick={() => document.getElementById("nav-toggle").checked = false}>About</a></li> */}
                    <li><a href="/work" class="nav-link"
                      onClick={() => document.getElementById("nav-toggle").checked = false}>How We Work</a></li>
                    <li><a href="/pricing" class="nav-link"
                      onClick={() => document.getElementById("nav-toggle").checked = false}>Pricing</a></li>
                    <li><a href="/team" class="nav-link"
                      onClick={() => document.getElementById("nav-toggle").checked = false}>Our Team</a></li>
                    <li><a href='/about' class="nav-link" onClick={() => document.getElementById("nav-toggle").checked = false}>About Us</a> </li>
                    <li><a href='/reviews' class="nav-link" onClick={() => document.getElementById("nav-toggle").checked = false}>Reviews</a> </li>
                    <li><a href="/contact" class="nav-link"
                      onClick={() => document.getElementById("nav-toggle").checked = false}>Contact</a></li>
                    <div class='nav-social'>
                      <a class='social' href='https://www.instagram.com/glasstop.io/' target="_blank" rel="noopener noreferrer" ><img src={insta} /></a>
                      <a class='social' target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/GlassTop'><svg width="35" height="25" viewBox="0 0 35 35" fill="white" xmlns="http://www.w3.org/2000/svg" weight='900' viewBox="0 0 50 50" width="35px" height="35px"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z" /></svg></a></div>
                  </ul>
                </div>
              </div>
        </div>
        {/* <Modal open={sign} onClose={this.onCloseModal}>
                    <div className="modal-body">
                        <h2>Get Started Absolutely<span> Free!</span></h2>
                        <span className="subtitle">No credit card needed</span>
                        <form className="contact-form form-validate3" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" id="name" placeholder="First Name" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="Sign Up" />
                        </form>
                    </div>
        </Modal>
        
        <Modal open={login} onClose={this.onCloseModalclose}>
                
                <div className="modal-body">
                    <h2>Login and Get <span>Started</span></h2>
                    <span className="subtitle">Just fill in the form below</span>
                    <form className="contact-form form-validate4" novalidate="novalidate">
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                        </div>
                        <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" />
                    </form>
                </div>
            </Modal> */}
        <Modal onClose={this.showModal} show={this.state.show}>
          <div class='modal-container'>
          <form class='sign-in-form'>
          Sign In
            <input class='sign-in-input' placeholder='Email'></input>
              <input class='sign-in-input' placeholder='Password' type='password'></input>
              <button>Login</button>
              Or login with:
              <Google />
            
              <h3>Need an account?</h3>
              <button onClick={this.showModalRegister}>Register</button>
          </form>
         
          </div>
          </Modal>
          <Modal onClose={this.showModal} show={this.state.register}>
          <div class='modal-container'>
          <form class='sign-in-form'>
          Sign In
            <input class='sign-in-input' placeholder='Email'></input>
              <input class='sign-in-input' placeholder='Password' type='password'></input>
              <button>Login</button>
              Or login with:
              <Google />
            
              <h3>Need an account?</h3>
              <button>Register</button>
          </form>
         
          </div>
          </Modal>
        </>
    )
  }
}