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

      <div class="navbar-form navbar-right row right">
        <div class="form-group">
            <input class="niceInput" placeholder="Username" onChange={this.onChangeUName} style={{margin: 10}} value={this.state.uName}></input>
        </div>
        <div class="form-group">
        <input class="niceInput" placeholder="Password" onChange={this.onChangePWord} style={{margin: 10}} value={this.state.pWord}></input>
        </div>
        <div class="form-group">
            <button class="linkItem" onClick={this.LoginClicked}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
