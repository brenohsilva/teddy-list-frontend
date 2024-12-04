import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./header.module.css";
import SideMenu from "../sideMenu/sideMenu";

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-bottom shadow-sm">
      <div className="d-flex container border-0 justify-content-between align-items-center p-3 px-5">
        <div className="d-flex align-items-center">
          <button
            className="btn btn-none me-3"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <i className="bi bi-list fs-3"></i> 
          </button>
          <div className="logo">
            <img
              src="src/assets/teddy-logo.jpeg"
              alt="Logo Teddy"
              style={{ height: "40px" }}
              className="me-3"
            />
          </div>
        </div>
        <nav className="d-none d-md-flex gap-4">
          <Link
            to="/home"
            className={`text-decoration-none ${
              location.pathname === "/home"
                ? "fw-normal text-decoration-underline"
                : "text-black"
            }`}
          >
            Clientes
          </Link>
          <Link
            to="/clientes-selecionados"
            className={`text-decoration-none ${
              location.pathname === "/clientes-selecionados"
                ? "fw-normal text-decoration-underline"
                : "text-black"
            }`}
          >
            Clientes Selecionados
          </Link>
          <Link
            to="/"
            className={`text-decoration-none ${
              location.pathname === "/"
                ? "fw-normal text-decoration-underline"
                : "text-black"
            }`}
          >
            Sair
          </Link>
        </nav>
        <div className="user-info">
          <span className="text-black">
            Olá, <strong>{username}!</strong>
          </span>
        </div>
      </div>

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
