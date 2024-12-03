// src/components/Home.tsx
import { useUser } from "../context/UserContext";
import Header from "../header/header";
const Home: React.FC = () => {
  const { username } = useUser();

  return (
    <div>
      <Header username={username} ></Header>
    </div>
  );
};

export default Home;
