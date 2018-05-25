import React, { Component } from 'react';
import {getChuckChuckles, getCat} from '../ApiFunctions';
import cat from '../content/cat.png';
import chuck from '../content/chuck-norris.png';


class ExtApiResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      selected: "chuck",
    };
    this.LoadStuff("chuck");

  }

  LoadStuff = (selected) => {
    console.log("loading");
    if (selected === "chuck")
    {
      getChuckChuckles().then((response) => {
        console.log(response);
        this.setState({ 
          data: response.data,
        })
      })
    }else if (selected === "cat")
    {
      getCat().then((response) => {
        console.log(response);
        response.data.value = response.data.fact;
        this.setState({ 
          data: response.data,
        })
      })
    }

  }
    ButtonClicked = (selected) => {
      this.LoadStuff(selected);
    } 
  render() {
    return (
      <div class="whiteBox">
      <div>
        <img onClick={() => this.ButtonClicked("chuck")} src={chuck}/>
        <img class="imageIcon" src={cat} onClick={() => this.ButtonClicked("cat")}/>
      </div>
        <br/>
        <p>{this.state.data.value}</p>
      </div>
    );
  }
}

export default ExtApiResult;
"https://api.chucknorris.io/jokes/random"
"http://funtranslations.com/api"
"https://alexwohlbruck.github.io/cat-facts/"