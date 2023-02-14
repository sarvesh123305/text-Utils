import React,{useState} from 'react'
import Swal from "sweetalert2";
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
    const handleClearClick = () =>{
        setText("");
    }
    const handleSearchClick = () =>{
        let newtext = text.search("Hello");
        if(!newtext)
        Swal.fire(
            'Found!',
            '',
            'success'
          );
        else
        
      Swal.fire(
            'Not Found!',
            '',
            'error'
          );
    }
    const getWords = () => {
        var words = 0 ;
        words = text.split(" ").length;

        if(text === "")
        {
            words = 0;
        }
        else if(text.startsWith(" ")){
            if(words >= 1)
            words--;
        }
        else{
            if(text.endsWith(" ")){
                if(words >= 1)
            words--;
            }
        }

        return words;
    }
    const handleCopyClipboardClick =  () =>{
        navigator.clipboard.writeText(text.toString()); 
        Swal.fire(
            'Copied to Clipboard!',
            '',
            'success'
          );
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.lang = "en";
        msg.text = text;
        msg.pitch = 1;
        msg.rate = 0.5;
        window.speechSynthesis.speak(msg);

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
<button className="btn btn-success mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-light mx-1" onClick={handleClearClick}>Clear</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

<button className="btn btn-secondary mx-1" onClick={handleSearchClick}>Search</button>
<button className="btn btn-secondary mx-1" onClick={handleCopyClipboardClick}>Copy to Clipboard</button>


    </div>
    <div className="container my-3">
        <h2>Your Text Summary : </h2>
        <p> {
        // text.split(" ").length
        getWords()
        } Words {text.length} Characters</p>
        <p>  Average minutes Reading Time Required : { 0.008 * text.split(" ").length }</p>

        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
