import React from "react";
import { Link } from "react-router-dom";
export const LoginPage = () => {
    return(
        (
            <div className="d-flex align-items-center justify-content-center vh-100">
              <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <div className="card-body">
                  <h3 className="card-title text-center mb-4">Login</h3>
                  <form>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <button type="submit" className="btn btn-primary mt-3">
                            Submit
                        </button>
                        <Link to="/register" className="mt-3">
                            Don't have an account? Create one now.
                        </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )
    )
}