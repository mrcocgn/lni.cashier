import { Routes, Route } from "react-router-dom";

interface AppRoutesProps {
  role: 'admin' | 'user' | null;
}

function AppRoutes({ role }: AppRoutesProps) {
  if (!role) {
    return <div>Please log in.</div>;
  }

  return (
    <Routes>
      {/* Gemeinsame Route */}
      <Route path="/" element={<div>Home</div>} />

      {/* Admin-only */}
      {role === 'admin' && (
        <>
          <Route path="/admin/dashboard" element={<div>Admin Dashboard</div>} />
          <Route path="/admin/settings" element={<div>Settings</div>} />
        </>
      )}

      {/* User-only */}
      {role === 'user' && (
        <>
          <Route path="/user/profile" element={<div>User Profile</div>} />
          <Route path="/user/orders" element={<div>User Orders</div>} />
        </>
      )}

      {/* Fallback */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default AppRoutes;
