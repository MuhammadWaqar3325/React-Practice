import React, { useState } from "react";
import { auth } from "../Config/Firebas";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import './SignUp.css'

function Register() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ShowHomePage, setShowHomePage] = useState(false);


  
  if (ShowHomePage) {
    return (
      <Navigate
        to={{
          pathname: "/",
        }}
      />
    );
  }

  

  

  const formSubmitHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in
        setEmail("")
        setPassword("")
     
        const user = userCredential.user;
        // alert(user)
        console.log(user)
          
        setShowHomePage(true)
        // ...
      })
      .catch((error) => {
        // alert(error.message);
        // console.log(error.message);
        // ..
           
      });
  };

  return (
    <>
      <div className="login-form">
        <div className="d-flex justify-content-center align-items-center min-vh-100 ">
          <div className="card loginCard">
            <div className="card-body">
              <h5 className="card-title text-uppercase text-center mt-4 fw-bold fs-3 opacity-50">
                CREATE AN ACCOUNT
              </h5>
              <form className="mt-5" onSubmit={formSubmitHandler}>
                <input
                  type="email"
                  className="form-control my-4"
                  placeholder="Your Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="form-control my-4"
                  placeholder="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck2"
                      required
                    />
                    <label className="form-check-label" for="invalidCheck2">
                      I agree all statements in Terms of service
                    </label>
                  </div>
                </div>

                <div className="mt-5 text-center ">
                  <button
                    type="submit"
                    className="btn btn-primary text-uppercase fw-bold"
                    style={{ backgroundColor: "#f57224", border: "none" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
