import React, { Component, PureComponent } from 'react';
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
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import Counters from './components/Counters';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Counters 
          render={(count,incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>
        )}/>
        {/* <ClickCounterTwo/> */}
        {/* <HoverCounter2/> */}
        {/* <User name = {(isLoggedIn) => isLoggedIn ? "Mat": "Guest"}/> */}
        {/* HOC Pattern */}
        {/* <ClickCounter name="Mat"></ClickCounter> */}
        {/* <HoverCounter></HoverCounter> */}
      </div>
    );
  }
  }
  

export default App;

