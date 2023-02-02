import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar">
                <ul className="nav-links">
                    <Link to='/'>Home</Link>
                    <Link to='/Profile'>Profile</Link>
                </ul>
        </div>
    )
}

export default Nav