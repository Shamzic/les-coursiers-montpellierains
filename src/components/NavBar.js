import React from 'react'
import '../css/NavBar.css'

function NavBar() {
  return (
    <div>
      <nav className="nav-wrapper indigo">
      <div className="container">
        <a href="#" class="brand-logo">Les Coursiers MTP</a>
        <a href="#" class="sidenav-trigger" data-target="mobile-links">
          <i className="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Login</a></li>
        </ul>

        <ul className="sidenav" id="mobile-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

      </div>
      </nav>
    </div>
  )
}

export default NavBar
