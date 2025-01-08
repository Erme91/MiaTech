import { useState } from "react";

const SimpleCounter = () => {
    const [count, setCount] = useState(0);
    const addNumber = () => {
        setCount(0);
    }

    return(
        <>
        <div>Count: {count}</div>
        <button onClick={addNumber}>Click!</button>
        </>
    )
}

export default SimpleCounter