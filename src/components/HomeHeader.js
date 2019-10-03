import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 12rem;
  margin-bottom: 4rem;
  text-align: center;
  .text {
    line-height: 1.3;
    font-size: 8rem;
  }
  .pding {
    padding-top: 30px;
    padding-right: 79px;
    padding-bottom: 30px;
    padding-left: 79px;
    background-color: ${props => props.theme.lightShades};
    color: ${props => props.theme.darkAccent};
    :hover {
      background-color: ${props => props.theme.mainBrandColor};
      color: ${props => props.theme.darkAccent};
    }
    margin-top: 3rem;
  }
`;
const HomeHeader = () => (
  <section className="section">
    <Container className="container">
      <p className=" text has-text-white has-text-weight-semibold">
        Saintmartine
      </p>
      <p className="is-size-4 has-text-white">
        Let’s start your journey with us, your dream will come true
      </p>
      <a className=" button pding">Discover Now</a>
    </Container>
  </section>
);
export default HomeHeader;
