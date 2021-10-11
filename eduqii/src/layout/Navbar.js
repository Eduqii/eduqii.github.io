import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <link className="navbar-brand" to="/home">Edu<span style={{color: "red"}}>qii</span></link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></link>
            </li>
            <li className="nav-item">
              <link className="nav-link" to="/discuss">Discuss</link>
            </li>
            <li className="nav-item">
              <link className="nav-link disabled" to="/new" tabindex="-1" aria-disabled="true">What's New!</link>
            </li>
          </ul>
          <form className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      </header>
    )
}

export default Navbar