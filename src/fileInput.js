import React from 'react';

class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.fileInput = React.createRef();
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(`Selected file - ${this.fileInput.current.files[0]}`)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Upload file
        </label>
        <input type="file" ref={this.fileInput}/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default FileInput;