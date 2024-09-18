import React from 'react';
import { Link } from 'react-router-dom';
import './home_comp/nav.css';

const NavBar = () => {
    function showSidebar(){
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "flex";
    };
    function hideSidebar(){
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "none";
    };
    return (
        <>
            <nav>
                <ul className="sidebar">
                    <li onClick={hideSidebar}><Link to="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></Link></li>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Volunteer</Link></li>
                    <li><Link to="#">Contact</Link></li>
                    <li><Link to="#">Donation</Link></li>
                </ul>
                <ul>
                    <li className="logo">
                        <Link to="/">
                            <img src="logo_avabodh.png" alt="Logo" style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                marginRight: '10px'
                            }}/>
                        </Link>
                    </li>
                    <li className="hideOnMobile"><Link to="#">Home</Link></li>
                    <li className="hideOnMobile"><Link to="#">About</Link></li>
                    <li className="hideOnMobile"><Link to="#">Volunteer</Link></li>
                    <li className="hideOnMobile"><Link to="#">Contact</Link></li>
                    <li className="hideOnMobile"><Link to="#">Donation</Link></li>
                    <li className="menu-btn" onClick={showSidebar}><Link to="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></Link></li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;