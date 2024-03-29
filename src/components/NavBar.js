
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, Route } from "react-router-dom";
import Routing from './Routing';


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container> 
       
    <div className="menu-container">
      <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button>
      <div className='logo-hcl'><h1>Logo</h1></div>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
        <li> <Link to="/">Home</Link><br></br></li>
        <li> <Link to="Jewelary">Jewelary</Link><br></br></li>
        <li> <Link to="Clothes">Clothes</Link><br></br></li>
        

        </ul>
      </nav>
    </div>
    </Container>
  );
}

export default NavBar
