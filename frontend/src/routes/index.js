import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Profile from "../pages/Profile/Profile";
import Admin from "../pages/Admin/Admin";
import Cart from "../pages/Cart/Cart";
import ConfirmOrder from "pages/ConfirmOrder/ConfirmOrder";
import SearchResult from "pages/SearchResult/SearchResult";
import SearchSameProduct from "pages/SearchSameProduct/SearchSameResult";

export const publicRoutes = [
    { path: "/", component: Home },
    { path: "/product/:id", component: Product },
    { path: "/profile/", component: Profile },
    { path: "/admin/", component: Admin, layout: null },
    { path: "/cart/", component: Cart },
    { path: "/confirm-order/", component: ConfirmOrder },
    { path: "/search/:key", component: SearchResult },
    { path: "/search-same/:key", component: SearchSameProduct },
];

export const privateRoutes = [];
