import React from 'react';
import './style.css';
function Header() {
    return (
        <div>
            <header className="header">
                <nav className="headerMenu">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                </nav>
                <div>
                    <a href="https://github.com/SonalBairwa/">
                        <img  className="searchIcon" src={require('../../assets/blog-images/git.png')} alt="Search" width="30" />
                    </a>
                    <a href="https://www.linkedin.com/in/sonal-bairwa-51004711a/">
                        <img  className="searchIcon" src={require('../../assets/blog-images/linkedin2.png')} alt="Search" width="30" />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Header;
