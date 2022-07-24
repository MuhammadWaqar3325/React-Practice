
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../../context/AuthContext'


function Navbar() {
  const { state, dispatch } = useContext(AuthContext)

  console.log(state)

  const { isAuthenticated } = state

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
    alert("logout")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>


            </ul>
            <form className="d-flex">
              {!isAuthenticated
                ? <Link className="btn btn-outline-success" to="/login" >login</Link>
                :
                <>
                  <Link className="btn btn-outline-success" to="/dashboard" >Dashboard</Link>
                  <button className='btn btn-danger bt-sm me-2' onClick={handleLogout}>Logout</button>
                </>

              }
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar