import React from 'react';

class OuterClickExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isOpen:false}
    this.toggleContainer = React.createRef();
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  componentDidMount() {
    console.log(this.toggleContainer)

    window.addEventListener('click',this.onClickOutsideHandler)
  }
  componentWillUnmount() {
    window.removeEventListener('click',this.onClickOutsideHandler)
  }
  onClickOutsideHandler(event) {
    console.log(event)
    if(this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.setState({isOpen:false})
    }
  }
  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen,
    }));
  }
  render () {
    return (
      <div ref={this.toggleContainer}>
        <button onClick={this.onClickHandler}>Select an option</button>
        {
          this.state.isOpen && 
          <ul>
            <li>options 1</li>
            <li>options 2</li>
            <li>options 3</li>
          </ul>
        }
      </div>
    )
  }
}

export default OuterClickExample;