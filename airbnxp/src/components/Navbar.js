import React from 'react';
import hbnb_logo from './images/hbnb_logo.png';

export default function Navbar() {
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={hbnb_logo} alt="logo" />
                </a>
            </div>
        </nav>
    );
}