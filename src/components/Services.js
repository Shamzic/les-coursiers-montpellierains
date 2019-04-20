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
          <p>Grâce à notre expérience dans la livraison de repas, nous avons décidé de nous lancer notre propre association de livraison. Le contexte actuel de la livraison de repas est menacé par l'exploitation des indépendants, contrôlé par des algorithmes et la qualité des services proposés par les géants se déteriore au fil des jours pour prioriser la quantité. Nous souhaitons nous démarquer par notre qualité de service irréprochable et notre éthique locale.</p>
        </div>
        <div className="col s12 l6 offset-l1">
          <ul className="tabs">
            <li className="tab col s6">
              <a href="#photography" className="black-text text-darken-4">Livraison de repas</a>
            </li>
            <li className="tab col s6">
              <a href="#editing" className="black-text text-darken-4">Livraison de plis et colis</a>
            </li>
          </ul>
          <div className="col s12" id="photography">
            <h6 className=" green-text text-darken-4"> <i className="material-icons">check</i> DISPONIBLE</h6>
            <p>Vous pouvez, à compter du premier mai 2019,  <a href="https://coursiersmontpellier.coopcycle.org/fr/">commander</a> votre repas dans l'un de nos restaurants partenaires !</p>
          </div>
          <div className="col s12" id="editing">
              <h6 className=" red-text text-darken-4"> <i className="material-icons">warning</i> A VENIR</h6>
              <p>Dans un futur proche, nous souhaitons élargir nos services de livraison aux plis postaux et aux colis. Si vous êtes une entreprise en recherche de livreurs hors repas, n'hésitez pas à nous contacter.</p>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Services
