import React, { Component } from 'react';
import './App.scss';
import Groups from "./assets/components/Groups";
import Trainees from "./assets/components/Trainess"

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Groups />
        <Trainees />
      </div>
    );
  }
}

export default App;
