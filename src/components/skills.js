import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    return (
      <div className="skills container">
        <h1>Skills component</h1>
        <div className="skills-container">
          <div className="skill-row">
            <div className="skill">
              <span>JavaScript
                <img id="javascript-logo" className="skill-logo" src={require('../../public/imgs/Javascript.png')} alt="html"/>
              </span>
            </div>
            <div className="skill">
              <span>HTML
                <img id="html5-logo" className="skill-logo" src={require('../../public/imgs/html5.png')} alt="html"/>
              </span>

            </div>
            <div className="skill">
              <span>CSS (SASS)
                <img id="sass-logo" className="skill-logo" src={require('../../public/imgs/sass.svg')} alt="html"/>
              </span>
            </div>
            <div className="skill">
              <span>ReactJS
                <img id="react-logo" className="skill-logo" src={require('../../public/imgs/reactjs.png')} alt="html"/>
              </span>
            </div>
          </div>
          <div className="skill-row">
            <div className="skill">
              <span>Github
                <img id="github-logo" className="skill-logo" src={require('../../public/imgs/github.png')} alt="html"/>
              </span>
            </div>
            <div className="skill">
              <span>Electron
                <img id="electron-logo" className="skill-logo" src={require('../../public/imgs/electron.png')} alt="html"/>
              </span>
            </div>
            <div className="skill">
              <span>NodeJS
                <img id="node-logo" className="skill-logo" src={require('../../public/imgs/nodejs.png')} alt="html"/>
              </span>
            </div>
            <div className="skill">
              <span>REST
                <img id="rest-logo" className="skill-logo" src={require('../../public/imgs/rest-api.png')} alt="html"/>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
