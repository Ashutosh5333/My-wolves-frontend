import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css';


const Navbar = () => {
const navigate = useNavigate()


    return (
        <div style={{ display: "flex", padding: "0 10px", position: "relative" }}>
            <div className="navbar-title">
                <Link to='/'>
                     Task Mangement
                </Link>
            </div>

        
        </div>
    );
};

export default Navbar;
