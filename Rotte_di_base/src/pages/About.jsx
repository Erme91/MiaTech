import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/")
    }

    return (
        <>
            <h2>About</h2>
            <p>La pagina Home mostra una lista di cose da fare.</p>
            <button onClick={handleNavigation}>Return to Home</button>
        </>
    )
}

export default About