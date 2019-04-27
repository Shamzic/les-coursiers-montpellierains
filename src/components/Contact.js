/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component}  from 'react'
import '../css/ContactForm.css'
import axios from 'axios'

class Contact extends Component  {

  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

handleChange(event) {
  this.setState({ [event.target.name]: event.target.value });
}

async handleSubmit(event) {
  console.log("submit !");
  event.preventDefault();

  const {name, email, message} = this.state;

  const form = await axios.post('/api/form', {
  name,
  email,
  message
});



}

  render() {
    return(
        <div className="row" id="contacts">
          <div className="col s12 l5">
            <h2 className="indigo-text text-darken-4">Contactez-nous</h2>
            <p>Nous sommes disponibles à tout moment sur un grand nombre de réseaux sociaux. Nous ferons en sorte de vous répondre dans les minutes qui suivent votre demande.</p>
            <p>Nous pouvons également vous rencontrer. Pour cela, n'hésitez pas à proposer une date via le formulaire de contact! </p>
          </div>
          <div className="col s12 l6 offset-l1">
            <form>
              <div className="input-field">
                <i className="material-icons prefix">person</i>
              <input type="text" id="name" name="name" onChange={this.handleChange}/>
                <label htmlFor="name" >Nom, prénom</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">email</i>
              <input type="email" id="email" name="email" onChange={this.handleChange}/>
                <label htmlFor="email" >Votre email</label>
              </div>
              <div className="input-field">
              <i className="material-icons prefix">message</i>
            <textarea type="text" className="materialize-textarea" id="message" name="message" onChange={this.handleChange}/>
                <label htmlFor="message">Votre requête</label>
              </div>

              <div className="input-field">
              <i className="material-icons prefix">date_range</i>
                <input type="text" id="date" className="datepicker" />
                <label  htmlFor="datepicker" >Une disponibilité pour nous rencontrer *</label>
              </div>
              <div className="">
              * Optionnel
              </div>

              <div className="input-field">
                <h6>Sujet(s) de votre requête :</h6>
                <p>
                  <label>
                    <input type="checkbox" onChange={this.handleChange}/>
                    <span>A propos d'une commande</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" onChange={this.handleChange}/>
                    <span>A propos de la plateforme</span>
                  </label>
                </p>
                <p>
                <label>
                    <input type="checkbox" onChange={this.handleChange}/>
                    <span>Je suis coursier</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" onChange={this.handleChange}/>
                    <span>Je suis restaurateur</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" onChange={this.handleChange}/>
                    <span>Autre</span>
                  </label>
                </p>
              </div>
              <div className="input-field center">
                <button className="btn yellow-text black" onClick={this.handleSubmit}>Envoyer</button>
              </div>
            </form>
          </div>
        </div>
    )
  }
}

export default Contact
