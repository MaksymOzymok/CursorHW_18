import React from "react";
import "./header.css"
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <>
            <ul className="navigation">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/posts'>Posts</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
            </ul>

        </>
    )
};
export default Header;