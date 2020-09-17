import React, { Component } from 'react'

export default class Home1 extends Component {
  
  render() {
    return (
      <div class='page1'>
         <div class="vimeo-wrapper">
          <iframe src="https://player.vimeo.com/video/457001729?background=1&autoplay=1&loop=1&byline=0&title=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
        <div class='title-container'>
          <h1 class='title'>Find your website</h1>
          <h3 class='page-title1'>Web design & development in New York</h3>
          <div class='main-btn-container'>
          <a class="main-btn" href='/portfolio'>View Case Studies</a>
            <a class='main-btn' href='/contact'>Contact Us</a>
            </div>
        </div> 
        <div class='home1'>
          <h2>How we stand out - we are proactive experts</h2>
          <a class="main-btn" href='/contact'>Request Consultation</a>
        </div>
        <div class='home1'id='casestudies'>
          <h2>Case Studies</h2>
          <a class="main-btn" href='/portfolio'>View Portfolio</a>
        </div> 
        </div>
    )
  }
}
