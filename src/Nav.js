import React, { useState, useEffect} from 'react'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);   
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="../img/netflix.png"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://i.pinimg.com/564x/9a/c9/58/9ac95873feeecc3e600326baa4a8a7ee.jpg"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav
