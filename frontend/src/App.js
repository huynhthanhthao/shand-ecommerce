import "./App.css";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout/";

// Profile children
import InforAccount from "pages/Profile/InforAccount";
import RecieveAddress from "pages/Profile/RecieveAddress/RecieveAddress";
import LoveProduct from "pages/Profile/LoveProduct";
import AddProductForm from "pages/Profile/AddProductForm/AddProductForm";
import AllProduct from "pages/Profile/AllProduct";
import EditProductForm from "pages/Profile/EditProductForm";
import StudentAccount from "pages/Admin/Content/StudentAccount/StudentAccount";
import ShopAccount from "pages/Admin/Content/ShopAccount/ShopAccount";
import CategoryProduct from "pages/Admin/Content/CategoryProduct/CategoryProduct";
import EventList from "pages/Admin/Content/Event/EventList";
import SupportUser from "pages/Admin/Content/SupportUser/SupportUser";
import Report from "pages/Admin/Content/Report/Report";
import Cart from "pages/Cart/Cart";
import OrderSent from "pages/Profile/OrderSent/OrderSent";
import DetailOrderSent from "pages/Profile/DetailOrderSent/DetailOrderSent";
import OrderReceive from "pages/Profile/OrderRecieve/OrderRecieve";

function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout =
                        route.layout === null ? Fragment : DefaultLayout;
                    const Page = route.component;
                    return (
                        <Route
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                            key={index}
                        >
                            <Route path="cart" element={<Cart />}></Route>
                            {/* Profile children */}
                            {route.path.includes("profile") ? (
                                <>
                                    <Route
                                        path="address"
                                        element={<RecieveAddress />}
                                    ></Route>
                                    <Route
                                        path="account"
                                        element={<InforAccount />}
                                    ></Route>
                                    <Route>
                                        <Route
                                            path="products"
                                            element={<AllProduct />}
                                        ></Route>
                                        <Route
                                            path="products/:id"
                                            element={<EditProductForm />}
                                        ></Route>
                                    </Route>
                                    <Route
                                        path="love-products"
                                        element={<LoveProduct />}
                                    ></Route>
                                    <Route
                                        path="add-product"
                                        element={<AddProductForm />}
                                    ></Route>
                                    <Route
                                        path="edit-product/:id"
                                        element={<EditProductForm />}
                                    ></Route>
                                    <Route
                                        path="order-sent/"
                                        element={<OrderSent />}
                                    ></Route>
                                    <Route
                                        path="detail-order-sent"
                                        element={<DetailOrderSent />}
                                    ></Route>
                                    <Route
                                        path="order-receive"
                                        element={<OrderReceive />}
                                    ></Route>
                                </>
                            ) : (
                                ""
                            )}

                            {/* Admin children */}
                            {route.path.includes("admin") ? (
                                <>
                                    <Route
                                        path="student-list"
                                        element={<StudentAccount />}
                                    ></Route>
                                    <Route
                                        path="shop-list"
                                        element={<ShopAccount />}
                                    ></Route>
                                    <Route
                                        path="category-product"
                                        element={<CategoryProduct />}
                                    ></Route>
                                    <Route
                                        path="event-list"
                                        element={<EventList />}
                                    ></Route>
                                    <Route
                                        path="support"
                                        element={<SupportUser />}
                                    ></Route>
                                    <Route
                                        path="report"
                                        element={<Report />}
                                    ></Route>
                                </>
                            ) : (
                                ""
                            )}
                        </Route>
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
