import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Header from '../components/Header';
import HomeHeader from '../components/HomeHeader';
import BookingContent from '../components/BookingContent';
import Visit from '../components/Visit';
import VisitContent from '../components/VisitContent';
import Background from '../components/Background';
import Slider from '../components/Slider';
import Layout from '../components/Layout';

const Topcontainer = styled.div`
  background-image: url(/images/life.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 880px;
  z-index: 1;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Topcontainer>
          <Header />
          <HomeHeader />
          <BookingContent />
          <Visit />
          <VisitContent />
          <Background />
          <Slider />
        </Topcontainer>
      </Layout>
    );
  }
}
