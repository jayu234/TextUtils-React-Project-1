import React from 'react';
import PropTypes from 'prop-types';
// import {
//     // BrowserRouter as Router,
//     // Switch,
//     // Route,
//     a
//   } from "react-router-dom";

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
                <div className="container-fluid">
                    {/* eslint-disable-next-line*/}
                    <a className="navbar-brand" href="#">{props.titleText}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* eslint-disable-next-line*/}
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-a" href="/about">About</a>
                            </li> */}
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.changeMode} style={{cursor: 'pointer'}} checked={props.theme==='dark'}/>
                            <label className={`form-check-label text-${props.theme==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault" style={{cursor: 'pointer'}}>Dark</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
Navbar.propTypes = {
    titleText: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
    titleText: 'Title goes here',
    aboutText: 'about goes here'
};
