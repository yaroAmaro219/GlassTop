import React, { Component } from 'react'
import Nav from './Testnav'
import Ball from '../images/Tennis Coaches Of NYC.png'
import Mind from '../images/Mind Guided Meditation.png'
import Camper from '../images/ConvertedCamper.io.png'
import Dog from '../images/Dog Sitting NYC.png'

export default class Work extends Component {
  render() {
    return (
      <>
        <Nav/>
        <div class='page1'>
          <div class='portfolio-container'>
            <div class='portfolio-intro'>
              <h3>Our Work</h3>
              <h2 class='intro'>Some highlights of our favorite projects we've done for forward thinking clients.</h2>
            </div>
            <div class='work-piece-tennis'>
              <h3 class='title-tennis'>Tennis Coaches of NYC</h3>
              <a target="_blank" rel="noopener noreferrer" href='http://tenniscoachesofnyc.com/'><img class='portfolio-img' src={Ball}/></a>
            </div>
            <div class='work-piece-mind'>
              <h3 class='title-mind'>Mind Guided Meditation</h3>
              <a target="_blank" rel="noopener noreferrer" href='https://www.mindguidedmeditation.com/'><img class='portfolio-img' src={Mind}/></a>
            </div>
            <div class='work-piece-camper'>
              <h3 class='title-camper'>Converted Camper</h3>
              <a target="_blank" rel="noopener noreferrer" href='https://www.convertedcamper.io/'><img class='portfolio-img' src={Camper}/></a>
            </div>
            <div class='work-piece-dog'>
              <h3 class='title-dog'>Dog Sitting NYC</h3>
              <a target="_blank" rel="noopener noreferrer" href='https://www.dogsittingnyc.com/'><img class='portfolio-img' src={Dog}/></a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
