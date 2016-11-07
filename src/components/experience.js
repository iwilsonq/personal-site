import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    return (
      <div className="experience container">
        <h1>Experience component</h1>
        <div className="experience-content">
          <div className="row-experience">
            <img className="image-pirashield" src={require('../../public/imgs/pirashield.png')} />
            <p className="p-pirashield">
              PiraShield is a technology solution that scans the web for copyright infringements and then submits them in order to have links to pirated digital content removed. Since I joined them I have worked on a variety of projects including a google scanner, a presentation generator, and the landing page.
            </p>
          </div>
          <div className="row-experience">
            <p className="p-arobooks">
              Arobooks is a platform that allows students on college campuses to buy and sell textbooks from each other. The intent was to save money between students as well as foster student-to-student interacts in a sort of craiglist-esque fashion. This was my first real team project in web development so I got to learn a ton about team platforms like Slack and Trello.
            </p>
            <img className="image-arobooks" src={require('../../public/imgs/arobooks.png')} />
          </div>
        </div>
      </div>
    );
  }
}
