import React, { Component } from 'react';
import Snapper from './snapper';
import './navbar.sass'

const styles = {
  navbar: {
    width: '100%',
    height: 65,
    backgroundColor: '#fff',
    border: '1px solid #e8e8e8',
    padding: 10
  },
  navContent: {
    width: 1000,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  businessLinks: {
    position: 'relative',
    paddingTop: 8
  },
  iconStyle: {
    fontSize: 44
  }
};

export default class Navbar extends Component {
  render() {
    let lastScrollTop = 0;
    document.addEventListener('scroll', () => {
      const offsetTop = window.pageYOffset || document.scrollingElement.scrollTop;
      if (offsetTop > lastScrollTop && offsetTop > 83) {
        document.getElementById('navbar').classList.remove('show-nav');
        document.getElementById('navbar').classList.add('hide-nav');
      } else {
        document.getElementById('navbar').classList.remove('hide-nav');
        document.getElementById('navbar').classList.add('show-nav');
      }
      lastScrollTop = offsetTop;
    }, false);

    return (
      <div id="navbar" className="show-nav" style={styles.navbar}>
        <div className="nav-content" style={styles.navContent}>
          <div className="nav-brand">
            <Snapper />
          </div>
          <ul className="nav-menu" style={styles.businessLinks}>
            <li><a target="_blank" href="http://github.com/iwilsonq">
              <i style={styles.iconStyle} className="fa fa-github" aria-hidden="true"></i>
            </a></li>
            <li><a target="_blank" href="http://codepen.io/iwilsonq">
              <i style={styles.iconStyle} className="fa fa-codepen" aria-hidden="true"></i>
            </a></li>
            <li><a target="_blank" href="http://linkedin.com/in/iwilsonq">
              <i style={styles.iconStyle} className="fa fa-linkedin" aria-hidden="true"></i>
            </a></li>
            <li><a target="_blank" href="http://twitter.com/iwilsonq">
              <i style={styles.iconStyle} className="fa fa-twitter" aria-hidden="true"></i>
            </a></li>
          </ul>
        </div>
      </div>
    );
  }
}
