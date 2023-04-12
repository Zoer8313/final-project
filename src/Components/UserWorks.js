import React from "react";
import { useState } from "react";
import EditModal from "./EditModal";
import Create from "./Create";

export default function UserWorks({ element, story, setStory, desc, setDesc }) {
  const [editId, setEditId] = useState("");

  const deleteHandler = (id) => {
    //console.log(id)
    //console.log(story)
    const newStory = story.filter((element) => {
      if (element.id !== id) {
        return element;
      }
    });
    setStory(newStory);
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">{element.title}</h5>
            <div className="card-body">{element.desc}</div>
            <a href="#">
              <EditModal
                element={element}
                story={story}
                setStory={setStory}
                desc={desc}
                setDesc={setDesc}
                editId={editId}
                setEditId={setEditId}
              />
            </a>
            <a href="#" className="btn btn-dark">
              Share
            </a>{" "}
            <a
              href="#"
              className="btn btn-danger"
              onClick={() => {
                deleteHandler(element.id);
              }}
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
