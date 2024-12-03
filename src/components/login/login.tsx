// src/components/Home.tsx
import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const { setUsername } = useUser();

  
  const handleButtonClick = () => {
    if (name.trim()) {
      alert(`Bem-vindo, ${name}!`);
      setUsername(name);
      navigate("/home");
    } else {
      alert("Por favor, insira seu nome.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Olá, seja bem-vindo!</h1>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleButtonClick} className={styles.button}>
        Entrar
      </button>
    </div>
  );
};

export default Login;
