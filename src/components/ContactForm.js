/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from 'react'
import '../css/ContactForm.css'


function ContactForm()  {
  return (
    <section className="section container scrollspy" id="contacts">
      <div className="row">
        <div className="col s12 l5">
          <h2 className="black-text text-darken-4">Contactez-nous</h2>
          <p>Nous sommes disponibles à tout moment sur un grand nombre de réseaux sociaux. Nous ferons en sorte de vous répondre dans les minutes qui suivent votre demande.</p>
        <p>Nous pouvons également vous rencontrer. Veuillez à bien nous indiquer vos disponibilités!</p>
        </div>
        <div className="col s12 l6 offset-l1">
          <a href="mailto:contact@coursiers-montpellier.fr">
          <div className="btn yellow-text black waves-effect waves-light" id="emailButton">
            <i className="material-icons prefix emailIcon">email</i>
                  contact@coursiers-montpellier.fr
          </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
