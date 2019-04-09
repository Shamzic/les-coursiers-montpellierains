import React from 'react'
// import './css/NavBar.css'

function NavBar() {
  return (
    <div>
      <nav>
        <div class="nav-wrapper black">
          <a href="#" class="brand-logo center red">Logo</a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a href="sass.html">Commander</a></li>
            <li><a href="badges.html">Nous contacter</a></li>
            <li><a href="collapsible.html">Nos coursiers</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
