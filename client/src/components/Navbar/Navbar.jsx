import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (

    <nav className="navbar">
      <div className="container-fluid">
        <Link className="btn btn-light" to="/">Home</Link>
        <Link className="btn btn-light" to="/signup">Регистрация</Link>
        <Link className="btn btn-light" to="/signin">Вход</Link>
      </div>
    </nav>
  );
}

export default Navbar;
