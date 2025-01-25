import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <div>
                <Link to="/details">Details</Link>
            </div>
        </nav>
    )
}

export default Navbar