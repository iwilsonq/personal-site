import React, { Component } from 'react';
import './Navbar.css'

const styles = {
  navbar: {
    width: '100%',
    height: 65,
    backgroundColor: '#fff',
    border: '1px solid #e8e8e8'
  },
  navContent: {
    width: 1000,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar" style={styles.navbar}>
        <div className="nav-content" style={styles.navContent}>
          <div className="nav-brand">
            <h1>Iw</h1>
          </div>
          <ul className="nav-menu" style={styles.businessLinks}>
            <li><a href="http://github.com/iwilsonq">Git</a></li>
            <li><a href="http://codepen.io/iwilsonq">Codepen</a></li>
            <li><a href="http://linkedin.com/in/iwilsonq">Linkedin</a></li>
            <li><a href="http://twitter.com/iwilsonq">Twitter</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
