import React, { useState } from 'react'

export default function Input(props) {
    const convertToUpper = () => {
        let temp = text.toUpperCase();
        setText(temp);

        props.showAlert('Converted to uppercase!!', 'success');
    }

    const convertToLower = () => {
        let temp = text.toLowerCase();
        setText(temp);

        props.showAlert('Converted to lowercase!!', 'success');
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Coppied to clipboard!!', 'success');

    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));

        props.showAlert('Extra spaces has been removed!!', 'success');
    }

    // const toOriginaltext = () => {
    //     setText(originalText);

    //     props.showAlert('Converted to original text!!','warning');
    // }

    const clearText = () => {
        let temp = '';
        setText(temp);

        props.showAlert('Text cleared!!', 'danger');
    }

    const handleOnchange = (event) => {
        setText(event.target.value);

        // let temp = event.target.value;
        // setoriginalText(temp);
    }
    const [text, setText] = useState('');
    // const [originalText, setoriginalText] = useState(text);
    return (
        <>
            <h1 className={`text-${props.theme === 'light' ? 'dark' : 'light'}`}>{props.headingText}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Enter text here..." value={text} onChange={handleOnchange} id="userInputArea" rows="10" style={{ backgroundColor: props.theme === 'light' ? 'white' : '#090d38', color: props.theme === 'light' ? 'black' : 'white' }}></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={convertToUpper}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={convertToLower}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={copyToClipboard}>Copy to clipboard</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={removeExtraSpaces}>Remove extra spaces</button>
            {/* <button className="btn btn-primary mx-2" onClick={toOriginaltext}>Reset</button> */}
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
            <div className={`container my-4 px-0 text-${props.theme === 'light' ? 'dark' : 'light'}`}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} minutes read</p>
                {/* <p>{wordCounter} words and {text.length} characters</p> */}
            </div>
        </>
    )
}
