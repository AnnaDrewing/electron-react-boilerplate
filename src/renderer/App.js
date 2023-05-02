import React, { Component } from 'react';
import './App.css';
import ShoppingCart from './Items';
import Counter from './Counter';

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    if (this.state.visibility == true) {
      this.setState((state) => ({
        visibility: false,
      }));
    } else {
      this.setState((state) => ({
        visibility: true,
      }));
    }
  }
  readPatientData() {
    const patientData = require('./resources/patient-data.json');
    console.log(patientData);
  }
  render() {
    //   return (
    //     <div>
    //     </div>
    //   );
    // }

    return (
      <div>
        <h1>Getting Patient Data from JSON</h1>
        <button onClick={this.readPatientData}>Get the data</button>
      </div>
    );
    // if (this.state.visibility) {
    //   return (
    //     <div>
    //       <h1>My First React Component!</h1>
    //       <ShoppingCart />
    //       <button onClick={this.toggleVisibility}>Click Me</button>
    //       <h1>Now you see me!</h1>
    //       <Counter />
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1>My First React Component!</h1>
    //       <ShoppingCart />
    //       <button onClick={this.toggleVisibility}>Click Me</button>
    //     </div>
    //   );
    // }
  }
}
