import React, { Component } from 'react'
import Nav from './Testnav'
import Ball from '../images/Tennis-Ball-Download-Free-PNG.png'
import Mind from '../images/mind.svg'
import Camper from '../images/Floral-Volkswagen-Camper.svg'

export default class Work extends Component {
  render() {
    return (
      <>
        <Nav/>
      <div class='page1'>
          <div class='portfolio-container'>
            <h3>Our Work</h3>
            <h2>Some highlights of our favorite projects we've done for forward thinking clients.</h2>
        <div class='work-piece'>
        <h3>Tennis Coaches of NYC</h3>
              <a href='http://tenniscoachesofnyc.com/'><img src={Ball}/></a>
          </div>
          <div class='work-piece'>
        <h3 >Mind Guided Meditation</h3>
              <a href='https://www.mindguidedmeditation.com/'><img src={Mind}/></a>
          </div>
          <div class='work-piece'>
        <h3 >Converted Camper</h3>
              <a href='https://www.convertedcamper.io/'><img src={Camper}/></a>
          </div>
          </div>
        </div>
        </>
    )
  }
}
