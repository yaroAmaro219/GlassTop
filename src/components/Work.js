import React, { Component } from 'react'

export default class Work extends Component {
  render() {
    return (
      <div class='page1'>
        <div class='portfolio-container'>
        <h1 class="white">Portfolio</h1>
        <div class='work-piece'>
        <h3 class="white">Tennis Coaches of NYC</h3>
          <a class="white" href='http://tenniscoachesofnyc.com/'>Link</a>
          </div>
          <div class='work-piece'>
        <h3 class="white">Mind Guided Meditation</h3>
          <a class="white" href='https://www.mindguidedmeditation.com/'>Link</a>
          </div>
          <div class='work-piece'>
        <h3 class="white">Converted Camper</h3>
          <a class="white" href='https://www.convertedcamper.io/'>Link</a>
          </div>
          </div>
      </div>
    )
  }
}
