import { useState } from "react";

const TextInput = () => {
    const [text, setText] = useState('');
    const Input = (event) => {
        setText(event.target.value)
        console.log(event.target.value)
    }

    return (
        <>
            <input type="text" value={text} onInput={Input}/>
            <button onClick={Input}>Send data</button>
        </>
    )
}

export default TextInput