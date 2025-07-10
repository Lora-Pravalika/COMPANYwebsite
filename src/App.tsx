import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import SignUpForm from "./pages/signupform";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Navigate to="/signup" />} />
        
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
