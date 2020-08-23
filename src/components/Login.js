import React, { Component } from 'react'
import GoogleBtn from '../services/GoogleBtn'

export default class Login extends Component {
  render() {
    return (
      <div class='login-container'>
        <h1>Login</h1>
        <h3>coming soon</h3>
        {/* <form onSubmit={''} >
          <input>Hello</input>
          <input>Hello</input>
          </form> */}
        <h3>-OR-</h3>
        <GoogleBtn/>
      </div>
    )
  }
}
