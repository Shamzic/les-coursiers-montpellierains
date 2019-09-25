/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/Parallax.css'

// import VeloCollesSmall from '/img/velos_colles_small.jp2'
// import VeloCollesMedium from '/img/velos_colles_medium.jp2'
// import VeloCollesLarge from '/img/velos_colles_large.jp2'

function Parallax() {

  const VeloCollesSmall  = '/velos_colles_small.jp2'
  const VeloCollesMedium = '/velos_colles_medium.jp2'
  const VeloCollesLarge  = '/velos_colles_large.jp2'
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
