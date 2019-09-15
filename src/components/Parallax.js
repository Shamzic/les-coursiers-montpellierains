/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/Parallax.css'

import VeloCollesSmall from '../img/veloColles_small.webp'
import VeloCollesMedium from '../img/veloColles_medium.webp'
import VeloCollesLarge from '../img/veloColles_large.webp'

function Parallax() {
  return (
    <div>
    <div className="parallax-container">
      <div className="parallax">
        <img src={VeloCollesSmall} srcSet={VeloCollesSmall+" 300w,"+VeloCollesMedium+" 768w,"+VeloCollesLarge+" 1280w"} alt="" className="responsive-img"/>
      </div>
    </div>
    </div>

  )
}

export default Parallax
