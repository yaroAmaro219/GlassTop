import React, { Component } from 'react'
import artemie from "../images/Screenshot 2020-08-22 at 10.14.20 AM.jpeg";
import web from '../images/088-laptop.svg'

export default class Home1 extends Component {
  render() {
    return (
      <div>
        <div class='first'>
          <div class='right-container'>
              <div class='title-container'>
              <h1 class='title'>Find your website</h1>
              <h3 class='page-title1'>Web design & development in New York</h3>
              <div class='buttons'>
              <a class='main-btn' href='/contact' >Request Consultation</a>
              {/* <a class='main-btn'  href='/design' >Design</a> */}
          </div>
              <img src={web} class='web'/>
              </div>
              {/* <div class='sub-container'>
                <p class='sub-title'>Rentals</p>
                <p class='sub-title'>NYC</p>
                <p class='sub-title2'>Campers are still available!</p>
                </div> */}
             
           
          </div>
        </div>
      </div>
    )
  }
}
