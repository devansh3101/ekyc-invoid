import React from 'react';
import './Navbar.css';
import Logo from '../Images/Logo.png';
import { useState, useEffect } from 'react';

const Navbar = () => {

    const [menu, setMenu] = useState(true);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    const updateMenu = () => {
        if(window.innerWidth < 1000){
            setMenu(true);
        } else{
            setClick(false);
            setMenu(false);
        }
    }

    useEffect(() => {
        updateMenu();
        window.addEventListener("resize", updateMenu);
    }, [])

    const fakeAlert = () => {
        closeMobileMenu();
        alert("This feature will be available soon. Thank you for your patience.");
    }

    return (
        <div className = "navbar-container">
            <div className = "demo-logo">
                <img src={Logo} alt="Logo" className = "instantLogo" />
            </div>
            <div className = {menu? "menu-icon" : "menu-icon-hidden"} onClick = {handleClick} >
                <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <div className = {click ? "menu-items-dropdown" : !menu ? "menu-items" : "menu-items-resp"}>
                <div className = "menu-item" onClick ={fakeAlert}>
                    About the process
                </div>
                <div className = "menu-item" onClick ={fakeAlert}>
                    Privacy Terms
                </div>
                <div className = "menu-item" onClick ={fakeAlert}>
                    Why it is important?
                </div>
            </div>
        </div>
    )
}

export default Navbar
