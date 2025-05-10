import { Routes, Route } from "react-router-dom";

interface RouteProps {
  userRole: "admin" | "user";
  admin: JSX.Element;
  user: JSX.Element;
}

function AppRouter({ userRole, admin, user }: RouteProps) {
  return (
    <Routes>
      {userRole === "admin" && <Route path="/" element={admin} />}
      {userRole === "user" && <Route path="/" element={user} />}
    </Routes>
  );
}

export default AppRouter;
