import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



export default function Login() {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const auth = getAuth();
  

  
    const addUserData = async (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

      };
  }

  return (

    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="images/undraw_remotely_2j6y.svg" alt="Image" className="img-fluid" />
          </div>
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  <h3>Sign In</h3>
                  <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                </div>
                <form onSubmit={addUserData} action="#" method="post">
                  <div className="form-group first">
                    <label htmlFor="username">Username</label>
                    <input name="email" value={email} type="email" onChange={(e) => setemail(e.target.value)} className="form-control" id="username" />
                  </div>
                  <div className="form-group last mb-4">
                    <label htmlFor="password">Password</label>
                    <input name="password" value={password} type="password"
                      onChange={(e) => setpassword(e.target.value)}
                      className="form-control" id="password" />
                  </div>
                  <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                      <input type="checkbox" defaultChecked="checked" />
                      <div className="control__indicator" />
                    </label>
                    <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
                  </div>
                  <input type="submit" defaultValue="Log In" className="btn btn-block btn-primary" />
                  <span className="d-block text-left my-4 text-muted">— or login with —</span>
                  <div className="social-login">
                    <a href="#" className="facebook">
                      <span className="icon-facebook mr-3" />
                    </a>
                    <a href="#" className="twitter">
                      <span className="icon-twitter mr-3" />
                    </a>
                    <a href="#" className="google">
                      <span className="icon-google mr-3" />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
