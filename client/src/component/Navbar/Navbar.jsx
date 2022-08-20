import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (

    <nav className="navbar bg-success">
      <div className="container-fluid">
        <Link className="btn btn-light btn-lg" to="/">Home</Link>
        <Link className="btn btn-light btn-lg" to="/signup">Регистрация</Link>
        <Link className="btn btn-light btn-lg" to="/signin">Вход</Link>

      </div>
    </nav>
  );
}

export default Navbar;
