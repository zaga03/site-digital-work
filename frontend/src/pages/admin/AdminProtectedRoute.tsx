import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";


interface AdminProtectedRouteProps {
  children: ReactNode;
}

export default function AdminProtectedRoute({
  children,
}: AdminProtectedRouteProps) {
  const token = localStorage.getItem(
    "digital-work-admin-token"
  );

  if (!token) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  return <>{children}</>;
}