import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            password: "",
            username: "hruday@gmail.com",
            password: "hruday123"

        }

        this.handlerSubmit = this.handlerSubmit.bind(this)
    }

    handlerSubmit(e) {
        e.preventDefault();
        console.log(this.state.username)
        if(this.state.name === this.state.username && this.state.password === this.state.password){
            {this.props.history.push("/list")}
        }
        else{
            alert("Enter valid user/password")
        }

    }
    render() {
        return (
            <div className="loginStyle">
                <input type="text" placeholder="Enter user name" onChange={e => this.setState({ name: e.target.value })} value={this.state.name}></input><br />
                <input type="password" placeholder="Enter password" onChange={e => this.setState({ password: e.target.value })} value={this.state.password}></input><br />
                <button type="submit" onClick={this.handlerSubmit}>Login</button>
            </div>
        )
    }
}

export default Login
