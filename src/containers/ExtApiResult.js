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
      loading: false,
    };
    this.LoadStuff("chuck");

  }

  LoadStuff = (selected) => {
    this.setState({ 
      selected: selected,
      loading: true,
    })
    console.log("loading");
    if (selected === "chuck")
    {
      getChuckChuckles().then((response) => {
        console.log(response);
        this.setState({ 
          data: response.data,
          loading: false,
        })
      })
    }else if (selected === "cat")
    {
      getCat().then((response) => {
        console.log(response);
        response.data.value = response.data.fact;
        this.setState({ 
          data: response.data,
          loading: false,
        })
      })
    }

  }
    ButtonClicked = (selected) => {
      this.LoadStuff(selected);
    } 
  render() {
    return (
      <div class="whiteBoxFullSize">
      <div>
        <img ref="chuckimg" className={"crossRotate" + (this.state.selected == "chuck" && this.state.loading ? "" : "stop") } onClick={() => this.ButtonClicked("chuck")} src={chuck}/>
        <img ref="catimg" className={"imageIcon crossRotate" + (this.state.selected == "cat" && this.state.loading ? "" : "stop") } src={cat} onClick={() => this.ButtonClicked("cat")}/>
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