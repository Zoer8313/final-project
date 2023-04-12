import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const Read = () => {
  const [stories, setStories] = useState([]);

  const ENDPOINT = "https://6436fdc13e4d2b4a12e0fa9d.mockapi.io/stories";

  useEffect(() => {
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(data => setStories(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h2>Read</h2>
      <Card>
        {stories.map(story => (
          <div key = {story.id} className = "display-stories">
            <h3>{story.title}</h3>
            <p>{story.author}</p>
            <Button>Read Me!</Button>
          </div>
        ))}
      </Card>
      
    </>
  );
};

export default Read;