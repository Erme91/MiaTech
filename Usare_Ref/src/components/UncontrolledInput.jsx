import { useState } from "react";
import { useRef } from "react";

const UncontrolledInput = () => {

    const inputRef = useRef(null);
    const [text, setText] = useState("");

    function handleClick(event) {
        event.preventDefault();
        inputRef.current.focus();
        alert(`You typed this: ${text}`)
    }

    return (
        <>
        <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} placeholder="Type here..."/>
        <button onClick={handleClick}>Click here</button>
        </>
    )
}

export default UncontrolledInput