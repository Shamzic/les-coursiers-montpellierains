/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/Presse.css'
import Fr3Logo from '../img/fr3_logo.png'
import VingtMinLogo from '../img/20minutes_logo.png'
import MidiLibreLogo from '../img/midi-libre.jpg'
import MetropolitainLogo from '../img/metropolitain_logo.png'
import ViaOccitanieLogo from '../img/viaOccitanieLogo.jpg'
import LinfoDurable from '../img/l_info_durable.jpg'

function Presse() {
  return (
    <div>
    <section className="container section scrollspy" id="presse">
    <hr width="80%"/>
    <h3> Ils parlent de nous</h3>
      <div class="imagesList">

        <a href="https://france3-regions.francetvinfo.fr/occitanie/herault/montpellier/montpellier-coursiers-velo-creent-cooperative-mettre-plus-ethique-livraison-repas-1665871.html"  target="_blank" rel="noopener noreferrer" >
          <img id="fr3" src={Fr3Logo} alt="" className="responsive-img"/>
        </a>

        <a href="https://www.midilibre.fr/2019/05/14/livraisons-a-velo-a-montpellier-bosser-dix-heures-par-jour-pour-un-smic-cetait-invivable,8199000.php"  target="_blank" rel="noopener noreferrer" >
          <img id="midiLibre" src={MidiLibreLogo} alt="" className="responsive-img"/>
        </a>

        <a href="https://www.20minutes.fr/montpellier/2516183-20190512-montpellier-creent-service-livraison-repas-velo-ecolo-local"  target="_blank" rel="noopener noreferrer" >
          <img id="vingtMin" src={VingtMinLogo} alt="" className="responsive-img"/>
        </a>

        <a href="https://actu.fr/occitanie/montpellier_34172/montpellier-une-alternative-responsable-humaine-uber-deliveroo_23489655.html"  target="_blank" rel="noopener noreferrer" >
          <img id="metropolitain" src={MetropolitainLogo} alt="" className="responsive-img"/>
        </a>

        <a href="https://viaoccitanie.tv/montpellier-des-coursiers-a-velo-creent-un-service-de-livraison-de-repas/"  target="_blank" rel="noopener noreferrer" >
          <img id="viaOccitanie" src={ViaOccitanieLogo} alt="" className="responsive-img"/>
        </a>

        <a href="https://www.linfodurable.fr/social/occitanie-fini-deliveroo-et-uber-eats-place-aux-coursiers-montpellierains-11382"  target="_blank" rel="noopener noreferrer" >
          <img id="linfoDurable" src={LinfoDurable} alt="" className="responsive-img"/>
        </a>

      </div>
    	<hr width="80%"/>
    </section>
    </div>
  )
}
export default Presse
