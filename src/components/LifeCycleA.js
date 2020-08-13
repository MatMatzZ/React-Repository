import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Mat'
        }
        console.log('LifeCycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA component did mount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("LifeCycleA componentDidupdate")
    }
    changeState = ()=>{
        this.setState({
            name:'Codevolution'
        });
    }
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>LifeCycle A</div>
                <button onClick={this.changeState}>Change state</button>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifeCycleA
