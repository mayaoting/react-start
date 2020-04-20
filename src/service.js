import React from 'react';

class Service extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     inputValue: '',
     list:['case1','case2']
   }
 }
 handleChange(e) {
  this.setState( {
    inputValue: e.target.value,
  })
}
  handleClick() {
    if(this.state.inputValue === '') {
      return
    }
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    })
  }
 render() {
   return (
     <div className="service-case">
       <input type="text" onChange={this.handleChange.bind(this)} value={this.state.inputValue}/> 
       <button onClick={this.handleClick.bind(this)}>add new case</button>
       <ul>
         {
           this.state.list.map((item,index) =>
             <li key={index+item}>{item}</li>
           )
         }
       </ul>
     </div>
   )
 }
}

export default Service