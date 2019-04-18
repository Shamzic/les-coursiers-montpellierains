/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/ContactForm.css'

function ContactForm() {
  return (
    <section className="section container" id="ccontact">
      <div className="row">
        <div className="col s12 l5">
          <h2 className="indigo-text text-darken-4">Contactez-nous</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe cumque in inventore culpa suscipit laudantium fuga aperiam omnis rerum consequatur, laborum earum necessitatibus eum hic adipisci quidem, optio magnam cum!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe cumque in inventore culpa suscipit laudantium fuga aperiam omnis rerum consequatur, laborum earum necessitatibus eum hic adipisci quidem, optio magnam cum!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe cumque in inventore culpa suscipit laudantium fuga aperiam omnis rerum consequatur, laborum earum necessitatibus eum hic adipisci quidem, optio magnam cum!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe cumque in inventore culpa suscipit laudantium fuga aperiam omnis rerum consequatur, laborum earum necessitatibus eum hic adipisci quidem, optio magnam cum!</p>
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
              <label for="message">Votre date si vous souhaitez nous joindre</label>
            </div>

            <div className="input-field">
              <h6>Sujet de votre requête :</h6>
              <p>
                <label>
                  <input type="checkbox"/>
                  <span>Au sujet d'une commande</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox"/>
                  <span>Au sujet de la plateforme</span>
                </label>
              </p>
              <p>
              <label>                
                  <input type="checkbox"/>
                  <span>Je suis coursier et souhaite vous rejoindre</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox"/>
                  <span>Je suis restaurateur et souhaite vous rejoindre</span>
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
      
     
    </section>
  )
}

export default ContactForm
