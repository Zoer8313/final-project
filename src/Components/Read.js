import React from "react";

const Read = ({ stories }) => {
  return (
    <div>
      {stories.map((story) => (
        <div key = {story.id}>
          <h3>{story.title}</h3>
          <p>{story.desc}</p>
        </div>
      ))}<br />
    </div>
  );
};

export default Read;
