import React, { Component } from 'react';
import NavBar from './components/NavBar.js'
import Container from './components/Container.js';


class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <Container/>
      </div>
    );
  }
}

export default App;
