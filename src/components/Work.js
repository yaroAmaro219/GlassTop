import React, { Component } from 'react'
import Nav from './Testnav'

export default class Work extends Component {
  render() {
    return (
      <>
        <Nav/>
      <div class='page1'>
        <div class='portfolio-container'>
        <div class='work-piece'>
        <h3>Tennis Coaches of NYC</h3>
          <a  href='http://tenniscoachesofnyc.com/'>Link</a>
          </div>
          <div class='work-piece'>
        <h3 >Mind Guided Meditation</h3>
          <a  href='https://www.mindguidedmeditation.com/'>Link</a>
          </div>
          <div class='work-piece'>
        <h3 >Converted Camper</h3>
          <a  href='https://www.convertedcamper.io/'>Link</a>
          </div>
          </div>
        </div>
        </>
    )
  }
}
