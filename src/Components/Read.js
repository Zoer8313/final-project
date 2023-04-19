import React from "react";
import { Container } from "react-bootstrap";

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
        {stories.map((story) => {
          let key = performance.now(); /*looooooooove it*/
          return (
            <div key={key}>
              <Container key={key} className="each-story-container scroll">
                <h3>
                  <u>{story.title}</u>
                </h3>
                <button
                  className="btn btn-dark"
                  onClick={() => addFavorite(story)}
                >
                  Add to Favorites
                </button>
                <p>{story.desc}</p>
              </Container>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Read;
