import React, {useState} from 'react'

export default function TextForm(props) {

  const [Text, setText] = useState('Enter text here');

    const handleUpClick = ()=>{
        //console.log("UpperCase was clicked!" + Text);
        // let newText = Text.toUpperCase();
        // setText(newText);

        setText(Text.toUpperCase());
        props.showalert("Converted to UpperCase", "success");
    }
    const handleLoClick = ()=>{
      setText(Text.toLowerCase());
      props.showalert("Converted to LowerCase", "success");
    }

    const handleClearClick = ()=>{
      setText('');
      props.showalert("Text is Cleared!", "success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleCopyClick = () =>{
      var text =document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showalert("Text Copied!", "success");
    }

    // const handleSpaceRemoveClick = ()=>{
    //   var stringtext = {Text};
    //   var removed = stringtext.split(" ").join("");

    //   document.querySelector('#myBox').textContent
    //             = removed;
    // }

  return (
    <>
    <div className={`container text-${props.mode === 'light' ? 'dark':'white'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <div className="container my-3">
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleSpaceRemoveClick}>Remove Extra Sapce</button> */}
        </div>
    </div>
    <div className={`container my-3 text-${props.mode === 'light' ? 'dark':'white'}`}>
      <h2>Your text Summary</h2>
      <p>{Text.split(" ").length} and {Text.length} characters</p>
      <h2>Preview</h2>
      <p>{Text.length>0 ? Text :"Nothing to Preview"}</p>
    </div>
    </>
  )
}
