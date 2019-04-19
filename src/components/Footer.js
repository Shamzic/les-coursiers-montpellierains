/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/Footer.css'

function Footer() {
  return (
    <footer className="page-footer grey darken-3">
      <div className="container">
      <div className="row">
        <div className="col s12 l6">
          <h5>About Me</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe cumque in inventore culpa suscipit laudantium fuga aperiam omnis rerum consequatur, laborum earum necessitatibus eum hic adipisci quidem, optio magnam cum!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe cumque in inventore culpa suscipit laudantium fuga aperiam omnis rerum consequatur, laborum earum necessitatibus eum hic adipisci quidem, optio magnam cum!</p>
        </div>
        <div className="col s12 l4 offset-l2">
          <h5>Nous sommes partout</h5>
          <ul>
            <li>
              <a href="https://www.instagram.com/coursiersmtp/" target="_blank" className="grey-text text-lighten-3">Instagram</a>
            </li>              
            <li>
              <a href="https://www.facebook.com/Les-Coursiers-Montpelliérains-860009204340053"  target="_blank" className="grey-text text-lighten-3">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/CoursiersMtp"  target="_blank" className="grey-text text-lighten-3">Twitter</a>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div className="footer-copyright grey darken-4">
        <div className="container center-align">&copy; 2019 - Les Coursiers Montpelliérains</div>
      </div>
     
    </footer>
  )
}

export default Footer
