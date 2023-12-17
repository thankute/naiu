import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }: { children: JSX.Element }) {
    const isLogin = localStorage.getItem("accessToken") || "";
    const location = useLocation();


    useEffect(() => {
        if (isLogin) {
            console.log('login')
        } else if (!isLogin) {
            console.log('is not login')
        }
    }, [isLogin])

    if (!isLogin) {
        return <Navigate to="/login" replace state={{ from: location }} />
    }

    return children;
}

export default PrivateRoute;
