import React, { Component } from 'react'

function UserName(props){
    return(
        <div>
            <label>Username</label>
            <input type='text' value={props.username} onChange={props.handleUsernameChange}></input>
        </div>
    )
}
function Comments(props){
    return(
        <div>
            <label>Comments</label>
            <textarea value={props.comments} onChange={props.handleCommentsChange}></textarea>
        </div>
    )
}
function Topics(props){
    const topicsList = props.topics;
    return(
        <div>
            <label>Topic</label>
            <select value={props.selTopic} onChange={props.handleTopicChange}>
                {topicsList.map(topic=> <option value={topic}>{topic}</option>)}
            </select>
        </div>
    )
}

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'React'
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handleCommentsChange = this.handleCommentsChange.bind(this)
        this.handleTopicChange = this.handleTopicChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleUsernameChange = (event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleCommentsChange = (event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange = (event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = (event)=>{
        alert(` Username : ${this.state.username}, Comment: ${this.state.comments}, Skill: ${this.state.topic}`)
        event.preventDefault();
    }
    render() {
        const topics = ['React','Angular','Vue'];
        return (
            <div>
                <h1>Forms Basic</h1>
                <form onSubmit={this.handleSubmit}>
                    <UserName username={this.state.username} handleUsernameChange={this.handleUsernameChange}></UserName>
                    <Comments comment={this.state.comments} handleCommentsChange={this.handleCommentsChange}/>
                    <Topics topics={topics} selTopic={this.state.topic} handleTopicChange={this.handleTopicChange}></Topics>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
