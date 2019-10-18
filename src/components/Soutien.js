/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/Soutien.css'
import LogoAlterIncub from '../img/Logo-AlterIncub.png'
import LogoRegion from '../img/Logo-Region.png'
import LogoUrscop from '../img/Logo-URSCOP.png'

function Presse() {
  return (
    <div>
    <section className="container section scrollspy" id="soutien">
    <h3> Ils nous soutiennent</h3>
      <div className="imagesList">

        <a href="http://www.alterincub.coop"  target="_blank" rel="noopener noreferrer" >
          <img id="alterincub" src={LogoAlterIncub} alt="" className="responsive-img"/>
        </a>

        <a href="https://www.laregion.fr"  target="_blank" rel="noopener noreferrer" >
          <img id="region" src={LogoRegion} alt="" className="responsive-img"/>
        </a>

        <a href="https://www.scop-lr.coop/sites/fr/unions-regionales/languedoc-roussillon/"  target="_blank" rel="noopener noreferrer" >
          <img id="urscop" src={LogoUrscop} alt="" className="responsive-img"/>
        </a>

      </div>
    	<hr width="90%"/>
    </section>
    </div>
  )
}
export default Presse
