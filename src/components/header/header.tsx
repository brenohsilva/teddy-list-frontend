import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.module.css";

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  const location = useLocation(); 

  return (
    <header className="border-bottom shadow-sm">
      <div className="d-flex container border-0 justify-content-between align-items-center p-3 px-5">
        <div className="logo">
          <img
            src="/logo.png"
            alt="Logo"
            style={{ height: "40px" }}
            className="me-3"
          />
        </div>
        <nav className="d-flex gap-4">
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
          <span className="fw-medium text-black">Olá, {username}!</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
