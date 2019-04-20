/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/ContactForm.css'

function ContactForm() {
  return (
    <form action="/my-handling-form-page" method="post" className="section container scrollspy" id="contacts">
      <div className="row">
        <div className="col s12 l5">
          <h2 className="indigo-text text-darken-4">Contactez-nous</h2>
          <p>Nous sommes disponibles à tout moment sur un grand nombre de réseaux sociaux. Nous ferons en sorte de vous répondre dans les minutes qui suivent votre demande.</p>
          <p>Nous pouvons également vous rencontrer. Pour cela, n'hésitez pas à proposer une date via le formulaire de contact! </p>
        </div>
        <div className="col s12 l6 offset-l1">
          <from action="">
            <div className="input-field">
              <i className="material-icons prefix">email</i>
              <input type="email" id="email" />
              <label for="email">Votre email</label>
            </div>
            <div className="input-field">
            <i className="material-icons prefix">message</i>
              <textarea className="materialize-textarea" id="message"/>
              <label for="message">Votre requête</label>
            </div>

            <div className="input-field">
            <i className="material-icons prefix">date_range</i>
              <input type="text" id="date" className="datepicker"/>
              <label for="message">Une disponibilité pour nous rencontrer</label>
            </div>

            <div className="input-field">
              <h6>Sujet(s) de votre requête :</h6>
              <p>
                <label>
                  <input type="checkbox"/>
                  <span>A propos d'une commande</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox"/>
                  <span>A propos de la plateforme</span>
                </label>
              </p>
              <p>
              <label>
                  <input type="checkbox"/>
                  <span>Je suis coursier</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox"/>
                  <span>Je suis restaurateur</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox"/>
                  <span>Autre</span>
                </label>
              </p>
            </div>
            <div className="input-field center">
              <button className="btn yellow-text black">Envoyer</button>
            </div>
          </from>
        </div>
      </div>


    </form>
  )
}

export default ContactForm
