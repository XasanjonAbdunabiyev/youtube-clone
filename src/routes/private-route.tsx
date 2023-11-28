import { ReactNode } from "react";

import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }: { children: ReactNode }) {
    const token = localStorage.getItem("token");
    if (!token) {
        return <Navigate to="/login" />
    } else {
        return children
    }
}