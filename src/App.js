import React, { Component } from 'react';
import './App.css';

class Like extends Component{
  state={
    count: 0, 

    label: 'likes'
  }
  handleClick = (e) =>{
    this.setState({
    count: this.state.count +1,
    label: this.state.count === 0 ? 'like' : 'likes' 
    })
    }
  
  render(){
  return (
    <button id="button" onClick={this.handleClick}>{this.state.count} {this.state.label}</button>

  );
}
}

export default Like;
