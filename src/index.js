import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class CaseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: "lorem ipsum"};
  }
  handleUpperCase(){
    this.setState({value: this.state.value.toUpperCase()});
  }
  handleLowerCase(){
    this.setState({value: this.state.value.toLowerCase()});
  }
  render(){
    return (
      <form className="mainForm">
        <p><label for="mainTextEntry"> Insert text to be converted </label></p>
        <textarea className="mainTextArea" value={this.state.value}>

        </textarea>
        <p>
          <input type="button" className="upperCaseButton" value="UPPERCASE" onClick={()=>this.handleUpperCase()}/>
          <input type="button" classsName="LowerCaseButton" value="lowercase" onClick={()=>this.handleLowerCase()}/>
        </p>
      </form>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CaseForm/>
);

