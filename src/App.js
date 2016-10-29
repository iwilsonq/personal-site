import React, { Component } from 'react';
import Navbar from './Navbar';
import Snapper from './Snapper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Snapper />
      </div>
    );
  }
}

export default App;
