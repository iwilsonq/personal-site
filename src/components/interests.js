import React, { Component } from 'react';

export default class Interests extends Component {
  render() {
    return (
      <div className="interests container">
        <h1>Interests</h1>
        <div className="row-interests">
          <div className="col-4">
            <h2>Running</h2>
            <p>I've been running nonstop for the past 11 years. It is literally and figuratively my escape from the stagnant reality of modern life. I love to sign up for races several months in advance. I do this in part to have an excuse to travel to a scenic location and also because I love to watch the results of focused training and preparation unfold.</p>
          </div>
          <div className="col-4">
            <h2>Music</h2>
            <p>I like to think that my taste is music is extremely diverse. That said, I am not the biggest fan of modern pop or electronic music. A typical day would have me cycle through punk rock, jazz, new wave, and of course, the soundtracks from some of my favorite films and videogames.</p>
          </div>
          <div className="col-4">
            <h2>Unimaginable science</h2>
            <p>Since I obtained my bachelors degree in physics, I bring with me some extremely theoretical, yet mildly arousing perspectives on the universe from my readings of modern science. I follow the train of thought that would love to witness (in this lifetime) a grand unification between gravity and quantum mechanics.</p>
          </div>
        </div>
      </div>
    );
  }
}
