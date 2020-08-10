import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greet name ="Bruce" heroName="Batman"/>
      <Greet name ="Clark" heroName= "Superman"/>
      <Greet name ="Diana" heroName= "Wonderwoman"/>
    </div>
  );
}

export default App;
