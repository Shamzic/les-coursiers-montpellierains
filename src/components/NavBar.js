/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/NavBar.css'

function NavBar() {
  return (
    <div>

      <header>
        <nav className="wrapper white lighten-5 ">
          <div className="container">
            <a href="#" className="sidenav-trigger" data-target="mobile-links">
              <i className="material-icons black-text text-darken-2 menu-icon">menu</i>
            </a>
            <a href="" className="brand-logo black-text text-darken-2 title"><b>L</b>es <b>C</b>oursiers <b>M</b>ontpelliérains</a>
            <ul className="right hide-on-med-and-down black-text text-darken-2">
              <li><a href="" className="black-text text-darken-2">Photos</a></li>
              <li><a href="" className="black-text text-darken-2">Services</a></li>
              <li><a href="" className="black-text text-darken-2">Contacts</a></li>
            </ul>

            <ul className="sidenav" id="mobile-links">
              <li><a href="">Photos</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Contacts</a></li>
            </ul>
            
          </div>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
