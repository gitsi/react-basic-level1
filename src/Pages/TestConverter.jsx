import { useState } from "react";

function TextConverter(){

    const [text, setText] = useState("");

    function handleChange(e){
        setText(e.target.value);
    }

    function handleClear(){
        setText("");
    }

    function handleUpperCase(){
        setText(text.toUpperCase());
    }

    function handleLower(){
        setText(text.toLowerCase());
    }

    function handleCopy(){
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard");
    }

    function handleRemoveSpace(){

        const newText = text.replace(/\s+/g, " ").trim();
        setText(newText);
    }

    // word count
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    
    const characters = text.length;

    return(
        <div style={styles.container}>
            <h2>Text Converter App</h2>

            <textarea value={text} onChange={handleChange} placeholder="Enter your text" style={styles.textarea}/>

            {/* buttons */}
            <div style={styles.buttonGroup}>

                <button onClick={handleUpperCase}>Upper Case</button>
                <button onClick={handleLower}>Lower Case</button>
                <button onClick={handleRemoveSpace}>Remove Spaces</button>
                <button onClick={handleCopy}>Copy Text</button>
                <button onClick={handleClear}>clear</button>
            </div>
            {/* counts */}
            <p>
                words: <b> {wordCount}</b> | Characters:{" "} <b>{characters}</b>
            </p>
            {/* preview */}
            <h3>Preview</h3>
            <p style={styles.preview}>
                {text || "Nothing to preview"}
            </p>
        </div>
    );

}

// Inline styles
const styles = {
  container: {
    width: "60%",
    margin: "auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  textarea: {
    width: "100%",
    height: "150px",
    padding: "10px",
    fontSize: "16px",
  },
  buttonGroup: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  preview: {
    background: "#f4f4f4",
    padding: "10px",
  },
};
export default TextConverter