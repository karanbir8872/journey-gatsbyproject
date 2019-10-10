import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .form {
    color: ${props => props.theme.mainBrandColor};
  }
`;
const Restronent = ({ img }) => (
  <Wrapper>
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={img} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p>Hotel Polonia</p>
          <p>
            Rating:
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
            <span className="icon has-text-warning">
              <i className="fas fa-star" />
            </span>
          </p>
          <p>London, United Kingdom</p>
          <p className="org">
            From
            <span className="form">$500</span>
          </p>
        </div>
      </div>
    </div>
  </Wrapper>
);
export default Restronent;
