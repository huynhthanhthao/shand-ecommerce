import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ExceptShop = () => {
    const { account } = useSelector(({ accountReducer }) => accountReducer);

    return account?.role === "shop" ? <Navigate to="/profile" replace={true} /> : <Outlet />;
};

export default ExceptShop;
