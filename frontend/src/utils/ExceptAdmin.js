import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ExceptAdmin = () => {
    const { account } = useSelector(({ accountReducer }) => accountReducer);

    return account?.role === "admin" ? <Navigate to="/admin/student-list" replace={true} /> : <Outlet />;
};

export default ExceptAdmin;
