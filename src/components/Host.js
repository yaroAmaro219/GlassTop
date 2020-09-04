import React, { Component } from 'react'
import Marissa from '../images/56859254072__D0AB336A-94B5-4C39-A7FA-813540F25E2D.JPG'

export default class Host extends Component {
  render() {
    return (
      <div class='page1'>
        <h1 class='page-title'>Design</h1>
        <div class='bio'>
          <img class='bio-pic' src={Marissa} />
          <div class='bio-text'>
          <h3>Marissa Cole</h3>
        <h4>Head of Design</h4>
          <p class='blurb'>Marissa has an eye for making environemnts as simplistic and functional as possible. She is a graduate from Maryland University where she graduated with a B.S. in Marketing.  </p>
          </div>
        </div>
        <div class='projects'>
          <h1>Projects</h1>
        </div>
      </div>
    )
  }
}
