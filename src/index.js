import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function DragDropFile(props){
  const [dragActive, setDragActive] = React.useState(false);
  function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }
  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      // handleFiles(e.dataTransfer.files)
      const reader = new FileReader();
      reader.onload = function(e) { 
        const text = (e.target.result)
        props.onText(text);
      };
      reader.readAsText(e.dataTransfer.files[0])
      
    }
  }
  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      console.log(e);
      const reader = new FileReader();
      reader.onload = function(e) { 
        const text = (e.target.result)
        props.onText(text);
      };
      reader.readAsText(e.target.files[0])
      
    }
  };
  return (
    <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e)=>e.preventDefault()}>
      <input type="file" id="input-file-upload" multiple={true} accept=".txt" onChange={handleChange}/>
      <label id="label-file-upload" htmlFor="input-file-upload">
        <div>
          <p>Drag and drop your text file or click to upload</p>
        </div> 
      </label>
      { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} 
        onDragOver={handleDrag} onDrop={handleDrop} onChange={handleChange}> 
      </div> }

    </form>
  );
}
class CaseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ""};
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
  handleText(text){
    this.setState({value: text});
  }
  render(){
    return (
      <div>
      <form className="mainForm">
        <textarea className="mainTextArea" placeholder="Your text here..." value={this.state.value} onChange={this.handleChange}/>
        <p>
          <input type="button" className="upperCaseButton" value="UPPERCASE" onClick={()=>this.handleUpperCase()}/>
          <input type="button" className="lowerCaseButton" value="lowercase" onClick={()=>this.handleLowerCase()}/>
          <label className="labelCharCount"> Character Count: {this.state.value.length}</label> 
        </p>
        <DragDropFile onText={(text)=>this.handleText(text)}/>
      </form>
      
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CaseForm/>
);

