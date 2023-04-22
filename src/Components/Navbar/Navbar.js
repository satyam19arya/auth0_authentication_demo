import React from 'react';
import './Navbar.css';
var Diamond = require('./logo.png');


function Navbar() {
    return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navigation-wrap">
        <a className="navbar-brand" href="/"><img class="logo" src={Diamond} alt="" /></a>
            <div className="container">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li> 
                  <li className="nav-item">
                    <a className="nav-link" href="/" target="__blank">Take a Survey</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/" target="__blank">Discussion Forum</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">FAQ</a>
                  </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn main-btn search-btn" type="submit">Search</button>
                </form>     
              </div>
            </div>
          </nav>
      </header>
    </div>
    );
  }

export default Navbar;