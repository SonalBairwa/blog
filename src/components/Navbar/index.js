import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

const Navbar=(props)=> {

    const [search,setSearch]=useState(false);

    const submitSearch = (e) =>{
        e.preventDefault();
        alert("im search");
    }

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search? 'searchInput active':'searchInput';
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                {/* <li><NavLink to="/about-us">About Us</NavLink></li> */}
                <li><NavLink to="/post/1">Posts</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch} >
                <input type="text" className={searchClass} placeholder="Search" />
                <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search2.png')} alt="Search" width="30" />
                </form>
            </div>
        </div>
    )
}

export default Navbar;
