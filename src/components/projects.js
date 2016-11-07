import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects container">
        <h1>Projects component</h1>
        <p>At the current moment I do not have public repositories that I would like to showcase that totally original works of code. My github link shows off a myriad of 'guided' projects in the sense that they were completed in conjunction with a tutorial, video course, or ebook.</p>
        <p>That said, this website will have to hold its own do for the time being. I styled this website with sass and without any css frameworks such as bootstrap or foundation. I am rolling React as opposed to raw HTML because I love working with single page applications that seamlessly render different views. In the near future, I expect that my choice to use React will make implementing a content management system easier. What I write, however, will probably be rather esoteric for most visitors. </p>
      </div>
    );
  }
}
