// src/components/Header.tsx
import React, { useState } from "react";
import "./header.module.css";
interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  const [activeNav, setActiveNav] = useState<string>("clientes");

  const handleNavClick = (nav: string) => {
    setActiveNav(nav);
  };

  return (
    <header className=" border-bottom shadow-sm">
      <div className="d-flex container  border-0 justify-content-between align-items-center p-3 px-5 ">
      <div className="logo">
        <img
          src="/logo.png"
          alt="Logo"
          style={{ height: "40px" }}
          className="me-3"
        />
      </div>
      <nav className="d-flex gap-4 ">
        <a
          href="#clientes"
          className={`text-decoration-none  ${activeNav === "clientes" ? " fw-normal text-decoration-underline" : "text-black"}`}
          onClick={() => handleNavClick("clientes")}
        >
          Clientes
        </a>
        <a
          href="#clientes-selecionados"
          className={`text-decoration-none  ${activeNav === "clientes-selecionados" ? " fw-normal text-decoration-underline" : "text-black"}`}
          onClick={() => handleNavClick("clientes-selecionados")}
        >
          Clientes Selecionados
        </a>
        <a
          href="/"
          className={`text-decoration-none  ${activeNav === "sair" ? " fw-normal text-decoration-underline" : "text-black"}`}
          onClick={() => handleNavClick("sair")}
        >
          Sair
        </a>
      </nav>
      <div className="user-info">
        <span className="fw-medium text-black ">Olá, {username}!</span>
      </div>
      </div>
    </header>
  );
};

export default Header;
