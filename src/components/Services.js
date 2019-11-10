/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/Services.css'

function Services() {
  return (
    <div>
    <section className="container section scrollspy" id="services">
      <div className="row">
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
            <p>Depuis le premier mai 2019, vous pouvez <a href="https://coursiersmontpellier.coopcycle.org/fr/">commander</a> votre repas dans l'un de nos restaurants partenaires !</p>
          </div>
          <div className="col s12" id="editing">
              <h6 className=" green-text text-darken-4"> <i className="material-icons">check</i> DISPONIBLE</h6>
              <p>Entreprise ou particuliers, nous livrons dès à présent tout type de colis avec des vélos cargos sur la ville de montpellier, n'hésitez pas à nous contacter*.</p>
              <div className="asterisk"><p>*En cas de problème pour nous contacter par mail (voir onglet contact), vous pouvez également nous joindre au 07.84.17.99.89.</p></div>

          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Services
