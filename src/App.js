import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Components/Registration";
import LogInPage from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard";
import LoginPage from "./Components/Login_page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/authentication" element={<LogInPage />} />
         <Route path="/dashboard" element = {<Dashboard />} />
         <Route path="/login" element = {<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
