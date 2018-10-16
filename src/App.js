import React, { Component } from 'react';
import './App.css';
import Container from './components/Container';
import Display from './components/Display';
import calculate from './calculation/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total    : null,
      nextValue: null,
      operation: null
    };
  }

  calculationHandler (buttonName){
    this.setState(calculate(this.state, buttonName));
  }
  render() {
    return (
      <div className="App">
        <Display value={this.state.nextValue || this.state.total || 0}></Display>
        <Container clickHandler={this.calculationHandler.bind(this)}></Container>
      </div>
    );
  }
}

export default App;
