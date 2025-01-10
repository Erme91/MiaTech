import { useState } from "react";

const LoginForm = () => {
    const [user, setUser] = useState ('');
    const Username = (event) => {
        setUser(event.target.user)
        console.log("Username")
    }

    const [pass, setPass] = useState ('');
    const Password = (event) => {
        setPass(event.target.pass)
        console.log("Password")
    }

    return (
        <>
        <form action="">
            <input type="text" name="user" value={user} onInput={Username}/>
            <input type="text" name="pass" value={pass} onInput={Password}/>
        </form>
        </>
    )
}

export default LoginForm