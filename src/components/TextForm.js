import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase btn was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLowClick = () =>{
        // console.log("Lowercase btn was clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleOnChange = (event) =>{
        // console.log("handleOnChange btn was clicked");
        setText(event.target.value);

    }
    const[text,setText] = useState("");
    return (
        <>
    <div className='container'>
<div className="mb-3">
    <h1>{props.Heading} </h1>
  {/* <label htmlFor="myBox" className="form-label">{props.Heading}</label> */}
  <textarea className="form-control" placeholder='Enter Your text' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-success mx-1" onClick={handleLowClick}>Convert to Uppercase</button>

    </div>
    <div className="container my-3">
        <h1>Your Text Summary : </h1>
        <p> {text.split(" ").length} Words {text.length}Characters</p>
        <p>  Average minutes Reading Time Required : { 0.008 * text.split(" ").length }</p>

        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
