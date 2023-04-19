import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Favorites from "./Favorites";

const Read = ({ stories, addFavorite }) => {
  //console.log(stories);

  return (
    <>
      <div className="header">
        <h1>
          <b>Read</b>
        </h1>
      </div>
      <p />
      <div>
        {stories.map((story) => (
          <div>
            <Container key={story.id} className="each-story-container scroll">
              <h3>
                <u>{story.title}</u>
              </h3>
              <button className="btn btn-dark" onClick={() => addFavorite(story)}>
                Add to Favorites
              </button>
              <p>{story.desc}</p>
            </Container>
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default Read;
