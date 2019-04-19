/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/Parallax.css'
import Street from '../img/photo_groupe2.jpg'

function Parallax2() {
  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={Street} alt="" className="responsive-img"/>
        </div>
      </div>
    </div>
  )
}

export default Parallax2
