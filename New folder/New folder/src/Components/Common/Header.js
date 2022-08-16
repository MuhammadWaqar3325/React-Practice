import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>


            <nav className="navbar navbar-expand-lg "style={{ background: "rgb(143, 139, 130)",height:""}} >
                <div className="container-fluid" >
                    <Link className="navbar-brand " to="/">
                        <span>


                        </span>
                    </Link>
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontFamily:"sans-serif",fontWeight:"bolder"}}>
                            <li className="nav-item">
                                <Link className="nav-link active text-white"  aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/admin">Admin</Link>
                            </li>
                        </ul>

                    </div>


                </div>
            </nav>


        </div>
    )
}

export default Header