import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import SignUpForm from "./pages/signupform";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import DashboardPage from "./Layouts/Dashboard";
import EmployeesPage from "./Layouts/Employees";
import HRServicesPage from "./Layouts/HrService";
import PayrollPage from "./Layouts/Payrole";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginPage />} />

       
        <Route path="/dashboard" element={<Dashboard />}>
       
          <Route index element={<DashboardPage />} />
          <Route path="employees" element={<EmployeesPage />} />
          <Route path="hr-services" element={<HRServicesPage />} />
          <Route path="payroll" element={<PayrollPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
