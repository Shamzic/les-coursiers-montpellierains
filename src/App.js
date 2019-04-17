import React, { Component } from 'react';
import NavBar from './components/NavBar.js'
import Container from './components/Container.js';
import PhotoGrid from './components/PhotoGrid.js';


class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <Container/>
          <PhotoGrid/>

{/* 
          <!-- navbar -->

<!-- photo / grid -->

<!-- parallax -->

<!-- services / tabs -->

<!-- parallax -->

<!-- contact form -->

<!-- footer --> */}
      </div>
    );
  }
}

export default App;
