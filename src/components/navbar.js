import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import '../../public/styles/navbar.sass';

const styles = {
  navbar: {
    width: '100%',
    height: 30,
    backgroundColor: '#fff',
    border: '1px solid #e8e8e8',
    padding: 12
  },
  navContent: {
    width: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -15
  },
  businessLinks: {
    position: 'relative',
    paddingBottom: 10,
    paddingTop: 16
  },
  iconStyle: {
    fontSize: 30
  }
};

export default class Navbar extends Component {
  render() {
    let lastScrollTop = 0;
    document.addEventListener('scroll', () => {
      const offsetTop = window.pageYOffset || document.scrollingElement.scrollTop;
      if (offsetTop > lastScrollTop && offsetTop > 67) {
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
            <Link to='/'>
              <img className="me-img" src={require('../../public/imgs/me1.jpg')} alt="Ian" />
            </Link>
          </div>

          <ul className="site-menu">
            <li className="site-link">
              <Link to="/">Home</Link>
            </li>
            <li className="site-link">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>

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
