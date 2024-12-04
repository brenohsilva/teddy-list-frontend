// src/components/SideMenu/SideMenu.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./sideMenu.module.css";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <div
      className={`${styles.offcanvasMenu} ${isOpen ? styles.open : ""}`}
      onClick={onClose}
    >
      <div
        className={styles.offcanvasContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5">
          <img src="src/assets/teddy-logo.jpeg" alt="" />
        </div>
        <button className={`${styles.closeButton}`} onClick={onClose}>
          <i className="bi bi-x-circle-fill"></i>
        </button>
        <nav className="d-flex flex-column gap-3">
          <Link
            to="/home"
            className={`text-decoration-none ${
              location.pathname === "/home"
                ? "fw-bold text-decoration-underline"
                : "text-black"
            }`}
            onClick={onClose}
          >
            <i className="bi bi-house-door-fill me-2"></i>
            Home
          </Link>
          <Link
            to="/home"
            className={`text-decoration-none ${
              location.pathname === "/"
                ? "fw-bold text-decoration-underline"
                : "text-black"
            }`}
            onClick={onClose}
          >
            <i className="bi bi-person-fill me-2"></i>
            Clientes
          </Link>
          <Link
            to="#Produtos"
            className={`text-decoration-none ${
              location.pathname === "#Produtos"
                ? "fw-bold text-decoration-underline"
                : "text-black"
            }`}
            onClick={onClose}
          >
            <i className="bi bi-ui-checks-grid me-2"></i>
            Produtos
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
