import React from 'react';
import styled from 'styled-components';
import VisitPhoto from './VisitPhoto';

const Wrapper = styled.div`
  .disk {
    margin-top: 3rem;
  }
`;
const VisitContent = () => (
  <Wrapper>
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-half">
            <VisitPhoto image="/images/Backimg.jpg" />
          </div>
          <div className="column is-half">
            <VisitPhoto image="/images/backimg1.jpg" />
          </div>
          <div className="column is-half">
            <VisitPhoto image="/images/backimg2.jpg" />
          </div>
          <div className="column is-half">
            <VisitPhoto image="/images/backimg3.jpg" />
          </div>
        </div>
        <div className="has-text-centered">
          <a className="button disk is-medium">Discover More</a>
        </div>
      </div>
    </section>
  </Wrapper>
);
export default VisitContent;
