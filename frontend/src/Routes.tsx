import { Routes, Route } from "react-router-dom";

// User Routes
import EndOfDay from "./pages/end-of-day/EndOfDay";
import Login from "./pages/login/Login";
import Pos from "./pages/pos/Pos";
import SupportOutbox from "./pages/support-outbox/SupportOutbox";
import Sales from "./pages/sales/Sales";

// Admin Routes
import Customers from "./pages/customers/Customers";
import Dashboard from "./pages/dashboard/Dashboard";
import Discounts from "./pages/discounts/Discounts";
import Employees from "./pages/employees/Employees";
import Exports from "./pages/exports/Exports";
import Logs from "./pages/logs/Logs";
import Products from "./pages/products/Products";
import Register from "./pages/register/Register";
import Services from "./pages/services/Services";
import Settings from "./pages/settings/Settings";
import SupportInbox from "./pages/support-inbox/SupportInbox";


function AppRoutes() {
    return ( 
        <Routes>
            {/* User Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/pos" element={<Pos />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/support-outbox" element={<SupportOutbox />} />
            <Route path="/end-of-day" element={<EndOfDay />} />

            {/* Admin Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/exports" element={<Exports />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/register" element={<Register />} />
            <Route path="/services" element={<Services />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support-inbox" element={<SupportInbox />} />
        </Routes>
     );
}

export default AppRoutes;