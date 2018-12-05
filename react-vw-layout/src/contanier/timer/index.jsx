import React, { Component } from 'react';
import './index.scss';
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      seconds: 10,
      liked: false 
    };
  }
  handleClick = () => {
    let timer = setInterval(() => {
      this.setState({
        liked: true,
        seconds: this.state.seconds - 1,  
      })
      if(this.state.seconds === 0) {
        clearInterval(timer);
        this.setState({
          liked: false,
          seconds: 10
        })
      } 
    },1000);
  }
  render() {
    let { seconds, liked } = this.state;
    let text = liked ?`${seconds}秒后重发` :'获取验证码';
    return (
      <div>
        <button disabled={liked} onClick={this.handleClick}>{text}</button>
      </div>
    )
  }
}
