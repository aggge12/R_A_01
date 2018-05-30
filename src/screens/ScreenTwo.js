import React, { Component } from 'react';
import {getFavorites} from '../ApiFunctions';
import ExtApiResult from '../containers/ExtApiResult.js'
import ListItemFavorites from '../components/ListItemFavorites.js';

class ScreenTwo extends Component {

  constructor(props) {
    super(props);
    this.state = {
        listItems: [],
        page: 0,
    };
}

componentDidMount() {

  getFavorites(this.props.user).then((response) => {
    console.log(response);
    this.setState({ 
      listItems: response.data,
  })
})
}

Rerender = () => {
  console.log("rerender");
  getFavorites(this.props.user).then((response) => {
    console.log(response);
    this.setState({ 
      listItems: response.data,
  })
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
      <div class="row">
        <div class="col-sm-12 col-lg-4">
        <br/>
          <div class="col-sm-6 center">
            <ExtApiResult/>
          </div>
        </div>
        <br/>
        <div class="col-sm-12 col-lg-4">
        <br/>
        <h3>favoriter</h3>
        <br/>
        <div className="whiteBox">
        {
          this.state.listItems.map((s, index) => {
            totalobjects++;
            if((this.state.page > 0 && index >= this.state.page * listObjectPerPage && index < this.state.page * listObjectPerPage+listObjectPerPage) || (this.state.page == 0 && index < listObjectPerPage )) {
              j++;
            return <ListItemFavorites Rerender={this.Rerender} data={s}/>
            }

          })
        }
        {this.CreatePaginationButtons(listObjectPerPage, totalobjects).length > 1 ? 
        <nav class="text-center">
          <ul class="pagination">
            <li class="page-item"><a onClick={this.state.page>0? () => this.onChangePage(this.state.page-1) : () => this.onChangePage(this.state.page)} class="page-link" >Backa</a></li>
            {
              this.CreatePaginationButtons(listObjectPerPage, totalobjects).map((value)=> {
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
        </div>
      </div>
    );
  }
}

export default ScreenTwo;
