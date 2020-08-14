import React, { Component } from 'react'

class Counters extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount = ()=>{
        console.log("Increment")
        this.setState(prevState => {
            return { count: prevState.count + 1}
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default Counters
