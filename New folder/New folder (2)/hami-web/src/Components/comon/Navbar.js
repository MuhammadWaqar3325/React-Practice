import React from 'react'
import kkkk from '../../assets/kkkk.png'
import './Navbar.css'
function Navbar() {
  return (
    <>

      <nav className="
      navbar
       navbar-expand-lg
        navbar-light bg-light " 
        style={{}}>
        <a className="navbar-brand" href="#"><img width="40px" src={kkkk} alt="" />
          <span className="ham" style={{ color: 'yellowgreen', fontWeight: 'bold', fontFamily: '"Metal Mania", cursive', fontDisplay: 'initial', fontSize: '25px' }}>Hamid</span>
          <span className="ham" style={{ color: 'orange', fontWeight: 'bold', fontFamily: 'Georgia,', fontSize: '25px' }}>Birds&amp;Animal</span>
          <span className="ham" style={{ color: 'yellowgreen', fontWeight: 'bold', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Farm</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
          </ul>
          <span className="navbar-text">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link button button1">
                  <span style={{ color: 'yellowgreen', fontWeight: 'bold', fontFamily: 'Verdana, Geneva, Tahoma,-serif', fontDisplay: "initial", fontSize: '20px' }}> HOME</span> <span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link button button1" href="shop.html"> <span style={{ color: 'orange', fontWeight: 'bold', fontFamily: 'Georgia,', fontSize: '15px' }}>SHOP</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link button button1" href="index.html"><span style={{ color: 'orange', fontWeight: 'bold', fontFamily: 'Georgia,', fontSize: '15px' }}>ABOUT US</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link button button1" href="About us.html" target="_blank"><span style={{ color: 'orange', fontWeight: 'bold', fontFamily: 'Georgia,', fontSize: '15px' }}>CONTACT US</span></a>
              </li>
            </ul>
          </span>
        </div>
      </nav>

    </>
  )
}

export default Navbar