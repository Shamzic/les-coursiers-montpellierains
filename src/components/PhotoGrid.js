/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/PhotoGrid.css'
import portrait from '../img/portrait.jpg'
import city from '../img/city.jpg'
import nature from '../img/nature.jpg'

function PhotoGrid() {
  return (
    <div>
      <section className="container" id="photos">
        <div className="row">
          <div className="col s12 l4 ">
            <img src={nature} alt="" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 l6 offset-l1">
            <h2 className="indigo-text text-darken-4">Portraits</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, libero minus laboriosam distinctio earum eius suscipit! Illo deleniti saepe vitae, ullam quidem, reprehenderit, tempore iure fuga dolorem ut asperiores animi.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4 push-l7 ">
            <img src={city} alt="" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 l6 pull-l4 left-align">
            <h2 className="indigo-text text-darken-4">Portraits</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, libero minus laboriosam distinctio earum eius suscipit! Illo deleniti saepe vitae, ullam quidem, reprehenderit, tempore iure fuga dolorem ut asperiores animi.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4">
            <img src={portrait} alt="" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 l6 offset-l1">
            <h2 className="indigo-text text-darken-4">Portraits</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, libero minus laboriosam distinctio earum eius suscipit! Illo deleniti saepe vitae, ullam quidem, reprehenderit, tempore iure fuga dolorem ut asperiores animi.
            </p>
          </div>
        </div>
          
      </section>
     
    </div>
  )
}

export default PhotoGrid
