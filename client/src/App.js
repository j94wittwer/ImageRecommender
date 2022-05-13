import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="scrap">
      
      <Router>
        <Routes>
          <Route exact path="/homepage" element={<Login />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
      </div>
    
  );
}

export default App;
