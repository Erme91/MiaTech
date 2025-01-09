import { useState } from "react";

const SimpleCounter = () => {
    const [count, setCount] = useState(0);
    const addNumber = () => {
        setCount(count + 1);
    }

    const Decrement = () => {
        if (count != 0){
            setCount(count - 1)
        }
    }

    const Reset = () => {
        setCount(0)
    }

    return(
        <>
        <div>Count: {count}</div>
        <button onClick={addNumber}>Click!</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
        </>
    )
}

export default SimpleCounter