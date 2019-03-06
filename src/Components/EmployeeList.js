import React, { Component } from 'react';

class EmployeeList extends Component {
  renderFontsize = (size) => {
    return `fontsize-${size}`
  }
  renderItem = () => {
    if(this.props.items.employees && this.props.items.employees.length) {
      return this.props.items.employees.map( item => <li className={this.renderFontsize(item.popularity)} key={item.name} onClick={() => this.props.getEmployeeDetail(item)}><a href="#">{item.name}</a></li>)
    }
  }
  render() {
    return (
      <ul className="employee-list">
        {
          this.renderItem()
        }
      </ul>

    );
  }
}

export default EmployeeList;