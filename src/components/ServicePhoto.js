import React from 'react';
import styled from 'styled-components';

const Style = styled.div``;
const ServicePhoto = props => {
  const { img, title, subtitle } = props;
  return (
    <Style>
      <div className="">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={img} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <p className="titl is-size-4 line">{title}</p>
          <p className="subtitl is-size-6 has-text-grey-light">{subtitle}</p>
        </div>
      </div>
    </Style>
  );
};
export default ServicePhoto;
