import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Asse/logo.png'
export default function Navbar() {
    return (
        <>



<nav className="sticky-top">
      <div className="p-3 text-center border-bottom "style={{background:"rgb(99, 81, 206)"}}>
        <div className="container">
          <div className="row">
            
            <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
              <Link to="/home" className="ms-md-2">
                <img src={logo} height={35} alt="draza Logo" />
              </Link>
            </div>
            <div className="col-md-4">
              <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                <input
                  autoComplete="off"
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                />
                <span
                  className="input-group-text border-0 d-none d-lg-flex text-white "
                  style={{ backgroundColor: "#f57224" }}
                >
                  <i class="bi bi-search"></i>
                </span>
              </form>
            </div>
            <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
              <div className="d-flex">
                {/* Cart */}
                <a className="text-reset me-3" href="#">
                  <span>
                    <i class="bi bi-cart-plus-fill fs-3"></i>
                  </span>
                  <span class="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </a>
                {/* Notification */}

                <div>
                  
                  <Link to="login/">
                  <button
                    className="btn text-white fw-bold"  
                    style={{ backgroundColor: "#f57224", border: "none", }}>
                      Login
                  </button>
                      </Link> 

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>













            {/* <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand " to="/">
                        <span>
                        <img src={logo} height={35} alt="draza Logo" />
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link ">Disabled</a>
                            </li>
                        </ul>

                    </div>

                    
                </div>
            </nav> */}


        </>
    )
}
