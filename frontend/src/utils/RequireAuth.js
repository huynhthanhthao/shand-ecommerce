import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const RequireAuth = () => {
    const { account } = useSelector(({ accountReducer }) => accountReducer);
    console.log(account.role);
    return account ? <Outlet /> : <Navigate to="/" replace={true} />;
};

export default RequireAuth;
