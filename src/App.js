import React, { Component } from 'react';
import logo from './assets/tk-logo.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.googleIntegration = this.googleIntegration.bind(this);
  }

  googleIntegration() {
    alert("hey!");
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <img src={logo} alt="logo" className="App-logo" />
          <p className="App-intro">
            Welcome to Trendkite's Proof of Concept for a OAuth and Google Analytics Integration.
          </p>
          <button onClick={() => this.googleIntegration()} />
        </div>
      </div>
    );
  }
}

export default App;
