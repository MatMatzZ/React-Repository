import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <h1>Functional Statement</h1>
      <hr></hr>
      <Greet name ="Bruce" heroName="Batman">
        <p>I am dark knight</p>
      </Greet>
      <Greet name ="Clark" heroName= "Superman">
        <button>Click me</button>
      </Greet>
      <Greet name ="Diana" heroName= "Wonderwoman"/>
      <hr></hr>
      <h1>Class Statement</h1>
      <hr></hr>
      <Welcome name ="Bruce" heroName="Batman"/>
      <Welcome name ="Clark" heroName= "Superman"/>
      <Welcome name ="Diana" heroName= "Wonderwoman"/>
    </div>
  );
}

export default App;
