import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
       // console.log("Upper case was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showalert("converted to upper case","success");
    }
    const handlelowClick =()=>{
        // console.log("Upper case was clicked" + text);
         let newText= text.toLocaleLowerCase();
         setText(newText)
         props.showalert("converted to lower case","success");
    }
    const handleclearClick =()=>{
        // console.log("Upper case was clicked" + text);
         let newText= '';
         setText(newText)
         props.showalert("text has been deleted","success");
    }
        
    const handleOnChange =(event)=>{
     //   console.log("On changed");
        setText(event.target.value);
    }
    const handlecopy=()=>{
      var text = document.getElementById("my-box");
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showalert("text has been copied","success");
    }
    const handleextraspaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showalert("extra space has been resolved ","success");
    }
    const [text, setText]= useState('');
    // setText("new text");
    
    return (
        <>
<div className="container" style={{color:props.mode==='dark' ?'white':'green'}}>
<h1>{props.heading} </h1>
<div className="mb-3">

<textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode==='dark' ?'#13466e':'white',color:props.mode==='dark' ?'white':'green'}} id="my-box" rows="10"></textarea>
</div>
<button type="button" className="btn btn-success mx-1 my-1" onClick={handleUpClick}> convert to upper case</button>

<button type="button" className="btn btn-success mx-1 my-1" onClick={handlelowClick}> convert to lower case</button>
<button type="button" className="btn btn-success mx-1 my-1" onClick={handleclearClick}> text clear</button>
<button type="button" className="btn btn-success mx-1 my-1" onClick={handlecopy}> copy text</button>
<button type="button" className="btn btn-success mx-1 my-1" onClick={handleextraspaces}>Handle extra spaces</button>

</div>
<div className="container my-3" style={{color:props.mode==='dark' ?'white':'green'}}>

<h1> your text summary</h1>
<p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
<p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
<h2>preview</h2>
<p>{text.length>0?text : "write something to preview"}</p>


</div>
</>
)
}
