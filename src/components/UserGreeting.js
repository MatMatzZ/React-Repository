import React, { Component } from 'react'

function UserName(props){
    return (
        props.isLogged ? <div><h1>Welcome Mat</h1></div> : <div><h1>Welcome Guest</h1></div>
    );
}

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
        this.logInHandler = this.logInHandler.bind(this);
    }
    logInHandler(){
        this.setState({
            isLoggedIn: true
        });
    }
    render() {
        return (
            <div>
                <UserName isLogged={this.state.isLoggedIn}/>
                <button onClick={this.logInHandler}>Login</button>
            </div>
        )
    }
}

export default UserGreeting
