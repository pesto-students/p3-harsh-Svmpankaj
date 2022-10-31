import React, { useState } from 'react'

export default function Body(props) {

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleLink = () => {
        console.log("I am a all copy");
        // var text = document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        // // document.getSelection().removeAllRanges();
        // setShortText()
        setFullText(text);
        setShortText(text.slice(0,10));
    }

    const handleCopy = () => {
        console.log("I am a copy");
        var text = document.getElementById("myBox3");
        text.select();
        navigator.clipboard.writeText(text.value);
        text.setSelectionRange(0,10);
    }

    const [text, setText] = useState('');
    const [fullText, setFullText] = useState('');
    const [shortText, setShortText] = useState('');




    return (
        <>
        <div className="container">
            <div className="container"><h1>More than just shorter Links</h1>
            <div><p>Build your brand's recognition and get detailed insights on how your links are performing</p></div>
            </div>
            
            <div className="mb-3">
                <textarea className='form-control' value={text} onChange={handleOnChange} id='myBox' ></textarea>
                <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleLink}>Shorten it!</button>
            </div>
            <div className="fcontainer">
            <input className='form-control my-2'  id='myBox2' onChange={() => {}} value={fullText} ></input>
            <input className='form-control my-2'  id='myBox3' onChange={() => {}}  value={shortText}></input>
            <button disabled={text.length ===0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            </div>
            </div>
        </>
    )
}
