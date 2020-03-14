/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/NavBar.css'
import logo from '../img/LOGO_LCM_FAVICON3_REDUCED.png'

function NavBar() {
  return (
    <div>

      <header>
        <nav className="wrapper white lighten-5 ">
          <div className="navbar">
            <a href="#" className="sidenav-trigger" data-target="mobile-links">
              <i className="material-icons black-text text-darken-2 menu-icon" id="menu-icon">menu</i>
            </a>
            <a href="https://coursiers-montpellier.fr/" id="title" className="brand-logo black-text text-darken-2 title">
              <img src={logo} alt="" id="logoTitle"></img>
              <span className="lcmTitle" ><b>L</b>es <b>C</b>oursiers <b>M</b>ontpelliérains</span>
            </a>
            <ul className="onglets right hide-on-med-and-down black-text text-darken-2">
              <li><a href="#services" className="black-text text-darken-2">Commander un coursier</a></li>
              <li><a href="#photos" className="black-text text-darken-2">Photos</a></li>
              <li><a href="#presse" className="black-text text-darken-2">Presse</a></li>
              <li><a href="#soutien" className="black-text text-darken-2">Soutien</a></li>
              <li><a href="#contacts" className="black-text text-darken-2">Contacts</a></li>
              <li><a href="https://www.instagram.com/coursiersmtp/" target="_blank" rel="noopener noreferrer" className="tooltipped btn-floating btn-small black darken-4" data-tooltip="Instagram">
                <i className="fab fa-instagram"></i>
              </a></li>
              <li><a href="https://www.facebook.com/Les-Coursiers-Montpelliérains-860009204340053" target="_blank" rel="noopener noreferrer" className="tooltipped btn-floating btn-small black darken-4" data-tooltip="Facebook">
                <i className="fab fa-facebook"></i>
              </a></li>
              <li><a href="https://twitter.com/CoursiersMtp" target="_blank" rel="noopener noreferrer" className="tooltipped btn-floating btn-small black darken-4" data-tooltip="Twitter">
                <i className="fab fa-twitter"></i>
              </a></li>
            </ul>
          </div>
            <ul className="sidenav" id="mobile-links">
              <li><a href="#photos">Photos</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#presse">Presse</a></li>
              <li><a href="#soutien">Soutien</a></li>
              <li><a href="#contacts">Contacts</a></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
