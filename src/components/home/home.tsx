// src/components/Home.tsx
import ClientList from "../clientList/clientList";
import { useUser } from "../context/UserContext";
import Header from "../header/header";
const Home: React.FC = () => {
  const { username } = useUser();

  return (
    <div>
      <Header username={username} ></Header>
      <ClientList></ClientList>
    </div>
  );
};

export default Home;
