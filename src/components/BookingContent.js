import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 7rem;
  .box {
    margin-top: -7rem;
    border-radius: 0rem;
  }
  .tabs {
    margin-bottom: 3rem;
  }
  .columns {
    margin-bottom: 1rem;
  }
`;
const BookingContent = () => (
  <Wrapper>
    <section className="section">
      <div className="container">
        <div className="box">
          <div className="tabs">
            <ul>
              <li className="is-active">
                <a>Hotel</a>
              </li>
              <li>
                <a>Ticket</a>
              </li>
              <li>
                <a>Place</a>
              </li>
            </ul>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field">
                <div className="control">
                  <div className="select is-info">
                    <select>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <div className="control">
                  <div className="select is-primary">
                    <select>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <div className="control">
                  <div className="select is-warning">
                    <select>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <div className="control">
                  <div className="select is-danger">
                    <select>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
);
export default BookingContent;
