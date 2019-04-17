/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/Parallax.css'
import Stars from '../img/velos_colles.jpg'

function Parallax() {
  return (
    <div>
    <div className="parallax-container">
      <div className="parallax">
        <img src={Stars} alt="" className="responsive-img"/>
      </div>
    </div>
    </div>
    
  )
}

export default Parallax
