/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/Parallax.css'

// import StreetSmall from '/groupe_small.jp2'
// import StreetMedium from '/groupe_medium.jp2'
// import StreetLarge from '/groupe_large.jp2'

function Parallax2() {

  const StreetSmall =  '/parallax_yannick.jpg'
  const StreetMedium = '/parallax_yannick.jpg'
  const StreetLarge = '/parallax_yannick.jpg'
  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          Salut
          <img src={StreetSmall} srcSet={StreetSmall+" 300w,"+StreetMedium+" 768w,"+StreetLarge+" 1280w"} alt="" className="responsive-img"/>
        </div>
      </div>
    </div>
  )
}

export default Parallax2
