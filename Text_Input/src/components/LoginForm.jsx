import { useState } from "react";

const LoginForm = () => {
    const [user, setUser] = useState ("");
    const [pass, setPass] = useState ("");

    const Submit = (event) => {
        event.preventDefault()
        alert(`Username: ${user} \n Password: ${pass}`)
    }
    
    return (
        <>
        <form onSubmit={Submit}>
            <label>Username:</label>
            <input type="text" name="user" value={user} onChange={(e) => setUser(e.target.value)}/>
            <label>Password:</label>
            <input type="text" name="pass" value={pass} onInput={(e) => setPass(e.target.value)}/>
            <br />
            <button onClick={Submit}>Submit</button>
        </form>
        </>
    )
}

export default LoginForm