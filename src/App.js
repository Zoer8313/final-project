import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Read from "./Components/Read";
import Create from "./Components/Create";
import NewMember from "./Components/NewMember";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";

export default function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [story, setStory] = useState([]);
  //console.log(story)

  return (
    <>
    <Container>
      <div>
        <ButtonGroup>{"* * *"}
          <Button variant = "outline-dark">
            <Link to="/">Home</Link>
          </Button>{"* * *"}
          <Button variant = "outline-dark">
            <Link to="/read">Read</Link>
          </Button>{"* * *"}
          <Button variant = "outline-dark">
            <Link to="/create">Create</Link>
          </Button>{"* * *"}
          <Button variant = "outline-dark">
            <Link to="/new-member">New Member</Link>
          </Button>{"* * *"}
        </ButtonGroup>
      </div><br />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read stories = {story} />} />
        <Route
          path="/create"
          element={
            <Create
              title={title}
              setTitle={setTitle}
              desc={desc}
              setDesc={setDesc}
              story={story}
              setStory={setStory}
            />
          }
        />
        <Route path = "/new-member" element = {<NewMember />}  />
      </Routes>
      </Container>


    </>
  );
}
