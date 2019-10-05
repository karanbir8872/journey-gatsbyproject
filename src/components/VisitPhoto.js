import React from 'react';
import styled from 'styled-components';

const Style = styled.div``;
const VisitPhoto = ({ image }) => (
  <Style>
    <img src={image} alt="image.png"/>
  </Style>
);
export default VisitPhoto;
