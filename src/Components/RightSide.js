import React, { Component } from 'react';
import Popularity from './Popularity';

class RightSide extends Component {
  checkData= () => {
    if(Object.keys(this.props.data).length) {
      return (
        <div class="inner">
          <div className="right-side-img"><img src={`/img/upload/${this.props.data.image}`} alt="" /></div>
          <div className="right-side-body">
            <h1>{this.props.data.name}</h1>
            <Popularity value={parseInt(this.props.data.popularity)} setFontsize={this.props.setFontsize} itemName={this.props.data.name}></Popularity>
            <div className="right-side-text">
              <h2>Biography</h2>
              <p>{this.props.data.biography}</p>
            </div>
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="right-side">
        {this.checkData()}
      </div>

    );
  }
}

export default RightSide;