import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const RequireAuth = () => {
    const { account } = useSelector(({ accountReducer }) => accountReducer);
    return account ? <Outlet /> : <Navigate to="/" replace={true} />;
};

export default RequireAuth;
