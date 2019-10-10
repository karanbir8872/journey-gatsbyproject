import React from 'react';
import styled from 'styled-components';

const Style = styled.div``;
const ServicePhoto = props => {
  const { img } = props;
  return (
    <Style>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={img} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <p className="titl">Transportation</p>
          <p className="subtitl">All transportation cost we bear</p>
        </div>
      </div>
    </Style>
  );
};
export default ServicePhoto;
