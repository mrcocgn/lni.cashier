import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/useAuth';

export default function AdminRoute() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== 'admin') return <Navigate to="/403" replace />;

  return <Outlet />;
}
