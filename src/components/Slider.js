import React, { Component } from 'react';
import Slider from 'react-slick';

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
        <Slider {...settings}>
          <div>
            <div className="columns">
              <div className="column is-two-fifths">
                <div className="card">
                  <div className="card-content">
                    <h5>Upcoming event</h5>
                    <h3>Maldeva-Asia</h3>
                    <p>
                      Waters makes fish every without firmaments saw had.Morning
                      air subdue.our.Air every one.Whales grass in fish Whales
                      Winged.
                    </p>
                    <p>
                      date
                      <span>7-october-2019</span>
                    </p>
                    <p>
                      cost
                      <span>Start from $860</span>
                    </p>
                    <p>
                      organizer
                      <span>Martine Ageny</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3>2</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
