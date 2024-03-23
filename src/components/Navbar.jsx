import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/navbar.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#0E2F44"}}>

            <div className="container-fluid">
                {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
                <span className="nav__item_space">&nbsp;</span>

                <div className="logo__icon">
                    <i className="bi bi-cash-coin"></i>&nbsp;
                </div>
                
                <a className="navbar-brand logo" href="#"><b>Itio</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <span className="nav__item_space">&nbsp;</span>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" >Dashboard</a>
                    </li>

                    <span className="nav__item_space">&nbsp;</span>

                    <li className="nav-item">
                        <a className="nav-link active" href="#" >Wallet</a>
                    </li>

                    <span className="nav__item_space">&nbsp;</span>
                 

                    <li className="nav-item">
                        <a className="nav-link active" href="#" >Settings</a>
                    </li>

                    <span className="nav__item_space">&nbsp;</span>

                    <li className="nav-item">
                        <a className="nav-link active" href="#" >Help & Center</a>
                    </li>

                </ul>

                <form className="d-flex" role="search">
                    <div className="input-group">
                        <input className="form-control me-5" type="search" placeholder="Search" aria-label="Search" style={{borderRadius: "20px"}}/>
                        <span className="input-group-text search-icon" >
                            <i className="bi bi-search"></i>
                        </span>
                    </div>
                    
                    {/* Hidden Button */}
                    <button className="btn btn-outline-success d-none" type="submit">Search</button>
                </form>

                {/* Notification Icon */}
                <button className="btn btn-outline-secondary rounded-circle notification_profile" type="submit">
                    <i className="bi bi-bell" style={{color: "white"}}></i>
                </button>

                &nbsp;&nbsp;

                {/* Profile Pic */}
                <button className="btn btn-outline-secondary rounded-circle notification_profile" type="submit">
                    <img src="./vite.svg" className="img-fluid profile_image" alt="Profile" />
                </button>

                </div>
            </div>
        </nav>
        </>
    )
}



export default Navbar;