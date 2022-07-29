import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class CaseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: "lorem ipsum"};
    this.handleChange = this.handleChange.bind(this);
  }
  handleUpperCase(){
    this.setState({value: this.state.value.toUpperCase()});
  }
  handleLowerCase(){
    this.setState({value: this.state.value.toLowerCase()});
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
  render(){
    return (
      <form className="mainForm">
        <label for="mainTextEntry"> Insert text to be converted. </label> 
        
        <textarea className="mainTextArea" value={this.state.value} onChange={this.handleChange}/>
        <p>
          <input type="button" className="upperCaseButton" value="UPPERCASE" onClick={()=>this.handleUpperCase()}/>
          <input type="button" classsName="LowerCaseButton" value="lowercase" onClick={()=>this.handleLowerCase()}/>
          <label for="mainTextEntry"> Character Count: {this.state.value.length}</label> 
        </p>
      </form>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CaseForm/>
);

