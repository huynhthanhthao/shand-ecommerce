import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const RequireAdmin = () => {
    const { account } = useSelector(({ accountReducer }) => accountReducer);

    return account.role === "admin" ? <Outlet /> : <Navigate to="/" replace={true} />;
};

export default RequireAdmin;
