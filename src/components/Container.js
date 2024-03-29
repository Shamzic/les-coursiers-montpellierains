import React from 'react'
import '../css/Container.css'
// import { ReactComponent } from '*.svg';


class Container extends React.Component {

  state = {
    formHidden: "hidden",
    contactHidden: "hidden",
    fomulaire: "Formulaire de course unique",
    contact: "Contact immédiat"
  }

  formShow() {
    if(this.state.formHidden === "hidden") {
      this.setState({formHidden: ""})
      this.setState({fomulaire: "Masquer le formulaire"})
    }
    else {
      this.setState({formHidden: "hidden"})
      this.setState({fomulaire: "Formulaire de course unique"})
    }
  }

  contactShow() {
    if(this.state.contactHidden === "hidden") {
      this.setState({contactHidden: ""})
      this.setState({contact: "Masquer les contacts"})
    }
    else {
      this.setState({contactHidden: "hidden"})
      this.setState({contact: "Contact immédiat"})
    }
  }


  render() {
  return (
    <div>
    <div className="container content center">
      <h5 id="subtitle"> "Première coopérative Montpelliéraine de livraison à vélo"</h5>
      <div class="row">
        <div class="col  s12 m12 l5">
          <div class="row">
            <div class="col s8 offset-s2">
              <a href="https://coursiersmontpellier.coopcycle.org" className="col s12 btn-large waves-effect waves-light cmd-button repas"><span className="text-repas">LIVRAISON DE REPAS</span><i className="btn material-icons right pulse">send</i> </a>
            </div>
          </div>
          <p>Faites-vous livrer votre repas entre <b>11h30</b> et <b>14h</b> du lundi au samedi et entre <b>18h30</b> et <b>22h</b> du lundi au dimanche via notre plateforme <b>coopcycle</b> disponible sur notre <a href="https://coursiersmontpellier.coopcycle.org">site web</a>, sur <a href="https://play.google.com/store/apps/details?id=fr.coopcycle">android</a> et sur <a href="https://apps.apple.com/us/app/coopcycle/id1324884530?l=fr">iphone</a>.</p>
          <br/>
        </div>
        <div class="col  s12 m12 l5 offset-l1">
          <div class="row">
            <div class="col s8 offset-s2">
              <a href="#commander_un_coursier">
                <div className="col s12 btn-large waves-effect waves-light cmd-button colis" onClick={this.formShow.bind(this)}>
                  <span className="text-colis"> COURSES, PLIS, COLIS</span>
                  <i className="btn material-icons right pulse">send</i> 
                </div>
              </a>
            </div>
          </div>
          <p>Livraison à <b>toute heure de la journée</b> de plis, colis, réassorts et tout autre type de livraison possible en vélo cargo ou vélo classique via un <b>formulaire de course unique </b> ou par <b>contact immédiat</b>.</p>
        </div>
      </div>

      <div class="row">
      <div className="col s3 offset-s4 btn-small waves-effect waves-light cmd-button" onClick={this.contactShow.bind(this)}>{this.state.contact}</div>
        <div  className="col s6 offset-s3" hidden={this.state.contactHidden}>
            <span className="contact-numbers">
              <p><b>Yannick Plan - 07.84.17.99.89</b></p>
              <p><b>Nelly kouadio - 06.72.55.19.61</b></p>
            </span>
        </div>
    </div>
    </div>
    </div>
  )
  }
}

export default Container
