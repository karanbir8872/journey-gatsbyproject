import React from 'react';
import styled from 'styled-components';
import ServicePhoto from './ServicePhoto';

const Wrapper = styled.div``;
const RestContent = () => (
  <Wrapper>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <ServicePhoto img="/images/industry1.jpg" />
          </div>
          <div className="column">
            <ServicePhoto img="/images/industry2.jpg" />
          </div>
          <div className="column">
            <ServicePhoto img="/images/industry3.jpg" />
          </div>
          <div className="column">
            <ServicePhoto img="/images/industry3.jpg" />
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
);
export default RestContent;
