import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 7rem;
`;
const BookingContent = () => (
  <Wrapper>
    <section className="section">
      <div className="container">
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
            <div className="control">
              <div className="select">
                <select>
                  <option>choose place</option>
                  <option>one</option>
                  <option>two</option>
                  <option>three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="column">Second column</div>
          <div className="column">Third column</div>
          <div className="column">Fourth column</div>
        </div>
      </div>
    </section>
  </Wrapper>
);
export default BookingContent;
