import React, { Component } from 'react';

class NavBar extends Component{

    render(){
        return (
            <nav id = "nav-bar" className="navbar navbar-expand-lg navbar-dark bg-dark navbar-default fixed-top">
              <a className="navbar-brand text-light font-weight-bolder" href="/">Brand</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <div className="mr-auto"></div>
                <ul className="navbar-nav text-right">
                  <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="/summary">Dashboard</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">Concept</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">Sign Up</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">Sign In</a>
                  </li>
                </ul>
              </div>
            </nav>
        )
    }

};

export default NavBar;