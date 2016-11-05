import React, { Component } from 'react';
import Hero from '../components/hero';
import Interests from '../components/interests';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Experience from '../components/experience';

import './home.sass';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Interests />
      </div>
    );
  }
}
