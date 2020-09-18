import React, { Component } from 'react'
import artemie from "../images/Screenshot 2020-08-22 at 10.14.20 AM.jpeg";


export default class Home extends Component {
  render() {
    return (
      <div class="home">
         <div class='first'>
          <div class='left-container'>
            <img src={artemie} class="home-img">
            </img>
        </div>
          <div class='right-container'>
            <div class='text-container'>
              <div class='title-container'>
                <h1 class='title'>Find your adventure</h1>
              </div>
              <div class='sub-container'>
                <p class='sub-title'>Rentals</p>
                <p class='sub-title'>NYC</p>
                <p class='sub-title2'>Campers are still available!</p>
                </div>
              <div class='enroll-button-container'>
                <p class='enroll-button'>
                <a class='enroll-home' href='/enrolls'>Book It</a></p>
                {/* <h2 class='enroll-sub'>Spots are still available!</h2> */}
            </div>
            </div>
          </div>
        </div>
        <div class='second' id='dates'>
          <div class='second-text-container'>
          <h1 class='title2'>Date + Time:</h1>
          <h1>-</h1>
          <h2>Weekdays</h2>
          {/* <h2>August 3 - 28</h2>
            <h2> 9am - 12pm</h2>
            <h1>-</h1>
            <h2>Fall Enrollment</h2>
            <h2>September 8 - October 30</h2>
          <h2>3:30pm - 5pm</h2> */}
            </div>
        </div>
        <div class="third" id='location'>
          <h1>Meet us here!</h1>
          <h1>-</h1>
          <h2 class='place'>Prospect Park</h2>
          <iframe class='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.479706453371!2d-73.97883028491002!3d40.66339814852492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b1b652da915%3A0x4f03686bcb67e3c8!2sProspect%20Park%20Bandshell!5e0!3m2!1sen!2sus!4v1597753402904!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <div class='pricing' id='pricing'>
          <h1 class='title2'>Pricing:</h1>
          <h1>-</h1>
          <h2>One Night: $100/night</h2>
          <h2>Week: $550/week</h2>
          <h2>Month: $2000/month </h2>
        </div>
        <div class='fifth' id='coaches'>
          <h1>Meet our founders!</h1>
          <h1>-</h1>
          <h2 class='artemie'>Marissa Cole </h2> 
          {/* <h4 class='beacon'>(Fort Greene)</h4> */}
          <h5 class='blurb'>​Marissa is Amazing!</h5>
          {/* <img class="profile-img" src={Andrew} /> */}
          <h4 class='acalades'>Dog Lover</h4>
          <h4 class='acalades2'>Camper Designer</h4>
          <h1>-</h1>
          <h2 class='artemie'>Artemie Amari</h2>
          <h4 class='beacon'></h4>
          <h5 class='blurb'>Artemie is amazing too!</h5>
          {/* <img class="profile-img" src={jacob} /> */}
          <h4 class='acalades'>Dog Lover</h4>
          <h4 class='acalades2'>Camper Builder</h4>
          <h5 class='beacon'>Software Engineer</h5>
        </div>
        <div class="enroll" id='enroll'>
          <h1 class='title2'>Ready to Book One?</h1>
          <h1>-</h1>
          <a class='enroll-enroll' href='/enrolls'><p class='enroll-button2'>Book It</p></a>
        </div>
        <div class="private" id='private'>
          <h1>About Us</h1>
          {/* <h1>-</h1>
          <h3>Portable net: $80/hour</h3>
          <h3>Full court: $100/hour</h3>
          <h3>*Location flexible</h3> */}
        </div>
        <div class='contact' id='string'>
          <h1 class='title2'>Reviews</h1>
          {/* <h1>-</h1>
          <h3>We offer racket stringing!</h3>
          <h3>$25/racket</h3>
          <h4>We use a <a class='machine' target="_blank" rel="noopener noreferrer" href='https://www.wilson.com/en-us/badminton/stringing-machine/baiardo-l-stringing-machine'>Baiardo L Stringing Machine</a></h4>
          <h4>*String sold seperately</h4> */}
        </div>
        <div class='bring' id='bring'>
          <h1>What to Know</h1>
          {/* <h1>-</h1>
          <h3 class='bring-h3'>A Racket! We will have extras for those that need them.</h3>
          <h3 class='bring-h3'>A water bottle!</h3> */}
        </div>
      </div>
    )
  }
}