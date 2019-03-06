import React, { Component } from 'react';
import './App.css';
import LeftSide from './Components/LeftSide';
import RightSide from './Components/RightSide';
import dataJson from './data/EmployeeData';

class App extends Component {
  constructor() {
    super();
    this.state ={
      data: {},
      employeeDetail: {}
    }
  }
  setFontsize = (input, name) => {
    console.log(input + ' ' + name);
    let items = this.state.data;
    items.employees = items.employees.map((item) => {
      if (item.name === name) {
        item.popularity = input
      }
      return item;
    });
    console.log(items);
    this.setState({
      data: items
    })
    // this.setState({
    //   data: this.state.data.employees.map(item => { 
    //     if (item.name === name) {
    //       item.popularity = input
    //     }
    //     return item;
    //   })
    // })
  }
  getEmployeeDetail = (input) => {
    this.setState({
      employeeDetail: input
    })
  }
  componentDidMount() {
    this.setState({data: dataJson});
  }
  render() {
    return (
      <div className="App">
        <div className="app-bg"></div>
        <LeftSide items={this.state.data} getEmployeeDetail={this.getEmployeeDetail}></LeftSide>
        <RightSide data={this.state.employeeDetail} setFontsize={this.setFontsize}></RightSide>  
      </div>
    );
  }
}


export default App;
