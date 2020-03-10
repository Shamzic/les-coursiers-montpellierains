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
    console.log("show")
    if(this.state.contactHidden === "hidden") {
      console.log("mask")
      this.setState({contactHidden: ""})
      this.setState({contact: "Masquer les contacts"})
    }
    else {
      console.log("unmask")
      this.setState({contactHidden: "hidden"})
      this.setState({contact: "Contact immédiat"})
    }
  }


  render() {
  return (
    <div className="container content center">
      <h5 id="subtitle"> "Première coopérative Montpelliéraine de livraison à vélo"</h5>
      <div class="row">
        <div class="col  s12 m12 l6">
          <div class="row">
            <div class="col s8 offset-s2">
              <a href="https://coursiersmontpellier.coopcycle.org" className="col s12 btn-large waves-effect waves-light cmd-button repas"><span className="text-repas">LIVRAISON DE REPAS</span><i className="btn material-icons right pulse">send</i> </a>
            </div>
          </div>
          <p> Faites vous livrer votre repas chaque jour entre <b>11h30</b> et <b>14h30</b> et entre <b>18h</b> et <b>23h</b> via notre plateforme <b><a href="https://coursiersmontpellier.coopcycle.org">coopcycle</a></b> disponible en web et sur mobile.</p>
          <br/>
          <div className="col s6 offset-s3 btn-small waves-effect waves-light cmd-button web-button"><a href="https://coursiersmontpellier.coopcycle.org">Plateforme web</a></div>
          <div className="col s6 offset-s3 btn-small waves-effect waves-light cmd-button app-button"><a href="https://play.google.com/store/apps/details?id=fr.coopcycle">Application ANDROID</a></div>
        </div>
        <div class="col  s12 m12 l6">
          <div class="row">
            <div class="col s8 offset-s2">
              <a href="https://coursiersmontpellier.coopcycle.org" className="col s12 btn-large waves-effect waves-light cmd-button colis"><span className="text-colis">COURSES PLIS, COLIS</span><i className="btn material-icons right pulse">send</i> </a>
            </div>
          </div>
          <p> Livraison à <b>toute heure de la journée</b> de plis, colis, réassorts et tout autre type de livraison possible en vélo cargo ou vélo classique via un <b>formulaire en ligne</b> ou par <b>contact immédiat</b> les boutons ci-dessous.</p>
          <div className="col s6 offset-s3 btn-small waves-effect waves-light cmd-button" onClick={this.contactShow.bind(this)}>{this.state.contact}</div>
          <div  className="col s6 offset-s3" hidden={this.state.contactHidden} >
              <span className="contact-numbers">
                <p><b>Paul Ferreira - 06.30.72.94.41</b></p>
                <p><b>Yannick Plan - 07.84.17.99.89</b></p>
                <p><b>Vincent Robillard - 06.37.73.68.43</b></p>
              </span>
          </div>
          <div className="col s6 offset-s3 btn-small waves-effect waves-light cmd-button" onClick={this.formShow.bind(this)}>{this.state.fomulaire}</div>
        </div>
      </div>
      
      <iframe hidden={this.state.formHidden} title="iframe" id="iframe" src="https://coursiersmontpellier.coopcycle.org/fr/embed/delivery/start" width="100%" height="1450" frameborder="0"></iframe>
  </div>
  )
  }
}

export default Container
