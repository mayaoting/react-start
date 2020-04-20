import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
    console.log(this);

  }
  /**
   * componentDidMount()方法将会在组件 已经渲染到Dom
   * 中后运行，所以最好在这里设置计时器
   */
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    })
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  activeLasers() {
    console.log('shishiquba')
  }
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.activeLasers}>
          activeLasers
        </button>
      </div>
    )
  }
}

export default Clock;