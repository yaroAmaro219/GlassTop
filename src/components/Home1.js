import React, { Component } from 'react'
import artemie from "../images/Screenshot 2020-08-22 at 10.14.20 AM.jpeg";

export default class Home1 extends Component {
  render() {
    return (
      <div>
        <div class='first'>
          <div class='right-container'>
            <div class='buttons'>
              <a class='main-btn' href='/rent' >Website</a>
              <a class='main-btn'  href='/host' >Design</a>
          </div>
          
              
              <div class='title-container'>
                
              <h1 class='title'>Find your website</h1>
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
