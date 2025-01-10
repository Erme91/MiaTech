import { useState, useEffect } from "react";

const Titolo_contatore = () => {
    const [counter, setCounter] = useState(0);
    const Increment = () => {
        setCounter(counter + 1)
    }

    const Decrement = () => {
        if (counter != 0) {
            setCounter(counter - 1)
        }
    }

    const Reset = () => {
        setCounter(0)
    }

    useEffect(() => {
        document.title = (`Add some value ${counter}`)
    }, [counter])

    return (
        <>
            <h2>Add some value: {counter}</h2>
            <h4>Counter: {counter}</h4>
            <button onClick={Increment}>Add number</button>
            <br />
            <button onClick={Decrement}>Remove number</button>
            <br />
            <button onClick={Reset}>Reset all</button>
        </>
    )
}

export default Titolo_contatore