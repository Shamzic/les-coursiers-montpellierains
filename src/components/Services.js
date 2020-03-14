/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/Services.css'

class Services extends React.Component {


  state = {
    formHidden: "",
    fomulaire: "Masquer le formulaire"
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
  render() {
  return (
    <div>
    <section className="container section scrollspy" id="commander_un_coursier">
      {/*<div className="row">
        <div className="col s12 l5">
          <h4 className="black-text text-dark-4">Ce qu'on vous propose...</h4>
        <p>Le contexte actuel de la livraison de repas est menacé par l'exploitation des indépendants. Les livreurs se retrouvent contrôlés par des algorithmes, peuvent être mis à la porte en un clic et la qualité des services proposés par les géants se détériore au fil des jours pour prioriser la quantité. Nous souhaitons nous démarquer par notre qualité de service irréprochable et notre éthique locale.</p>
        </div>
        <div className="col s12 l6 offset-l1">
          <ul className="tabs">
            <li className="tab col s6">
              <a href="#photography" className="black-text text-darken-4">Livraison de repas</a>
            </li>
            <li className="tab col s6">
              <a href="#editing" className="black-text text-darken-4">Livraison de colis</a>
            </li>
          </ul>
          <div className="col s12" id="photography">
            <h6 className=" green-text text-darken-4"> <i className="material-icons">check</i> DISPONIBLE</h6>
            <p>Depuis le premier mai 2019, vous pouvez <a href="https://coursiersmontpellier.coopcycle.org/fr/">commander</a> votre repas dans l'un de nos restaurants partenaires !*</p>
            <div className="asterisk"><p>*Pour les restaurateurs souhaitant nous contacter par mail, voir l'onglet contact ci-dessous. Vous pouvez également nous joindre au 07.84.17.99.89.</p></div>
          </div>
          <div className="col s12" id="editing">
              <h6 className=" green-text text-darken-4"> <i className="material-icons">check</i> DISPONIBLE</h6>
              <p>Entreprises ou particuliers, nous livrons dès à présent tous types de colis avec des vélos cargos sur la ville de Montpellier, n'hésitez pas à nous contacter.*</p>
              <div className="asterisk"><p>*Pour nous contacter par mail, voir l'onglet contact ci-dessous. Vous pouvez également nous joindre au 07.84.17.99.89.</p></div>
          </div>
        </div>
      </div>*/}
      <div className="formTitle">
        <h4 className="title">[ Formulaire de course unique ] </h4>
        <div>
        <p style={{marginLeft: '2%'}}>Utilisez le fomulaire ci-dessous pour essayer notre service directement et vous faire livrer <b>tout type de colis</b>. 
        Aucune création de compte n'est nécessaire. Contactez-nous à la moindre question.</p>
      </div>
        <div className="col s6 offset-s3 btn-small waves-effect waves-light cmd-button" onClick={this.formShow.bind(this)}>{this.state.fomulaire}</div>
      </div>

     
    <iframe hidden={this.state.formHidden} title="iframe" id="iframe" src="https://coursiersmontpellier.coopcycle.org/fr/embed/delivery/start" width="100%" height="1450" frameborder="0"></iframe>
    </section>

    </div>
    )
  }
}

export default Services
