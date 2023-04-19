import React from 'react';
import { Container } from 'react-bootstrap';

const Favorites = ({ favorites }) => {
  return (
    <>
      <div className="header">
        <h1>
          <b>Favorites</b>
        </h1>
      </div>
      <p />
      <div>
        {favorites.map((favorite) => (
          <div>
            <Container
              key={favorite.id}/*doesn't exist lol*/
              className="each-story-container scroll"
            >
              <h3>
                <u>{favorite.title}</u>
              </h3>
              <p>{favorite.desc}</p>
            </Container>
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default Favorites;
