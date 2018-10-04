import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import ButtonPannel from './components/ButtonPannel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display></Display>
        <ButtonPannel></ButtonPannel>
      </div>
    );
  }
}

export default App;
