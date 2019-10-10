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
            <ServicePhoto
              img="/images/services_1.jpg"
              title="Transportation"
              subtitle="All transportation cost we bear"
            />
          </div>
          <div className="column">
            <ServicePhoto
              img="/images/services_2.png"
              title="Guidence"
              subtitle="We offer the best guidence for you"
            />
          </div>
          <div className="column">
            <ServicePhoto
              img="/images/services_3.jpg"
              title="Accomodation"
              subtitle="Luxarious and comfortable"
            />
          </div>
          <div className="column">
            <ServicePhoto
              img="/images/services_4.jpg"
              title="Discover world"
              subtitle="Best tour plan for your next tour"
            />
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
);
export default RestContent;
