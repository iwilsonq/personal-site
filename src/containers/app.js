import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Content from './content';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Content childToRender={this.props.children} />
      </div>
    );
  }
}
