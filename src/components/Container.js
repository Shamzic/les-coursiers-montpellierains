/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import curry from './curry.jpg';

function Container() {
  return (
    <div className="container">
    <div className="row">
        <h2>Cards</h2>
        <div className="col s12 l6">
            <div className="card">
                <div className="card-image">
                    <img src={curry}  alt=""/>
                    <a href="#" className="halfway-fab btn-floating pink  waves-effect waves-light waves-circle">
                        <i className="material-icons">favorite</i>
                    </a>
                </div>
                <div className="card-content">
                    <span className="card-title">Test</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam expedita, aut qui iusto quae tempore adipisci, labore distinctio pariatur ullam veniam, mollitia magnam. Aliquam quam minus maiores accusantium nam.
                </div>
                <div class="card-action">
                    <a href="#">This is a link</a>
              </div>
            </div>
        </div>
        <div className="col s12 l6">
            <div className="card">
                <div className="card-image">
                    <img src={curry}  alt=""/>
                    <a href="#" className="halfway-fab btn-floating pink  waves-effect waves-light waves-circle">
                        <i className="material-icons">favorite</i>
                    </a>
                </div>
                <div className="card-content">
                    <span className="card-title">Test</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam expedita, aut qui iusto quae tempore adipisci, labore distinctio pariatur ullam veniam, mollitia magnam. Aliquam quam minus maiores accusantium nam.
                </div>
                <div class="card-action">
                    <a href="#">This is a link</a>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Container
