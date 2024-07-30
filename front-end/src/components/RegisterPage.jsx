import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {registerUser } from "../utils/RegisterUtils";

export const RegisterPage = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleRegisterUser = () => {
      registerUser(firstName, lastName, email, password)
    }
    return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div
        className="card shadow-sm p-4"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Register</h3>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter first name"
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter last name"
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="d-flex flex-column align-items-center">
              <button type="submit" className="btn btn-primary mt-3" onClick={handleRegisterUser}>
                Submit
              </button>
              <Link to="/login" className="mt-3">
                Already have an account? Sign in now.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
