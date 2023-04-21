import React from "react";
import LoginForm from "./LoginForm";

export default function Home() {
  return (
    <>
      <div className="header">
        <h1>
          <b>Home</b>
        </h1>
      </div>
      <p />

      <h4>
        <p>
          <b>LOGIN</b>
        </p>
      </h4>
      <LoginForm />
      <br />

      <div className="header">
        <h4>You should also be forewarned...</h4>
      </div>
      <p />

      <div className="home-warning header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCujHKNnZOPlEgb6MHGQoAOpBrRYS3A1674w&usqp=CAU"
          alt="Hands holding up a sign"
          width = "800"
        ></img>
      </div>
      <p />
    </>
  );
}
