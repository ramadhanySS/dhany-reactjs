import { Link } from "react-router-dom/cjs/react-router-dom"

const Routing = () => {
    return (
        <div>
            <nav>
                <Link to="/ ">Home</Link>
                <Link to="/about">about</Link>
                <Link to="/news">News</Link>
            </nav>
        </div>
    )
}

export default Routing ;