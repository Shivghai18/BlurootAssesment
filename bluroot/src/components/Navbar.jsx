import React from 'react';

import {Link} from "react-router-dom";

import './Navbar.css';

function Navbar(){
return <nav className="navbar bg-dark container"> 
<h4><Link className='link' to="/">Home</Link></h4>
<h4><Link className='link' to="/Q1">Q1</Link></h4>
<h4><Link className='link' to="/Q2">Q2</Link></h4>
</nav>

}

export default Navbar;