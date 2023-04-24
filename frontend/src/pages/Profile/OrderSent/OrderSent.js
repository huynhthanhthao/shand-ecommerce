import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { getOrderSent, deleteOrderApi } from "api/orderApi";
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import Moment from "react-moment";

function OrderSent() {
    const dispatch = useDispatch();
    const { status } = useParams();
    const { account } = useSelector(({ accountReducer }) => accountReducer);

    const { orderSent: orderList } = useSelector(({ orderReducer }) => orderReducer);

    useEffect(() => {
        const fetchData = async () => {
            await getOrderSent({ buyerId: account.username, status }, dispatch);
        };
        fetchData();
    }, [dispatch, account.username, status]);

    const handleDeleteOrder = async (id) => {
        await deleteOrderApi({ id }, dispatch);
    };

    return (
        <div className="order-sent animate__animated animate__fadeIn">
            <label className="font-bold">Đơn hàng đã đặt</label>
            <div className=" bg-white">
                <ul className="border-b py-3 flex mb-3">
                    <NavLink
                        className="mr-8 hover:text-orange-500 cursor-pointer"
                        exact="true"
                        to="/profile/order-sent/pending"
                        activeclassname="active"
                    >
                        Chờ xác nhận
                    </NavLink>
                    <NavLink
                        exact="true"
                        className="mr-8 hover:text-orange-500 cursor-pointer"
                        to="/profile/order-sent/confirmed"
                        activeclassname="active"
                    >
                        Đã xác nhận
                    </NavLink>
                    <NavLink
                        exact="true"
                        className="mr-8 hover:text-orange-500 cursor-pointer"
                        to="/profile/order-sent/expired"
                        activeclassname="active"
                    >
                        Đang vận chuyển
                    </NavLink>
                    <NavLink
                        exact="true"
                        className="mr-8 hover:text-orange-500 cursor-pointer"
                        to="/profile/order-sent/received"
                        activeclassname="active"
                    >
                        Đã nhận hàng
                    </NavLink>
                    <NavLink
                        exact="true"
                        className="mr-8 hover:text-orange-500 cursor-pointer"
                        to="/profile/order-sent/refuse"
                        activeclassname="active"
                    >
                        Bị từ chối
                    </NavLink>
                </ul>
                {orderList && (
                    <div>
                        {orderList.length === 0 ? (
                            <div className="text-center ">Bạn chưa có đơn hàng tất cả gần đây.</div>
                        ) : (
                            ""
                        )}
                        <ul>
                            {orderList.map((order) => (
                                <li key={order.id} className="border rounded-sm text-sm mb-2">
                                    <div className="flex justify-between p-3 bg-slate-100 ">
                                        <div>
                                            <div className="flex ">
                                                Mã đơn hàng:
                                                <Link
                                                    to={"/profile/detail-order/" + order.id}
                                                    className="cursor-pointer text-blue-500"
                                                >
                                                    &nbsp;#{order.id} | Chi tiết
                                                </Link>
                                            </div>
                                            <p>
                                                Đặt ngày: <Moment format="DD/MM/YYYY">{order.createdAt}</Moment>
                                            </p>
                                        </div>
                                        <div>
                                            <p>Người nhận:</p>
                                            <p>{order.buyer.fullName}</p>
                                        </div>
                                        <div className="text-center">
                                            <p>Tổng tiền:</p>
                                            <p>{order.total.toLocaleString().split(",")}đ</p>
                                        </div>
                                        <div className="text-right">
                                            {order.paid && (
                                                <div className="w-36 border  text-center bg-green-500 p-3 text-white font-bold">
                                                    Đã thanh toán
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex  p-3">
                                        <div className="">
                                            <ul>
                                                {order.productList.map((product) => (
                                                    <li key={product.id}>
                                                        <Link
                                                            className="flex items-start mb-2"
                                                            to={"/product/" + product.id}
                                                        >
                                                            <img
                                                                src={JSON.parse(product.images)[0]}
                                                                alt="product"
                                                                className="w-16 border mr-2"
                                                            />
                                                            <div>
                                                                <a href="/" className="font-bold">
                                                                    {product.name}
                                                                </a>
                                                                <div className="flex my-2 mt-1">
                                                                    <p>Người bán:&nbsp;</p>
                                                                    <p className="text-blue-500">
                                                                        {order.seller.fullName} {order.seller.username}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>

                                            {status === "refuse" ? (
                                                <div className="w-36 border border-dashed  text-center border-red-500 p-1 text-red-500">
                                                    Đã bị từ chối
                                                </div>
                                            ) : (
                                                <div
                                                    className={
                                                        status === "pending"
                                                            ? "w-36 border border-dashed  text-center border-orange-500 p-1 text-orange-500"
                                                            : "w-36 border border-dashed  text-center border-green-500 p-1 text-green-500"
                                                    }
                                                >
                                                    {status === "pending" ? "Đang chờ xác nhận" : ""}
                                                    {status === "confirmed" ? "Đã xác nhận" : ""}
                                                    {status === "expired" ? "Đang vận chuyển" : ""}
                                                    {status === "received" ? "Đã giao hàng" : ""}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex justify-between items-center ml-20 ">
                                            <div className="flex flex-col items-center justify-center text-slate-400  fill-slate-400">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    height="32"
                                                    className={
                                                        order.status === "pending" ||
                                                        order.status === "confirmed" ||
                                                        order.status === "expired" ||
                                                        order.status === "received"
                                                            ? "fill-green-500"
                                                            : ""
                                                    }
                                                >
                                                    <path
                                                        className="path1"
                                                        d="M16 0c-8.853 0-16 7.147-16 16s7.147 16 16 16 16-7.147 16-16-7.147-16-16-16zM16 30.933c-8.213 0-14.933-6.72-14.933-14.933s6.72-14.933 14.933-14.933 14.933 6.72 14.933 14.933-6.72 14.933-14.933 14.933z"
                                                    ></path>
                                                    <path
                                                        className="path2"
                                                        d="M24.96 15.68c-0.32 0-0.533 0.213-0.533 0.533s0 0.533 0 0.747c-0.427 4.267-3.84 7.467-7.893 7.467-2.56 0-4.587-0.96-5.973-2.88l2.027-1.813c0.107-0.107 0.213-0.32 0.107-0.533s-0.213-0.32-0.427-0.427l-5.227-1.067c-0.213 0-0.32 0-0.427 0.107-0.213 0.32-0.32 0.533-0.32 0.747l0.427 5.333c0 0.213 0.107 0.427 0.32 0.427 0.107 0 0.107 0 0.213 0s0.213 0 0.32-0.107l2.133-1.813c1.6 2.027 3.947 3.2 6.827 3.2 4.693 0 8.533-3.627 8.96-8.427 0-0.32 0-0.533 0-0.853s-0.213-0.64-0.533-0.64zM7.467 19.093l3.52 0.64-3.2 2.88-0.32-3.52z"
                                                    ></path>
                                                    <path
                                                        className="path3"
                                                        d="M24.64 7.467c-0.213-0.107-0.427 0-0.533 0.107l-1.707 1.707c-1.493-2.027-3.52-2.88-6.507-2.88-4.693 0-8.533 3.627-8.96 8.427 0 0.32 0 0.64 0 0.853 0 0.32 0.213 0.533 0.533 0.533s0.533-0.213 0.533-0.533c0-0.213 0-0.533 0-0.747 0.427-4.267 3.84-7.467 7.893-7.467 2.773 0 4.48 0.747 5.867 2.56l-2.24 2.24c-0.107 0.107-0.213 0.32-0.107 0.533s0.213 0.32 0.427 0.32l5.333 0.747c0 0 0 0 0.107 0s0.32-0.107 0.427-0.107c0.107-0.107 0.213-0.32 0.107-0.427l-0.747-5.333c-0.107-0.213-0.32-0.427-0.427-0.533zM21.013 12.267l3.093-3.093 0.427 3.627-3.52-0.533z"
                                                    ></path>
                                                </svg>
                                                <p
                                                    className={
                                                        order.status === "pending" ||
                                                        order.status === "confirmed" ||
                                                        order.status === "expired" ||
                                                        order.status === "received"
                                                            ? "text-green-500 mt-1"
                                                            : ""
                                                    }
                                                >
                                                    Chờ xác nhận
                                                </p>
                                            </div>
                                            <div
                                                className={
                                                    order.status === "pending" ||
                                                    order.status === "confirmed" ||
                                                    order.status === "expired" ||
                                                    order.status === "received"
                                                        ? "w-16 border-t-2  border-green-400 mt-1"
                                                        : "w-16 border-t-2 border-slate-400 "
                                                }
                                            ></div>
                                            <div className="flex flex-col items-center justify-center text-slate-400 fill-slate-400">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    height="32"
                                                    className={
                                                        order.status === "confirmed" ||
                                                        order.status === "expired" ||
                                                        order.status === "received"
                                                            ? "fill-green-500"
                                                            : ""
                                                    }
                                                >
                                                    <path
                                                        className="path1"
                                                        d="M16 0c-8.853 0-16 7.147-16 16s7.147 16 16 16c8.853 0 16-7.147 16-16s-7.147-16-16-16zM16 30.933c-8.213 0-14.933-6.72-14.933-14.933s6.72-14.933 14.933-14.933 14.933 6.72 14.933 14.933-6.72 14.933-14.933 14.933z"
                                                    ></path>
                                                    <path
                                                        className="path2"
                                                        d="M22.4 9.173v-0.64c0-0.32-0.213-0.533-0.533-0.533h-2.987c-0.32-1.173-1.493-2.133-2.773-2.133s-2.453 0.96-2.773 2.133h-3.2c-0.213 0-0.533 0.213-0.533 0.533v0.64c-1.173 0.213-2.133 1.28-2.133 2.453v11.947c0 1.387 1.173 2.56 2.56 2.56h11.947c1.387 0 2.56-1.173 2.56-2.56v-11.947c-0.107-1.173-0.96-2.24-2.133-2.453zM16 6.933c0.747 0 1.387 0.427 1.707 1.067h-3.307c0.213-0.64 0.853-1.067 1.6-1.067zM10.667 9.067h10.667v1.6h-10.667v-1.6zM23.36 23.573c0 0.853-0.64 1.493-1.493 1.493h-11.84c-0.747 0-1.493-0.64-1.493-1.493v-11.947c0-0.64 0.427-1.173 1.067-1.387v0.96c0 0.32 0.32 0.533 0.533 0.533h11.627c0.32 0 0.533-0.213 0.533-0.533v-0.96c0.64 0.213 1.067 0.747 1.067 1.387v11.947z"
                                                    ></path>
                                                    <path
                                                        className="path3"
                                                        d="M21.76 21.547h-11.2c-0.32 0-0.533 0.213-0.533 0.533s0.213 0.533 0.533 0.533h11.2c0.32 0 0.533-0.213 0.533-0.533s-0.213-0.533-0.533-0.533z"
                                                    ></path>
                                                    <path
                                                        className="path4"
                                                        d="M15.040 19.52c0.107 0.107 0.213 0.107 0.427 0.107 0 0 0 0 0 0 0.107 0 0.32-0.107 0.427-0.213l3.093-4.48c0.213-0.213 0.107-0.533-0.107-0.747s-0.533-0.107-0.747 0.107l-2.773 3.947-1.493-1.387c-0.213-0.213-0.533-0.213-0.747 0s-0.213 0.533 0 0.747l1.92 1.92z"
                                                    ></path>
                                                </svg>
                                                <p
                                                    className={
                                                        order.status === "confirmed" ||
                                                        order.status === "expired" ||
                                                        order.status === "received"
                                                            ? "text-green-500 mt-1"
                                                            : "mt-1"
                                                    }
                                                >
                                                    Đã xác nhận
                                                </p>
                                            </div>
                                            <div
                                                className={
                                                    order.status === "confirmed" ||
                                                    order.status === "expired" ||
                                                    order.status === "received"
                                                        ? "w-16 border-t-2  border-green-400 mt-1"
                                                        : "w-16 border-t-2 border-slate-400  mt-1"
                                                }
                                            ></div>

                                            <div className="flex flex-col items-center justify-center text-slate-400 fill-slate-400">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    height="32"
                                                    className={
                                                        order.status === "expired" || order.status === "received"
                                                            ? "fill-green-500"
                                                            : ""
                                                    }
                                                >
                                                    <path
                                                        className="path1"
                                                        d="M16 0c-8.853 0-16 7.147-16 16s7.147 16 16 16 16-7.147 16-16-7.147-16-16-16zM16 30.933c-8.213 0-14.933-6.72-14.933-14.933s6.72-14.933 14.933-14.933 14.933 6.72 14.933 14.933-6.72 14.933-14.933 14.933z"
                                                    ></path>
                                                    <path
                                                        className="path2"
                                                        d="M15.36 22.4c-1.173 0-2.133 0.96-2.133 2.133s0.96 2.133 2.133 2.133 2.133-0.96 2.133-2.133-0.96-2.133-2.133-2.133zM15.36 25.6c-0.533 0-1.067-0.533-1.067-1.067s0.427-1.067 1.067-1.067 1.067 0.533 1.067 1.067-0.427 1.067-1.067 1.067z"
                                                    ></path>
                                                    <path
                                                        className="path3"
                                                        d="M23.467 21.547l-5.227 1.493c-0.32 0.107-0.427 0.427-0.32 0.64s0.32 0.427 0.533 0.427h0.107l5.227-1.493c0.32-0.107 0.427-0.427 0.32-0.64-0.107-0.32-0.427-0.533-0.64-0.427z"
                                                    ></path>
                                                    <path
                                                        className="path4"
                                                        d="M23.893 9.6c-0.107-0.32-0.32-0.533-0.533-0.64s-0.533-0.213-0.853-0.107l-8 2.347c-0.533 0.213-0.853 0.747-0.747 1.387l2.347 8.213c0.107 0.32 0.32 0.533 0.533 0.64s0.32 0.107 0.533 0.107c0.107 0 0.213 0 0.32 0l8-2.347c0.533-0.213 0.853-0.747 0.747-1.387l-2.347-8.213zM25.173 18.133l-8.107 2.453-2.347-8.32 8.107-2.347 2.347 8.213z"
                                                    ></path>
                                                    <path
                                                        className="path5"
                                                        d="M20.053 14.293c0.107 0 0.213 0.107 0.213 0.107 0.107 0 0.213 0 0.32-0.107l0.64 2.133c0.107 0.213 0.32 0.427 0.533 0.427h0.107c0.32-0.107 0.427-0.427 0.32-0.64l-0.64-2.24c0.213 0 0.427-0.107 0.533-0.213 0.107-0.213 0.107-0.533-0.213-0.747l-0.853-0.533c-0.107-0.107-0.32-0.107-0.427 0-0.107 0-0.213 0.107-0.32 0.213l-0.533 0.853c-0.107 0.32 0 0.64 0.32 0.747z"
                                                    ></path>
                                                    <path
                                                        className="path6"
                                                        d="M18.56 17.173c0.107 0.213 0.32 0.427 0.533 0.427h0.107c0.32-0.107 0.427-0.427 0.32-0.64l-0.64-2.24c0.213 0 0.427-0.107 0.533-0.213 0.107-0.213 0.107-0.533-0.213-0.747l-0.853-0.533c-0.107-0.107-0.32-0.107-0.427 0s-0.213 0.107-0.32 0.213l-0.533 0.96c-0.107 0.213 0 0.533 0.213 0.747 0.107 0 0.213 0.107 0.213 0.107 0.107 0 0.213 0 0.32-0.107l0.747 2.027z"
                                                    ></path>
                                                    <path
                                                        className="path7"
                                                        d="M17.92 19.2c0.107 0.213 0.32 0.427 0.533 0.427h0.107l4.8-1.387c0.32-0.107 0.427-0.427 0.32-0.64s-0.427-0.427-0.64-0.32l-4.8 1.387c-0.32-0.107-0.427 0.213-0.32 0.533z"
                                                    ></path>
                                                    <path
                                                        className="path8"
                                                        d="M13.653 21.547c0.107 0.213 0.32 0.427 0.533 0.427h0.107c0.32-0.107 0.427-0.32 0.32-0.64l-3.52-12.8c0-0.107 0-0.213-0.107-0.32l-0.64-2.453c-0.107-0.32-0.32-0.533-0.64-0.427s-0.427 0.427-0.32 0.64l0.533 1.92h-3.627c-0.213 0.107-0.533 0.32-0.533 0.64s0.213 0.533 0.533 0.533h3.84l3.52 12.48z"
                                                    ></path>
                                                </svg>
                                                <p
                                                    className={
                                                        order.status === "expired" || order.status === "received"
                                                            ? "text-green-500 mt-1"
                                                            : "mt-1"
                                                    }
                                                >
                                                    Đang vận chuyển
                                                </p>
                                            </div>
                                            <div
                                                className={
                                                    order.status === "expired" || order.status === "received"
                                                        ? "w-16 border-t-2  border-green-400 mt-1"
                                                        : "w-16 border-t-2 border-slate-400 "
                                                }
                                            ></div>

                                            <div className="flex flex-col items-center justify-center text-slate-400 fill-slate-400">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 32 32"
                                                    width="32"
                                                    height="32"
                                                    className={order.status === "received" ? "fill-green-500" : ""}
                                                >
                                                    <path
                                                        className="path1"
                                                        d="M16 32c-8.853 0-16-7.147-16-16s7.147-16 16-16 16 7.147 16 16-7.147 16-16 16zM16 1.067c-8.213 0-14.933 6.72-14.933 14.933s6.72 14.933 14.933 14.933 14.933-6.72 14.933-14.933-6.72-14.933-14.933-14.933z"
                                                    ></path>
                                                    <path
                                                        className="path2"
                                                        d="M25.6 7.68h-14.293c-0.32 0-0.533 0.213-0.533 0.533v4.053h-2.027c-0.64 0-1.28 0.213-1.813 0.533-0.107-0.213-0.32-0.32-0.533-0.32h-1.92c-0.213 0-0.427 0.213-0.533 0.427-0.213 0.96-0.32 1.92-0.32 2.88 0 0.747 0 1.493 0.107 2.24 0 0.213 0.213 0.427 0.533 0.427h2.027c0.213 0 0.427-0.213 0.533-0.427 0 0 0.107 0.107 0.107 0.107l2.667 2.027c0.213 0.213 0.533 0.32 0.853 0.32 0.107 0 0.213 0 0.32 0v3.413c0 0.32 0.213 0.533 0.533 0.533h14.293c0.32 0 0.533-0.213 0.533-0.533v-15.68c0-0.32-0.213-0.533-0.533-0.533zM11.84 8.747h13.227v5.76h-13.227v-5.76zM11.84 15.573h13.227v0.853h-13.227v-0.853zM5.973 17.387h-1.067c-0.107-0.533-0.107-1.067-0.107-1.6 0-0.747 0.107-1.493 0.213-2.24h0.96v3.84zM10.453 17.6c-0.213 0-0.427 0.107-0.533 0.32s0 0.427 0.213 0.64l0.533 0.427c0.107 0.107 0.107 0.107 0.107 0.213 0 0 0 0.107-0.107 0.213s-0.32 0.107-0.427 0l-2.56-2.027c-0.213-0.107-0.32-0.213-0.533-0.427-0.107-0.107-0.107-0.107-0.213-0.107v-2.667c0.107 0 0.213-0.107 0.213-0.107 0.427-0.427 0.96-0.64 1.493-0.64h1.92v4.16h-0.107zM25.067 23.253h-13.227v-5.76h13.227v5.76z"
                                                    ></path>
                                                </svg>
                                                <p
                                                    className={
                                                        order.status === "received" ? "text-green-500 mt-1" : "mt-1"
                                                    }
                                                >
                                                    Đã nhận hàng
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 flex items-end justify-between">
                                        <div className="flex ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                className="w-3 mr-1 fill-green-600"
                                            >
                                                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                                            </svg>
                                            <p className="font-bold">{order.buyer.phoneNumber}</p>
                                        </div>
                                        <div>
                                            {order.status === "pending" && (
                                                <button
                                                    onClick={() => handleDeleteOrder(order.id)}
                                                    className="bg-red-500 font-bold rounded hover:opacity-80 text-white p-2 mr-3"
                                                >
                                                    Hủy đơn hàng
                                                </button>
                                            )}
                                            <NavLink
                                                exact="true"
                                                className="btn3 p-2"
                                                to={"/profile/detail-order/" + order.id}
                                            >
                                                Theo dõi đơn hàng
                                            </NavLink>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default OrderSent;
