import React, { Component } from 'react';
import logo from '../images/logo.svg';
import EmployeeList from './EmployeeList';

class LeftSide extends Component {
  render() {
    return (
      <div className="left-side">
        <img src={logo} alt="Logo" className="app-logo" />
        <EmployeeList items={this.props.items} getEmployeeDetail={this.props.getEmployeeDetail}></EmployeeList>
      </div>

    );
  }
}

export default LeftSide;