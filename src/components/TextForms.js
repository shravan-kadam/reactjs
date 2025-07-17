
import React , {useState} from 'react'

export default function TextForms(props) {

    const handleUpClick = () =>{
        //console.log("Upercase was clicked" + text);
    
        let newText = text.toUpperCase();
         setText(newText);
         props.showAlert("Converted to uppercase","success");

    }
     
    const handleLoClick = () =>{
        //console.log("Upercase was clicked" + text);
    
        let newText1 = text.toLowerCase();
         setText(newText1);
          props.showAlert("Converted to lowercase","success");

    }

    const handleReverseClick = (event) =>{
        //console.log("On Change");

        let newText2 = text.split('').reverse().join('');
        setText(newText2);
         props.showAlert("text reversed","success");
    }
    
       const handleOnChange = (event) =>{
        //console.log("On Change");
        setText(event.target.value);
        
    }


     const [text, setText] = useState('');

  return (
    <>
    <div className="container"> 
       <h1>{props.heading}  </h1>
        <div class="mb-3">
       
     <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'light' ? 'Dark' : 'Light'}} id="myBox" rows="8"></textarea>
    </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-1 "onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 "onClick={handleReverseClick}>Reverse Text</button>
    </div>
    <div className="container my-3">
        <h2> Your text summary</h2>
        <p>
            {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox to preview here"}</p>
       

    </div>
    </>
  )
}
