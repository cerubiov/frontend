import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Mi Proyecto</h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Inicio
          </Link>
          <Link to="/login" className="hover:text-gray-300">
            Iniciar Sesión
          </Link>
          <Link to="/register" className="hover:text-gray-300">
            Registrarse
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
