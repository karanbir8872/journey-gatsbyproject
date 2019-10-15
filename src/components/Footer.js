import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #162b45;
  color: white;
  .marg {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  ul {
    line-height: 1.5;
  }
`;
const Footer = () => (
  <Wrapper>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <p>DISCOVER DESTINATION</p>
            <div className="columns marg">
              <div className="column">
                <ul>
                  <li>
                    <a href="#">Miami, USA</a>
                  </li>
                  <li>
                    <a href="#">California, USA</a>
                  </li>
                  <li>
                    <a href="#">London, UK</a>
                  </li>
                  <li>
                    <a href="#">Saintmartine, Bangladesh</a>
                  </li>
                  <li>
                    <a href="#">Mount Everast, India</a>
                  </li>
                  <li>
                    <a href="#">Sidney, Australia</a>
                  </li>
                </ul>
              </div>
              <div className="column">
                <ul>
                  <li>
                    <a href="#">Miami, USA</a>
                  </li>
                  <li>
                    <a href="#">California, USA</a>
                  </li>
                  <li>
                    <a href="#">London, UK</a>
                  </li>
                  <li>
                    <a href="#">Saintmartine, Bangladesh</a>
                  </li>
                  <li>
                    <a href="#">Mount Everast, India</a>
                  </li>
                  <li>
                    <a href="#">Sidney, Australia</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="column">
            <p>SUBSCRIBE NEWSLETTER</p>
            <div className="control has-icons-left has-icons-right marg">
              <input
                className="input is-medium"
                type="email"
                placeholder="Email"
              />
              <span className="icon is-medium is-right">
                <i className="fas fa-envelope" />
              </span>
            </div>
            <p className="">
              Subscribe our newsletter to get update news and offers
            </p>
          </div>
          <div className="column">
            <p>CONTACT US</p>
            <p className="marg">
              4156, New garden, New York, USA +880 362 352 783
            </p>
            <p className="marg">contact@martine.com</p>
            <span className="icon has-text-white">
              <i className="fab fa-facebook" />
            </span>
            <span className="icon has-text-white">
              <i className="fab fa-twitter-square" />
            </span>
            <span className="icon has-text-white">
              <i className="fab fa-pinterest-square" />
            </span>
            <span className="icon has-text-white">
              <i className="fab fa-instagram" />
            </span>
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
);
export default Footer;
