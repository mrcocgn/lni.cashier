import { Routes, Route } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import StaffRoute from "./StaffRoute";
import Login from "./auth/Login/Login";
import Register from "./auth/Register/Register";
import Dashboard from "./pages/Dashboard";


export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<div>Adminbereich</div>} />
      </Route>

      <Route element={<StaffRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="/403" element={<h2>Zugriff verweigert</h2>} />
    </Routes>
  );
}
