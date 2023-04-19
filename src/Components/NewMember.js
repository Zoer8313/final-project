import React from "react";
import { Container } from "react-bootstrap";

export default function NewMember() {
  return (
    <>
      <div className="header">
        <h1>
          <b>New Member</b>
        </h1>
      </div>
      <p />
      <Container>
        <div className="new-member-card">
          <div className="card-header">
            <h2>
              <p>
                <b>
                  <u>Become a New Member Today!</u>
                </b>
              </p>
            </h2>
            <p>Gain access to exclusive content and tons of offers!</p>
          </div>
          <br />

          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="email-address" className="form-label">
                  <b>Email address</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email-address"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email-password" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="email-password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email-password-" className="form-label">
                  <b>Re-Enter Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="email-password-2"
                  placeholder="Re-enter Password"
                />
              </div>
              <button type="submit" className="btn btn-dark">
                <b>Submit</b>
              </button>
            </form>
          </div>
        </div>
      </Container>
      <p />
    </>
  );
}
