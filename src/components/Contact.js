import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div class='page1'>
        <div class='contact1'>
          <h2>Awesomeness awaits!</h2>
          <h3>Connect with our experts
          </h3>
          <div class='inputs'>
            <h3>Name:</h3>
            <input placeholder='Name' />
            <h3>Email:</h3>
            <input placeholder='Email' />
            <h3>Phone:</h3>
            <input placeholder='Phone' />
            <h3>Company:</h3>
            <input placeholder='Company' />
            <button class='submit-button'>Submit</button>
          </div>
          <div class='contact3'>
          <h1><a class='phone' href='tel:3474006623'>347-400-6623</a></h1>
            <h3><a class='phone' href="mailto:convertedcamper@gmail.com">GlassTop@gmail.com</a></h3>
            </div>
        </div>
        </div>
    )
  }
}
