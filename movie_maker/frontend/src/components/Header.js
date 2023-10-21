import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return (
        <div className="topnav" id="header">
            <Link smooth to="">Movie Maker</Link>
            <Link smooth to="#addMovie" className="add-button">Add Movie</Link>
        </div>
    );
}
export default Header;