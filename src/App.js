import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Form></Form>
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Inline></Inline>
        <StyleSheet primary={true}></StyleSheet> */}
        {/* <NameList></NameList> */}
        {/* <UserGreeting></UserGreeting> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <EventBind></EventBind> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <ClassClick></ClassClick> */}
        {/* <Counter></Counter>
        <Greet name ="Bruce" heroName="Batman"></Greet>
        <Welcome name ="Bruce" heroName="Batman"/> */}
        {/* <Message/> */}
  
        {/* <h1>Functional Statement</h1>
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
        <Welcome name ="Diana" heroName= "Wonderwoman"/> */}
      </div>
    );
  }
  }
  

export default App;

