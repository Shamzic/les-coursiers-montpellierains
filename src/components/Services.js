/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/Services.css'

function Services() {
  return (
    <div>
    <section className="container section" id="services">
      <div className="row">
        <div className="col s12 l6">
          <h2 className="indigo-text text-dark-4">Ce qu'on vous propose...</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, officia consequuntur! Alias consectetur quos quo excepturi voluptate. Delectus, necessitatibus. Est accusantium inventore, veniam debitis asperiores exercitationem ipsa error nobis repellendus!</p>

        </div>
        <div className="col s12 l6">
          <ul className="tabs">
            <li className="tab col s6">
              <a href="#photography" className="indigo-text text-darken-4">Photography</a>
            </li>
            <li className="tab col s6">
              <a href="#editing" className="indigo-text text-darken-4">Editing</a>
            </li>
          </ul>
          <div className="col s12" id="photography">
            <p className="flow-text indigo-text text-darken-4"></p>PHOTOGRAPHY<p/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae corrupti odit magni, praesentium inventore dolorum, commodi optio libero beatae magnam, fuga rerum dolore similique nulla! Voluptate ratione itaque labore eos.</p>
          </div>
          <div className="col s12" id="editing">
            <p className="flow-text indigo-text text-darken-4"></p>EDITING<p/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae corrupti odit magni, praesentium inventore dolorum, commodi optio libero beatae magnam, fuga rerum dolore similique nulla! Voluptate ratione itaque labore eos.</p>
          </div>
        </div>
      </div>
    </section>
     
    </div>
  )
}

export default Services
