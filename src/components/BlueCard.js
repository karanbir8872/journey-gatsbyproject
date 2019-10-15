import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #0c3e72;
  margin-top: 10rem;
  .card {
    background-color: ${props => props.theme.darkShades};
    margin-top: 7rem;
    margin-bottom: 5rem;
  }
  .tocolor {
    color: ${props => props.theme.darkAccent};
  }
  @media only screen and (max-width: 600px) {
    .said {
      line-height: 1;
    }
  }
`;
const BlueCard = () => (
  <Wrapper>
    <section className="section">
      <div className="container">
        <p className="said has-text-white is-size-1 has-text-weight-semibold is-family-sans-serif ">
          What they said
        </p>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <p>
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
                  <p className="tocolor">
                    Waters make fish every without firmament saw had. Morning
                    subdue. Our. Air very one. Whales grass is fish whales
                    winged night yeildling land creeping the seed.
                  </p>
                  <p className="tocolor">-Allen Miller</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <p>
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
                  <p className="tocolor">
                    Waters make fish every without firmament saw had. Morning
                    subdue. Our. Air very one. Whales grass is fish whales
                    winged night yeildling land creeping the seed.
                  </p>
                  <p className="tocolor">-Allen Miller</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <p>
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
                  <p className="tocolor">
                    Waters make fish every without firmament saw had. Morning
                    air subdue. Our. Air very one. Whales grass is fish whales
                    winged night yeildling land creeping the seed.
                  </p>
                  <p className="tocolor">-Allen Miller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
);
export default BlueCard;
