import React from "react";
import UserWorks from "./UserWorks";

export default function Create({
  title,
  setTitle,
  desc,
  setDesc,
  story,
  setStory,
  setEditId, 
  element
}) {
  let counter = 0;

  while (counter < story.length) {
    //console.log("I am counter" + counter);
    counter++; //generate unique id
  }

  const inputHandler = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else {
      setDesc(e.target.value);
    }
    //console.log(title);
    //console.log(desc);
  };

  const addStoryHandler = (e) => {
    e.preventDefault();
    if(title !== "" && desc !== "") {
       setStory((story) => {
      return [
        ...story,
        {
          title: title,
          desc: desc,
          id: counter,
        },
      ];
    })
  } else {
    console.log("Cannot accept blank input.");
  }
   
    setTitle("");
    setDesc("");
  };

  return (
    <>
      <div>Create</div>
      <br />

      <h4>Write a New Story!</h4>

      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter Your Title"
              value={title}
              onChange={inputHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleText" className="form-label">
              Write Your Story!
            </label>
            <textarea
              name="desc"
              id="desc"
              rows="3"
              className="form-control"
              value={desc}
              onChange={inputHandler}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-dark"
            onClick={addStoryHandler}
          >
            Save
          </button>{" "}
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </div>
      <br />

      <div>
      <h4>Your Saved Projects</h4>
        {story.map((element) => {
          return <UserWorks element = {element} key = {element.id} story = {story} setStory = {setStory} setEditId = {setEditId}  />;
        })}
      </div>
      <br />
    </>
  );
}
