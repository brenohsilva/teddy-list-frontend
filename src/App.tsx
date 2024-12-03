import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login/login'
import Home from "./components/home/home";
import { UserProvider } from "./components/context/UserContext";

function App() {

  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </UserProvider>
  )
}

export default App
