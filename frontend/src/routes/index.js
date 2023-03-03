import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Profile from "../pages/Profile/Profile";
import Admin from "../pages/Admin/Admin";

export const publicRoutes = [
    { path: "/", component: Home },
    { path: "/product/:id", component: Product },
    { path: "/profile/", component: Profile },
    { path: "/admin/", component: Admin, layout: null },
];

export const privateRoutes = [];
