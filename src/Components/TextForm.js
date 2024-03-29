import React, {useState} from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log('Uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () => {
    console.log('Lowercase was clicked' + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = () => {
    let newText = '';
    setText(newText)
  }
  const handleOnChange = (event) => {
    console.log('onChange');
    setText(event.target.value);
  }
  const handleCopy = () =>{
    console.log("I am a copy");
    var text= document.getElementById("myBox");
    text.select();
  navigator.clipboard.writeText(text.value);
  
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const[text, setText] = useState('');
  return (
    <>
    <div className='container'>

      <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="Enter Your Text Here" className="form-label"></label> */}

  <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>



    </div>
    <div className="container my-2">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Words And {text.length}Characters</p>
      <p>{0.008*text.split(" ").length} Minutes To Read Aprox</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
