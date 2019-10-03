/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  padding: 1rem 1.5rem;
  font-family: ${props => props.theme.primaryFontFamily};
  .navbar {
    background-color: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 3.75rem;
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-item {
    font-weight: 500;
    font-size: 16px;
    padding-top: 0rem;
    padding-bottom: 0rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: ${props => props.theme.darkAccent};
    :hover {
      color: ${props => props.theme.mainBrandColor};
    }
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src="/images/logo-1024.png" alt="site logo" />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-end">
                <Link to="/" className="navbar-item">
                  Home
                </Link>
                <Link to="/about" className="navbar-item">
                  About
                </Link>
                <Link to="/news" className="navbar-item">
                  Package
                </Link>
                <Link to="/contact" className="navbar-item">
                  Contact
                </Link>
                <div className="navbar-item has-dropdown is-hoverable">
                  <p className="navbar-link has-text-white">Blog</p>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">Blog</a>
                    <a className="navbar-item">Single blog</a>
                  </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                  <p className="navbar-link has-text-white">Pages</p>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">Top Place</a>
                    <a className="navbar-item">Tour Detail</a>
                    <a className="navbar-item">Element</a>
                  </div>
                </div>
                <Link to="/contact" className="navbar-item">
                  Contact
                </Link>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-medium">Book Now</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
