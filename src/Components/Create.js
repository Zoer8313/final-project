import React from "react";
import UserWorks from "./UserWorks";

export default function Create({
  title,
  setTitle,
  desc,
  setDesc,
  story,
  setStory,
  setEditId
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
      <div className = "header"><h1><b>Create</b></h1></div><br />
      <br />

      <h4><u>Write a New Story!</u></h4>

      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label"><h4>
              Title
            </h4></label>
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
            <label htmlFor="exampleText" className="form-label"><h4>
              Write Your Story!
            </h4></label>
            <textarea
              name="desc"
              id="desc"
              rows="3"
              className="form-control"
              placeholder="Once upon a time..."
              value={desc}
              onChange={inputHandler}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-dark"
            onClick={addStoryHandler}
          >
            Save & Share
          </button>{" "}
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </div>
      <br />

      <div>
      <h4><u>Your Saved Projects</u></h4>
        {story.map((element) => {
          return <UserWorks element = {element} key = {element.id} story = {story} setStory = {setStory} setEditId = {setEditId}  />;
        })}
      </div>
      
    </>
  );
}
