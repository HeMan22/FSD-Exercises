import React from "react";

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <h5 className="text-center mb-4">Enter Credentials</h5>
        <div className="col-md-4 offset md-4 ">
          <input
            type="tet"
            className="form-control mb-3"
            placeholder="Username"
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
          />
          <button className="btn btn-success">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
