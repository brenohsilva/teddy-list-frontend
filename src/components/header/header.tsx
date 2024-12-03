// src/components/Header.tsx
import React from "react";

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom shadow-sm">  
      <div className="logo">
        <img
          src="/logo.png"
          alt="Logo"
          style={{ height: "40px" }}
          className="me-3"
        />
      </div>
      <nav className="d-flex gap-4">
        <a href="#clientes" className="text-decoration-none text-dark">
          Clientes
        </a>
        <a href="#clientes-selecionados" className="text-decoration-none text-dark">
          Clientes Selecionados
        </a>
        <a href="#sair" className="text-decoration-none text-dark">
          Sair
        </a>
      </nav>

      <div className="user-info">
        <span className="fw-bold text-secondary">Olá {username}</span>
      </div>
    </header>
  );
};

export default Header;
