import React, { useState } from 'react'
import './login.css'
import { Link } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../Config/Firebas";
import { toast } from "react-toastify";

function Login() {



  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");






  const formSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // alert(user.uid);
        setEmail("");
        setPassword("");
        toast.success("User has Logged in !", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,     
          progress: undefined,

        });
        // ...
      })
      .catch((error) => {
        // alert(error.message);

      });
  };




  // const formSubmit = (e)=>{
  //   e.preventDefault();

  //   signInWithEmailAndPassword(auth, Email,Password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     alert(user.uid);
  //     setEmail("")
  //     setPassword("")
  //       toast.success("User has been Logged in!", {
  //         position: "bottom-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     // ...
  //   })
  //   .catch((error) => {
  //     // alert(error.message);
  //           toast.error(error.message, {
  //             position: "bottom-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //           });
  //   });



  return (
    <div className="login-form">
      <div className="d-flex justify-content-center align-items-center min-vh-100 ">
        <div className="card loginCard">
          <div className="card-body">
            <h5 className="card-title text-uppercase text-center mt-4 fw-bold fs-3">
              Login
            </h5>
            <form onClick={formSubmit} className="mt-5 text-center" >
              <input
                type="e-mail"
                className="form-control inputField "
                placeholder="Enter Your E-mail"
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
              <div>
                <a href="#">Forget Password</a>
              </div>
              <div className="mt-5">
                <button className="btn text-uppercase loginBtn text-white fw-bold">
                  Login
                </button>
              </div>
              <div className="mt-5 mb-5 d-flex justify-content-evenly">
                {/* <button className="btn btn-primary">
              </button> */}
                {/* <ImFacebook className="fs-5" /> */}

                {/* <button
                className="btn btn-primary"
                style={{ backgroundColor: "#dd4b39", border: "none" }}
              >
              </button> */}
                {/* <AiOutlineGoogle className="fs-5" /> */}

                {/* <button
                className="btn btn-primary"
                style={{ backgroundColor: "#1da1f2", border: "none" }}
              >
              </button> */}
                {/* <BsTwitter className="fs-5" /> */}

              </div>
              <div>
                <Link to="/signup">SIGN UP</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login