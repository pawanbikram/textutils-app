import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextField(props) {

    let initialText = "Enter the text here!";
    const [text, setText] = useState(initialText);

    const handleOnChange = (e) => {
        console.log("On Change");
        let newText = e.target.value;
        setText(newText);
    }

    const handleUC = () => {
        console.log("Upper Case");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLC = () => {
        console.log("Lower Case");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleRC = () => {
        console.log("Reverse Case");
        let newText = text.split("").reverse().join("");
        setText(newText);
    }

    const handleCEFL = () => {
        console.log("Capitalize Each First Letter");
        let newText = text.split(" ").map((e) => { return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(); }).join(" ");
        setText(newText);
    }

    const handleRES = () => {
        console.log("Remove Extra Space");
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
    }

    const handleCopyT = () => {
        console.log("Copy Text");
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleClearT = () => {
        console.log("Clear Text");
        let newText = "";
        setText(newText);
    }

    return (
        <div className="container my-3" style={props.mode === "light" ? { color: "black" } : { color: "white" }}>
            <h2>{props.title}</h2>
            <div className="mb-3">
                <textarea name="myBox" id="myBox" value={text} onChange={handleOnChange} cols="30" rows="10" className="form-control" style={props.mode === "light" ? { color: "black", backgroundColor: "white" } : { color: "white", backgroundColor: "grey" }}></textarea>
            </div>
            <div className="mb-3">
                <button className={`btn btn-sn btn-outline-${props.btn}`} onClick={handleUC}>Upper Case</button>
                <button className={`btn btn-sn btn-outline-${props.btn} mx-2`} onClick={handleLC}>Lower Case</button>
                <button className={`btn btn-sn btn-outline-${props.btn}`} onClick={handleRC}>Reverse Case</button>
                <button className={`btn btn-sn btn-outline-${props.btn} mx-2`} onClick={handleCEFL}>Capitalize Each First Letter</button>
                <button className={`btn btn-sn btn-outline-${props.btn}`} onClick={handleRES}>Remove Extra Space</button>
                <button className={`btn btn-sn btn-outline-${props.btn} mx-2`} onClick={handleCopyT}>Copy Text</button>
                <button className={`btn btn-sn btn-outline-${props.btn}`} onClick={handleClearT}>Clear Text</button>
            </div>
            <div className="mb-3">
                <h2>{props.summary}</h2>
                {/* text.split(/\s/g).join("").length or text.replace(/\s/g, "").length */}
                {/* {console.log(text.split(/\s/).filter((e)=>{return e !== "";}).length)} */}
                <p>{text.split(/\s/).filter((e) => { return e !== ""; }).length} words, {text.length} characters and {text.split(/\s/g).join("").length} characters without white spaces.</p>
                <p>{(text.length) * 0.008} minutes to read.</p>
            </div>
            <div className="mb-3">
                <h2>Preview</h2>
                <b>{text.length === 0 ? "Write something above in the Text Box to preview it here!" : text}</b>
            </div>
        </div>
    )
}

TextField.defaultProps = {
    title: "Enter The Text Below To Analyze",
    summary: "Text Summary"
}

TextField.propTypes = {
    title: PropTypes.string,
    summary: PropTypes.string
}