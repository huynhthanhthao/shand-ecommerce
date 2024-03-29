import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Profile children
import InforAccount from "pages/Profile/InforAccount";
import ReceiveAddress from "pages/Profile/ReceiveAddress/ReceiveAddress";
import LoveProduct from "pages/Profile/LoveProduct";
import AddProductForm from "pages/Profile/AddProductForm/AddProductForm";
import AllProduct from "pages/Profile/AllProduct";
import EditProductForm from "pages/Profile/EditProductForm";
import Cart from "pages/Cart/Cart";
import OrderSent from "pages/Profile/OrderSent/OrderSent";
import DetailOrder from "pages/Profile/DetailOrder/DetailOrder";
import OrderReceive from "pages/Profile/OrderRecieve/OrderRecieve";
import Transaction from "pages/Profile/Transaction/Transaction";

// Admin children
import StudentAccount from "pages/Admin/Content/StudentAccount/StudentAccount";
import ShopAccount from "pages/Admin/Content/ShopAccount/ShopAccount";
import CategoryProduct from "pages/Admin/Content/CategoryProduct/CategoryProduct";
import EventList from "pages/Admin/Content/Event/EventList";
import SupportUser from "pages/Admin/Content/SupportUser/SupportUser";
import Report from "pages/Admin/Content/Report/Report";

import Loading from "./components/Loading";
import { useSelector } from "react-redux";

// import page
import Home from "pages/Home/Home";
import Profile from "pages/Profile/Profile";
import Admin from "pages/Admin/Admin";
import RequireAuth from "utils/RequireAuth";
import RequireAdmin from "utils/RequireAdmin";
import SearchResult from "./pages/SearchResult/SearchResult";
import Product from "pages/Product/Product";
import ConfirmOrder from "pages/ConfirmOrder/ConfirmOrder";
import SearchSameProduct from "pages/SearchSameProduct/SearchSameResult";
import Bill from "pages/Profile/Bill";
import ExceptShop from "utils/ExceptShop";
import ExceptAdmin from "utils/ExceptAdmin";
import NotFound from "pages/NotFound";
import SalesFee from "pages/Profile/SalesFee";
import FeeManage from "pages/Admin/Content/FeeManage/FeeManage";

function App() {
    const { isLoading } = useSelector(({ loadingReducer }) => loadingReducer);
    return (
        <div className="App relative">
            {isLoading && <Loading />}
            <ToastContainer />
            <Routes>
                <Route element={<ExceptAdmin />}>
                    <Route element={<ExceptShop />}>
                        <Route path="/search/:key" element={<SearchResult />}></Route>
                        <Route path="/search-same/:key" element={<SearchSameProduct />}></Route>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/product/:id" element={<Product />}></Route>
                    </Route>
                </Route>

                <Route element={<RequireAuth />}>
                    <Route element={<ExceptAdmin />}>
                        <Route element={<ExceptShop />}>
                            <Route path="/confirm-order/" element={<ConfirmOrder />}></Route>
                            <Route path="/cart" element={<Cart />}></Route>
                        </Route>

                        <Route path="/profile/*" element={<Profile />}>
                            <Route path="account" element={<InforAccount />}></Route>
                            <Route path="salesfee" element={<SalesFee />}></Route>
                            <Route path="address" element={<ReceiveAddress />}></Route>
                            <Route path="transaction" element={<Transaction />}></Route>
                            <Route path="products" element={<AllProduct />}></Route>
                            <Route path="products/:id" element={<EditProductForm />}></Route>
                            <Route path="love-products" element={<LoveProduct />}></Route>
                            <Route path="add-product" element={<AddProductForm />}></Route>
                            <Route path="edit-product/" element={<EditProductForm />}></Route>
                            <Route path="order-sent/:status" element={<OrderSent />}></Route>
                            <Route path="detail-order/:id" element={<DetailOrder />}></Route>
                            <Route path="order-receive/:status" element={<OrderReceive />}></Route>
                            <Route path="bill/:type" element={<Bill />}></Route>
                        </Route>
                    </Route>
                    <Route element={<RequireAdmin />}>
                        <Route path="/admin/*" element={<Admin />}>
                            <Route path="student-list" element={<StudentAccount />}></Route>
                            <Route path="salesfee" element={<FeeManage />}></Route>
                            <Route path="shop-list" element={<ShopAccount />}></Route>
                            <Route path="category-product" element={<CategoryProduct />}></Route>
                            <Route path="event-list" element={<EventList />}></Route>
                            <Route path="support" element={<SupportUser />}></Route>
                            <Route path="report" element={<Report />}></Route>
                        </Route>
                    </Route>
                </Route>
                <Route path="/:path" element={<NotFound />}></Route>
            </Routes>
        </div>
    );
}

export default App;
