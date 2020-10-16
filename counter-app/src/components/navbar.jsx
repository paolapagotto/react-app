import React, { Component } from 'react';


//stateless functional component (sfc command):
const NavBar = ({ totalCounters }) => {
    return ( 
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
            Navbar <span className="badge badge-pill badge-secondary"> {totalCounters} </span>
            </a>
        </nav>
     );
};

 
export default NavBar;