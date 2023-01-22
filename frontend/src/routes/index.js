import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
export const publicRoutes = [
    { path: "/", component: Home },
    { path: "/product/:id", component: Product },
];

export const privateRoutes = [];
