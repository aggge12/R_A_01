import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uName: '',
            pWord: '',
        };
    }

    LoginClicked = () => {
        if (this.state.uName !== "" && this.state.pWord !== "" )
        {
            this.props.LoginFunction(this.state.uName, this.state.pWord);
        }
    }

    onChangeUName = (u) => {
        console.log(u);
        this.setState({
            uName: u.target.value,
        })
    }
    
    onChangePWord = (p) => {
        this.setState({
            pWord: p.target.value,
        })
    }

  render() {
    return (
      <div style={{float: "right", margi: '10px'}}>
        username
        <input class="niceInput" onChange={this.onChangeUName} style={{margin: 10}} value={this.state.uName}></input>
        password
        <input class="niceInput" onChange={this.onChangePWord} style={{margin: 10}} value={this.state.pWord}></input>
        <button class="linkItem" onClick={this.LoginClicked}>Login</button>
      </div>
    );
  }
}

export default Login;
