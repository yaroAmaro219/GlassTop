import React, { Component } from 'react'
import Nav from './Testnav'
import '../styles/About.css'

export default class About extends Component {
  render() {
    return (
      <>
        <Nav/>
        <div class='page1'>
          <div class='about-contianer'>
        <h1>About</h1>
        <h3>Mission</h3>
            <p>Our mission it to create the online enviornonemt neccesary for business's and people to succeed at their ambitions. We work comprehensively to create the most attractive website possible.</p>
            </div>
        </div>
      </>
    )
  }
}
