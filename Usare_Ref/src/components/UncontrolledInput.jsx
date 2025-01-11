import { useRef } from "react";

const UncontrolledInput = ({placeholder, onSubmit}) => {
    const inputRef = useRef(null);

    function handleClick() {
        if (inputRef.current) {
            const value = inputRef.current.value;
            onSubmit(value);
        }
    }

    return (
        <>
            <input type="text" ref={inputRef} placeholder={placeholder} />
            <button onClick={handleClick}>Click here</button>
        </>
    )
}

export default UncontrolledInput