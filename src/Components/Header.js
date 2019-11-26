import React from "react";
import { Link } from "react-router-dom";

import '../assets/styles/header.css';

const Header = () => (
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/tiendas">Tiendas</Link></li>
        <li><Link to="/compras">Compras</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
        <li><Link to="/login">Salir</Link></li>
      </ul>
    </nav>
);

export default Header;