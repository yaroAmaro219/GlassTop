import React, { Component } from 'react'
import Marissa from '../images/56859254072__D0AB336A-94B5-4C39-A7FA-813540F25E2D.JPG'
import Artemie from '../images/MTenn.JPG'
import Nav from './Testnav'

export default class Team extends Component {
  render() {
    return (
      <div>
        <Nav />
      <div class='page1'>
        <h1 class='page-title'>Design</h1>
        <div class='bio'>
          <img class='bio-pic' src={Marissa} />
          <div class='bio-text'>
          <h3>Marissa Cole</h3>
        <h4>Head of Design</h4>
          <p class='blurb'>Marissa has an eye for making environemnts as simplistic and functional as possible. She is a graduate from Maryland University where she graduated with a B.S. in Marketing. She worked as a member of the PJT Marketing team. </p>
          </div>
        </div>
        <h1 class='page-title'>Web Development</h1>
        <div class='bio'>
          <img class='bio-pic' src={Artemie} />
          <div class='bio-text'>
            <h3>Artemie Amari</h3>
            <a  class='portfolio-link' target="_blank" rel="noopener noreferrer" href='https://www.artemieamari.com/#portfolio'>Portfolio</a>
        <h4>Full Stack Web Developer</h4>
          <p class='blurb'>Artemie has been pursuing web development since highschool when he first started programming. He has been developing ever since.  </p>
          </div>
        </div>
        </div>
        </div>
    )
  }
}
