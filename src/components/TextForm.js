import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
  const handlecClearText = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared","success");
  }
  const handlecCopyText = async ()=>{
    try {
      await navigator.clipboard.writeText(text);
      props.showAlert("Copied to clipboard","success");
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Failed to copy text to clipboard");
    }
  }
  const handleDownloadText = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "textfile.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    props.showAlert("Download Successful","success");
  }

  const handleOnChange = (event)=>{
  setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handlecClearText}>ClearText</button>
      <button className="btn btn-primary mx-2" onClick={handlecCopyText}>Copy to Clipboard</button>
      <button className="btn btn-primary mx-2" onClick={handleDownloadText}> Download Text</button>

      <div className="container my-3">
      <h2>Your Text summary</h2>
      <p>{text.split(" ").length} words and  {text.length} charatcters</p>
      <p>{0.008* text.split(" ").length} Minutes read </p>
      <h3>Preview </h3>
      <p>{text.length>0?text:"Enter something to preview it"}</p>
    </div>
    </div>
   
    </>
  );
}
// textForm.propTypes = {heading: PropTypes.string}
