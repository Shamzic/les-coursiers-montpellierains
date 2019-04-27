import React, { Component } from 'react';
import NavBar from './components/NavBar.js'
import Container from './components/Container.js';
import PhotoGrid from './components/PhotoGrid.js';
import Services from './components/Services.js';
import Parallax from './components/Parallax.js';
import Parallax2 from './components/Parallax2.js';
import ContactForm from './components/ContactForm.js';
import Contact from './components/Contact.js';
import Contact2 from './components/Contact0.js';
import Footer from './components/Footer.js';
import './css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <Container/>
          <PhotoGrid/>
          <Parallax/>
          <Services/>
          <Parallax2/>
          <ContactForm/>
          <Footer/>
      </div>
    );
  }
}

export default App;
