import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login/login';
import { UserProvider } from "./components/context/UserContext";

import Home from "./components/home/home";
import SelectedClientList from "./components/selectedClientList/selectedClientList";
import { SelectedClientsProvider } from "./components/context/SelectedClientContext";


function App() {
  return (
    <UserProvider>
      <SelectedClientsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/clientes-selecionados" element={<SelectedClientList />} />
          </Routes>
        </Router>
      </SelectedClientsProvider>
    </UserProvider>
  );
}

export default App;
