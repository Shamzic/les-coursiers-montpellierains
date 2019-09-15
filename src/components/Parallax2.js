/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/Parallax.css'

import StreetSmall from '../img/groupe_small.webp'
import StreetMedium from '../img/groupe_medium.webp'
import StreetLarge from '../img/groupe_large.webp'

function Parallax2() {
  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={StreetSmall} srcSet={StreetSmall+" 300w,"+StreetMedium+" 768w,"+StreetLarge+" 1280w"} alt="" className="responsive-img"/>
        </div>
      </div>
    </div>
  )
}

export default Parallax2
