import React, { Component } from 'react'
import Nav from './Testnav'

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phone: '',
      email: '',
      company: '',
      comments: '',
    }
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  render() {
    const {addContact} = this.props
    return (
      <div>
        <Nav/>
      <div class='page1'>
        <div class='contact1'>
          <h2>Awesomeness awaits!</h2>
          <h3>Connect with our experts
          </h3>
          <div class='inputs'>
            <h3 class='input-name'>Name:</h3>
            <input class='input1' placeholder='Name' onChange={this.handleChange} />
            <h3 class='input-name'>Email:</h3>
            <input class='input1' placeholder='Email' onChange={this.handleChange}/>
            <h3 class='input-name'>Phone:</h3>
            <input class='input1' placeholder='Phone' onChange={this.handleChange}/>
            <h3 class='input-name'>Company:</h3>
            <input class='input1' placeholder='Company' onChange={this.handleChange}/>
            <h3 class='input-name'>Comments:</h3>
            <textarea class='comments' placeholder='Type your message here...' onChange={this.handleChange}/>
              <button
                class='submit-button'
                onClick={(e) => {
                  addContact(
                    this.state.name,
                    this.state.phone,
                    this.state.email,
                    this.state.company,
                    this.state.comments,
                  );
                }}>Submit</button>
          </div>
          <div class='contact3'>
            <h2>Brooklyn, New York 219 19th Street 11232</h2>
          <h1><a class='phone' href='tel:3474006623'>347-400-6623</a></h1>
            <h3><a class='phone' href="mailto:convertedcamper@gmail.com">GlassTop@gmail.com</a></h3>
            </div>
        </div>
        </div>
        </div>
    )
  }
}
