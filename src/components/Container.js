/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/Container.css'

function Container() {
  return (
    <div className="container content center">
      <h5 id="subtitle"> "Première coopérative Montpelliéraine de livraison de repas à vélo"</h5>
            <a href="https://www.kisskissbankbank.com/fr/projects/livraison-repas-zero-dechet-a-montpellier/tabs/description" className="red-text col s12 ">
              <h5> <b>Nouveau</b> : financement participatif zéro déchets, aidez-nous <b>ici</b> <i className="material-icons btn pulse red">trending_up</i> !</h5>
            </a>
            <br/><br/>
            <a href="https://coursiersmontpellier.coopcycle.org" className="col s12 btn-large waves-effect waves-light black yellow-text cmd-button">Faites vous livrer votre repas en cliquant ICI<i className="material-icons right">send</i> </a>
          <h6> Vous pouvez passer commande chaque jour entre <b>11h30</b> et <b>14h30</b>, et chaque soir entre <b>18h</b> et <b>23h</b></h6>
  </div>
  )
}

export default Container
