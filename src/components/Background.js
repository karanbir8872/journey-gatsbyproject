import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url(/images/background.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 650px;
  position: relative;
`;
const Background = () => <Wrapper />;
export default Background;
