/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/PhotoGrid.css'
import coursier_orange from '../img/coursier_orange.jpg'
import drop_off from '../img/drop_off.jpg'
import alex_vince from '../img/alex_vince.jpg'
import yannick_roule_style from '../img/yannick_roule_style.jpg'

function PhotoGrid() {
  return (
    <div>
      <section className="container scrollspy" id="photos">
        <div className="row">
          <div className="col s12 l4 ">
            <img src={alex_vince} alt="" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 l6 offset-l1">
            <h4 className="black-text text-darken-4">Rapide, égologique et local</h4>
            <p>Une équipe de jeunes coursiers Montpelliérains vous ouvre ses services de livraison à vélo dès le 1er mai 2019. En plus d'être rapide, écologique et local, nous vous garantissons un service de qualité grâce à nos coursiers tous expérimentés.</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4 push-l7 ">
            <img src={coursier_orange} alt="" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 l6 pull-l4 left-align">
            <h4 className="black-text text-darken-4">Référence Coopcycle</h4>
            <p>Ainsi vous allez pouvoir vous faire livrer vos repas chaque soirs dans toute la ville de Montpellier en commandant vos repas auprès de nos restaurants partenaires directement sur notre <a href="https://coursiersmontpellier.coopcycle.org/fr/">instance Coopcycle</a>, référence et fédération européenne des coopératives de livraison à vélo. </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4">
            <img src={drop_off} alt="" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 l6 offset-l1">
            <h4 className="black-text text-darken-4">Plus proche de vous</h4>
            <p>Contrairement aux géants concurents, nous sommes locaux et plus proche de vous. Ainsi, à tout moment vous pouvez directement nous contacter via notre réseaux,  notre adresse mail ou directement sur ce site via le formulaire de contact. Il est également facile de nous rencontrer, quelques coups de pédale et nous serons à votre porte.</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4 push-l7 ">
            <img src={yannick_roule_style} alt="" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 l6 pull-l4 left-align">
            <h4 className="black-text text-darken-4">Des livreurs multi-outils</h4>
            <p>Nous nous investissons à plein temps dans ce projet depuis plusieurs mois et nous avons tout fait par nous-même. Grâce à notre expérience dans la livraison de repas et en combinant nos compétences externes (marketing, informatique, photographie, montage vidéo), nous avons décidé de nous lancer notre propre association de livraison.</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PhotoGrid
