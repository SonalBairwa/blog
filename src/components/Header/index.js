import React from 'react';
import './style.css';
function Header() {
    return (
        <div>
            <header className="header">
                <nav className="headerMenu">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                </nav>
                <div>
                    Social media linkss
                </div>
            </header>
        </div>
    )
}

export default Header;
