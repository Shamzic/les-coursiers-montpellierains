/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/PhotoGrid.css'

import AlexVinceSmall from '../img/alexVince_small.webp'
import AlexVinceMedium from '../img/alexVince_medium.webp'
import AlexVinceLarge from '../img/alexVince_large.webp'

import YannickStyleSmall from '../img/yannickStyle_small.webp'
import YannickStyleMedium from '../img/yannickStyle_medium.webp'
import YannickStyleLarge from '../img/yannickStyle_large.webp'

import DropOffSmall from '../img/dropOff_small.webp'
import DropOffMedium from '../img/dropOff_medium.webp'
import DropOffLarge from '../img/dropOff_large.webp'

import CoursierOrangeSmall from '../img/coursierOrange_small.webp'
import CoursierOrangeMedium from '../img/coursierOrange_medium.webp'
import CoursierOrangeLarge from '../img/coursierOrange_large.webp'

function PhotoGrid() {
  return (
    <div>
      <section className="container scrollspy" id="photos">
        <div className="row">
          <div className="col s12 l4 ">
            <img src={AlexVinceSmall} srcSet={AlexVinceSmall+" 300w,"+AlexVinceMedium+" 768w,"+AlexVinceLarge+" 1280w"} alt="" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 l6 offset-l1">
            <h4 className="black-text text-darken-4">Rapide, écologique et local</h4>
            <p>Une équipe de jeunes coursiers Montpelliérains vous ouvre ses services de livraison à vélo dès le 1er mai 2019. En plus d'être rapide, écologique et local, nous vous garantissons un service de qualité grâce à nos coursiers expérimentés.</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4 push-l7 ">
              <img src={CoursierOrangeSmall} srcSet={CoursierOrangeSmall+" 300w,"+CoursierOrangeMedium+" 768w,"+CoursierOrangeLarge+" 1280w"} alt="" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 l6 pull-l4 left-align">
            <h4 className="black-text text-darken-4">Référence Coopcycle</h4>
            <p>Ainsi vous allez pouvoir vous faire livrer vos repas chaque soir dans toute la ville de Montpellier en commandant vos repas auprès de nos restaurants partenaires directement sur notre <a href="https://coursiersmontpellier.coopcycle.org/fr/">instance Coopcycle</a>, référence et fédération européenne des coopératives de livraison à vélo. </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4">
            <img src={DropOffSmall} srcSet={DropOffSmall+" 300w,"+DropOffMedium+" 768w,"+DropOffLarge+" 1280w"} alt="" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 l6 offset-l1">
            <h4 className="black-text text-darken-4">Plus proche de vous</h4>
          <p>Contrairement aux géants concurrents, nous sommes locaux et basés exclusivement à Montpellier, ville que nous connaissons maintenant dans les moindres détails. A tout moment vous pouvez également nous contacter via nos réseaux sociaux, notre adresse mail ou directement sur ce site via le bouton de contact, nous nous ferons une joie de vous répondre. Il est également possible pour nous de venir vous rencontrer, quelques coups de pédale et nous serons à votre porte.</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4 push-l7 ">
              <img src={YannickStyleSmall} srcSet={YannickStyleSmall+" 300w,"+YannickStyleMedium+" 768w,"+YannickStyleLarge+" 1280w"} alt="" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 l6 pull-l4 left-align">
            <h4 className="black-text text-darken-4">Des livreurs multi-outils</h4>
          <p>Nous nous investissons à plein temps dans ce projet depuis plusieurs mois et nous avons tout fait par nous-même. Grâce à notre expérience dans la livraison de repas et en combinant nos compétences externes (marketing, informatique, photographie, montage vidéo), nous avons décidé de lancer notre propre association de livraison dans la ville de Montpellier.</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PhotoGrid
