/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/Footer.css'

function Footer() {
  return (
    <footer className="page-footer white-text black text-darken-4 lighten-2">
      <div className="container" id="text-footer">
        <div className="row ">
          <div className="col s12 l7">
            <h5  className="">A propos</h5>
            <p id="apropos">Association de livreurs à vélo, nous vous proposons un service de livraison de repas de qualité par des coursiers aguéris. La plateforme ouvre à partir du premier mai 2019 dans la ville de Montpellier et sa périphérie.
            Nous vous attendons au tournant pour le début de nos aventures !
            </p>
            </div>
            <div className="col s12 l4 offset-l1">
              <h5  className="">Nous sommes partout </h5>
              <ul>
                <li>
                  <a href="https://www.instagram.com/coursiersmtp/" target="_blank" rel="noopener noreferrer" className="white-text"><i className="material-icons">arrow_forward</i><b> Instagram</b></a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Les-Coursiers-Montpelliérains-860009204340053"  target="_blank" rel="noopener noreferrer" className="white-text"><i className="material-icons">arrow_forward</i><b> Facebook</b></a>
                </li>
                <li>
                  <a href="https://twitter.com/CoursiersMtp"  target="_blank" rel="noopener noreferrer" className="white-text"><i className="material-icons">arrow_forward</i><b> Twitter</b></a>
                </li>
              </ul>
            </div>
            </div>
        </div>
        <div className="footer-copyright black yellow-text darken-8">
        <div className="container center-align">&copy; 2019 - Les Coursiers Montpelliérains</div>
      </div>
    </footer>
  )
}

export default Footer
