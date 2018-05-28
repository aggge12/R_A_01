import React, { Component } from 'react';
import EnKnapp from '../components/EnKnapp.js'
import {getProducts,saveFavorite} from '../ApiFunctions';
import ListItem from '../components/ListItem.js';
class ApiList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiResult: [],
      page: 0,
    };

  }

  componentDidMount() {
      getProducts().then((response) => {
        console.log("response");
        console.log(response);
        this.setState({ 
          apiResult: response.data,
      })
    })
  }

  AddToFavorites = (userid, productid) => {
    saveFavorite(userid,productid).then((response)=>{
      console.log(response);
      if(response.data === 200){
        alert("Tillagd!");
      }else if(response.data === 409)
      {
        alert("Produkten finns redan i din lista :P");
      }
    }) 
  }

  onChangePage = (i) => {
    this.setState({ 
      page: i,
  })
  }
  
  CreatePaginationButtons = (listObjectPerPage, totalListed) => {
    let listPages = [];
    for(let i = 0; i < (totalListed / listObjectPerPage); i++)
    {
      listPages.push(<li class="page-item"><a onClick={() => this.onChangePage(i)} class="page-link" >{i+1}</a></li>);
    }
    return listPages;
}

  render() {
    let j = 0;
    let totalobjects = 0;
    let listObjectPerPage = 4; 
    return (
      <div className="whiteBox">
      {
        this.state.apiResult.map((s, index)=> {
          totalobjects++;
          if((this.state.page > 0 && index >= this.state.page * listObjectPerPage && index < this.state.page * listObjectPerPage+listObjectPerPage) || (this.state.page == 0 && index < listObjectPerPage )) {
          j++;
          return <ListItem user={this.props.user} ClickFunction={this.AddToFavorites} data={s}></ListItem>
        }
        })
      }
        {this.CreatePaginationButtons(listObjectPerPage, totalobjects).length > 1 ? 
        <nav class="text-center">
          <ul class="pagination">
            <li class="page-item"><a onClick={this.state.page>0? () => this.onChangePage(this.state.page-1) : () => this.onChangePage(this.state.page)} class="page-link" >Backa</a></li>
            {
              this.CreatePaginationButtons(listObjectPerPage, totalobjects).map((value)=> {
                console.log(this.CreatePaginationButtons(listObjectPerPage, totalobjects).length-1)
                return value
              })
            }
            <li class="page-item"><a onClick={this.state.page<this.CreatePaginationButtons(listObjectPerPage, totalobjects).length-1? () => this.onChangePage(this.state.page+1) : () => this.onChangePage(this.state.page)} class="page-link" >Nästa</a></li>
          </ul>
        </nav>
        :
        ""
        }
      </div>
    );
    
  }
  }
export default ApiList;
