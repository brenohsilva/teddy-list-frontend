// src/components/Home.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import ClientList from "../clientList/clientList";
import Header from "../header/header";

const Home: React.FC = () => {
  const { username } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      // Redireciona para login se username não estiver definido
      navigate("/");
    }
  }, [username, navigate]);

  return (
    <div>
      <Header username={username} />
      <ClientList />
    </div>
  );
};

export default Home;
