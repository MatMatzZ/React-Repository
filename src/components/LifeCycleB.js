import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Mat'
        }
        console.log('LifeCycleB constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleB component did mount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("LifeCycleB getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("LifeCycleB componentDidupdate")
    }
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LifeCycleB
