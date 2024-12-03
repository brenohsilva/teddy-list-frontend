// src/components/Home.tsx
import React, { useState } from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  const [name, setName] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleButtonClick = () => {
    if (name.trim()) {
      alert(`Bem-vindo, ${name}!`);
    } else {
      alert("Por favor, insira seu nome.");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-3 fs-4">Olá, seja bem-vindo!</h1>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={handleInputChange}
        className={styles.input}
      />
      <button onClick={handleButtonClick} className={styles.button}>
        Entrar
      </button>
    </div>
  );
};

export default Home;
