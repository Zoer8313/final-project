import React from 'react'

export default function NewMember() {
  return (
    <>
    <div>New Member</div><br />
    <div className = "container">
    <div className = "card">
            <div className = "card-header">
            <h2><p><b>Sign Up For A Membership Today!</b></p></h2>
            <p>Gain access to exclusive content and tons of offers!</p>
            </div><br/>

            <div className = "card-body">
            <form>
            <div className="mb-3">
              <label htmlFor="email-address" className="form-label"><b>Email address</b></label>
              <input type="email" className="form-control" id="email-address"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email-password" className="form-label"><b>Password</b></label>
              <input type="password" className="form-control" id="email-password"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email-password-" className="form-label"><b>Re-Enter Password</b></label>
                <input type="password" className="form-control" id="email-password-2"/>
              </div>
            <button type="submit" className="btn btn-dark"><b>Submit</b></button>
          </form>
          </div>

        </div>
    </div>
    </>
  )
}
