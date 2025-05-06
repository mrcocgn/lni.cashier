import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export default function StaffRoute() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  if (!['admin', 'staff'].includes(user.role)) return <Navigate to="/403" replace />;

  return <Outlet />;
}
