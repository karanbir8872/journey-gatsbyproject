import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const SliderStyled = styled(Slider)`
  margin-top: -34rem;
  .colr {
    color: ${props => props.theme.mainBrandColor};
    line-height: 1.5;
  }
  .colr1 {
    color: ${props => props.theme.darkShades};
    line-height: 2;
    font-size: 32px;
  }
  .colr2 {
    font-size: 17px;
    margin-bottom: 12px;
  }
  .col3 {
    line-height: 2;
  }
  .marg {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <SliderStyled {...settings}>
          <div>
            <section className="section">
              <div className="container">
                <div className="columns">
                  <div className="column" />
                  <div className="column is-two-fifths">
                    <div className="card">
                      <div className="card-content">
                        <p className="colr">Upcoming Event</p>
                        <p className="colr1">Maldeva-Asia</p>
                        <p className="colr2">
                          Waters makes fish every without firmaments saw
                          had.Morning air subdue.our.Air every one.Whales grass
                          in fish Whales Winged.
                        </p>
                        <p className="col3">
                          date:
                          <span>7-october-2019</span>
                        </p>
                        <p className="col3">
                          cost:
                          <span>Start from $860</span>
                        </p>
                        <p className="col3">
                          organizer:
                          <span>Martine Ageny</span>
                        </p>
                        <div className="rating">
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
                        </div>
                        <a className="button is-medium marg">Plan Details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3>2</h3>
              </div>
            </section>
          </div>
        </SliderStyled>
      </div>
    );
  }
}
