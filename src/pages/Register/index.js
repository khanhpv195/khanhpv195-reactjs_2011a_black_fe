import React from 'react';

function Register(props) {
  return (
    <div className="c-app flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mx-4">
              <div className="card-body p-4">
                <h1>Register</h1>
                <p className="text-muted">Create your account</p>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"><span className="input-group-text">
                    <svg className="c-icon">
                      <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-user" />
                    </svg></span></div>
                  <input className="form-control" type="text" placeholder="Username" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"><span className="input-group-text">
                    <svg className="c-icon">
                      <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-envelope-open" />
                    </svg></span></div>
                  <input className="form-control" type="text" placeholder="Email" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"><span className="input-group-text">
                    <svg className="c-icon">
                      <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked" />
                    </svg></span></div>
                  <input className="form-control" type="password" placeholder="Password" />
                </div>
                <div className="input-group mb-4">
                  <div className="input-group-prepend"><span className="input-group-text">
                    <svg className="c-icon">
                      <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked" />
                    </svg></span></div>
                  <input className="form-control" type="password" placeholder="Repeat password" />
                </div>
                <button className="btn btn-block btn-success" type="button">Create Account</button>
              </div>
              <div className="card-footer p-4">
                <div className="row">
                  <div className="col-6">
                    <button className="btn btn-block btn-facebook" type="button"><span>facebook</span></button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-block btn-twitter" type="button"><span>twitter</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Register;