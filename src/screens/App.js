import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../containers/Login';
import {loginUser} from '../ApiFunctions';
import ScreenTwo from './ScreenTwo.js';
import ScreenOne from './ScreenOne.js';
  
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: 0,
      userName: "",
    };
  }

  OnSetUser = (changeUser) => {
    this.setState({ 
      user: changeUser,
  })
  }

  login = (uName, pWord) => {
    console.log(uName)
    loginUser(uName, pWord).then((response) => {
      console.log(response);
      if (response.data.userID === "0")
      {
        alert("WRONG!");
      }
      this.setState({ 
        user: response.data.userID,
        userName : uName,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
            <br/>
            <h1 class="App-title" >En hemsida med drycker!</h1>
            <br/>
            {
              this.state.user !== 0 ? 
              <div>
              <Link className="linkItem" to="/">Drycker</Link> 
              <Link className="linkItem" to="/ScreenTwo">Favoriter</Link>
              </div>
            :
            ""
            }
            {this.state.user === 0 || this.state.user ==='0' ?
            <div syle={{marginBottom:'10px'}}> 
            <Login LoginFunction={this.login}/>
            <br/>
            <br/>
            </div>
            :
            <div class="text-right"><p>Välkommen {this.state.userName}</p>
            </div>
            }

            </header>
              <Route user={this.state.user} exact path="/" render={()=><ScreenOne user={this.state.user}/>} />
              <Route path="/ScreenTwo" render={()=><ScreenTwo user={this.state.user}/>} />
            </div>
      </Router>
        
      </div>
    );
  }
}

export default App;
