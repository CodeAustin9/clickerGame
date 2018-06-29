import React from "react";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
<strong>The Clicky Game!</strong>
    </a>
   

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
           Click on an image to start the Game!   <span className="sr-only">(current)</span>
         
        </li>

        <li className="score">
        <li>Score: 0 | Top Score: 0</li>  
        </li>
        
        
      </ul>
      
    </div>
  </nav>
);

export default Navbar;
