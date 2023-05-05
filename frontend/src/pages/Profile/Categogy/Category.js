import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// import component
import LabelCategory from "./LabelCategogy";

function Category() {
    const account = useSelector((state) => state.accountReducer.account);
    return (
        <>
            {account && (
                <>
                    <div className="category-header flex items-center animate__animated animate__fadeIn">
                        <img
                            src={account.urlAvatar}
                            alt="account"
                            className="w-10 h-10 mr-3 rounded-full border p-[2px]"
                        />
                        <div>
                            <h5 className="text-orange-600 font-bold text-sm">{account.fullName}</h5>

                            <Link to="/profile/account">
                                <span className="text-slate-600 text-xs hover:underline">Chỉnh sửa tài khoản</span>
                            </Link>
                        </div>
                    </div>
                    {account.role === "student" && (
                        <div className="transaction">
                            <LabelCategory label="Quản lý mua hàng" />
                            <ul>
                                <li className="flex py-2">
                                    <NavLink
                                        exact="true"
                                        activeclassname="active"
                                        to="/profile/order-sent/pending"
                                        className="flex hover:fill-orange-600 hover:text-orange-600 hover:cursor-pointer hover:font-bold "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                            className="w-4 mx-3"
                                        >
                                            <path d="M288 352c17.7 0 32-14.3 32-32V109.3l25.4 25.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-80-80c-12.5-12.5-32.8-12.5-45.3 0l-80 80c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 109.3V320c0 17.7 14.3 32 32 32zm-18.5 69.9C247 437.4 219.5 448 192 448c-26.9 0-55.3-10.8-77.4-26.1l0 0c-11.9-8.5-28.1-7.8-39.2 1.7c-14.4 11.9-32.5 21-50.6 25.2c-17.2 4-27.9 21.2-23.9 38.4s21.2 27.9 38.4 23.9c24.5-5.7 44.9-16.5 58.2-25C126.5 501.7 159 512 192 512c31.9 0 60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.6 18.9 80.4 18.9c33 0 65.5-10.3 94.5-25.8c13.4 8.4 33.7 19.3 58.2 25c17.2 4 34.4-6.7 38.4-23.9s-6.7-34.4-23.9-38.4c-18.1-4.2-36.2-13.3-50.6-25.2c-11.1-9.4-27.3-10.1-39.2-1.7l0 0C439.4 437.2 410.9 448 384 448c-27.5 0-55-10.6-77.5-26.1c-11.1-7.9-25.9-7.9-37 0zM192 192H48c-26.5 0-48 21.5-48 48V425c5.3-3.1 11.2-5.4 17.5-6.9c13.1-3.1 26.7-9.8 37.3-18.6c22.2-18.7 54.3-20.1 78.1-3.4c18 12.4 40.1 20.3 59.1 20.3V192zm384 48c0-26.5-21.5-48-48-48H384V416.5h0c19 0 41.2-7.9 59.2-20.3c23.8-16.7 55.8-15.3 78.1 3.4c10.6 8.8 24.2 15.6 37.3 18.6c6.3 1.5 12.1 3.8 17.5 6.9V240z" />
                                        </svg>
                                        <span>Đơn hàng đã đặt</span>
                                    </NavLink>
                                </li>
                                <li className="flex py-2">
                                    <NavLink
                                        exact="true"
                                        activeclassname="active"
                                        to="/profile/address"
                                        className="flex hover:fill-orange-600 hover:text-orange-600 hover:cursor-pointer hover:font-bold "
                                    >
                                        <svg
                                            className="w-4 mx-3"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 384 512"
                                        >
                                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                                        </svg>
                                        <span>Địa chỉ nhận hàng</span>
                                    </NavLink>
                                </li>

                                <li className="py-2">
                                    <NavLink
                                        exact="true"
                                        activeclassname="active"
                                        to="/profile/love-products"
                                        className="flex hover:fill-orange-600 hover:text-orange-600 hover:cursor-pointer hover:font-bold "
                                    >
                                        <svg
                                            className="w-4 mx-3"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                        </svg>
                                        <span>Sản phẩm yêu thích</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                    <div className="transaction">
                        <LabelCategory label="Quản lý bán hàng" />
                        <ul>
                            <li className="py-2">
                                <NavLink
                                    exact="true"
                                    activeclassname="active"
                                    to="/profile/order-receive/pending"
                                    className="flex hover:fill-orange-600 hover:text-orange-600 hover:cursor-pointer hover:font-bold "
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 mx-3">
                                        <path d="M544 416L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32zm22.6-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L480 274.7 480 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96zm-320-45.3c-12.5-12.5-32.8-12.5-45.3 0L160 274.7 160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7L54.6 233.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3z" />
                                    </svg>
                                    <span> Đơn hàng đã nhận</span>
                                </NavLink>
                            </li>
                            <li className="py-2">
                                <NavLink
                                    exact="true"
                                    activeclassname="active"
                                    to="/profile/add-product"
                                    className="flex hover:fill-orange-600 hover:text-orange-600 hover:cursor-pointer hover:font-bold "
                                >
                                    <svg className="w-4 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                                    </svg>
                                    <span> Thêm sản phẩn</span>
                                </NavLink>
                            </li>

                            <li className="py-2">
                                <NavLink
                                    exact="true"
                                    activeclassname="active"
                                    to="/profile/products"
                                    className="flex hover:fill-orange-600 hover:text-orange-600 hover:cursor-pointer hover:font-bold "
                                >
                                    <svg className="w-4 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M64 144c26.5 0 48-21.5 48-48s-21.5-48-48-48S16 69.5 16 96s21.5 48 48 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm48-208c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
                                    </svg>
                                    <span>Sản phẩm của bạn</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="account">
                        <LabelCategory label="Quản lý tài khoản" />
                        <ul>
                            <li className="py-2">
                                <NavLink
                                    exact="true"
                                    activeclassname="active"
                                    to="/profile/account"
                                    className="flex hover:fill-orange-600 hover:text-orange-600 hover:cursor-pointer hover:font-bold "
                                >
                                    <svg className="w-4 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                                    </svg>
                                    <span>Thông tin tài khoản</span>
                                </NavLink>
                            </li>
                            <li className="py-2">
                                <NavLink
                                    exact="true"
                                    activeclassname="active"
                                    to="/profile/transaction"
                                    className="flex hover:fill-orange-600 hover:text-orange-600 hover:cursor-pointer hover:font-bold "
                                >
                                    <svg className="w-4 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path d="M608 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM176 327.88V344c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-16.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V152c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07zM416 312c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16zm160 0c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h272c4.42 0 8 3.58 8 8v16z" />
                                    </svg>
                                    <span>Thông tin giao dịch</span>
                                </NavLink>
                            </li>
                            <li className="py-2">
                                <NavLink
                                    exact="true"
                                    activeclassname="active"
                                    to="/profile/bill/sell"
                                    className="flex hover:fill-orange-600 hover:text-orange-600 hover:cursor-pointer hover:font-bold "
                                >
                                    <svg className="w-4 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 80c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm128 72c8.8 0 16 7.2 16 16v17.3c8.5 1.2 16.7 3.1 24.1 5.1c8.5 2.3 13.6 11 11.3 19.6s-11 13.6-19.6 11.3c-11.1-3-22-5.2-32.1-5.3c-8.4-.1-17.4 1.8-23.6 5.5c-5.7 3.4-8.1 7.3-8.1 12.8c0 3.7 1.3 6.5 7.3 10.1c6.9 4.1 16.6 7.1 29.2 10.9l.5 .1 0 0 0 0c11.3 3.4 25.3 7.6 36.3 14.6c12.1 7.6 22.4 19.7 22.7 38.2c.3 19.3-9.6 33.3-22.9 41.6c-7.7 4.8-16.4 7.6-25.1 9.1V440c0 8.8-7.2 16-16 16s-16-7.2-16-16V422.2c-11.2-2.1-21.7-5.7-30.9-8.9l0 0c-2.1-.7-4.2-1.4-6.2-2.1c-8.4-2.8-12.9-11.9-10.1-20.2s11.9-12.9 20.2-10.1c2.5 .8 4.8 1.6 7.1 2.4l0 0 0 0 0 0c13.6 4.6 24.6 8.4 36.3 8.7c9.1 .3 17.9-1.7 23.7-5.3c5.1-3.2 7.9-7.3 7.8-14c-.1-4.6-1.8-7.8-7.7-11.6c-6.8-4.3-16.5-7.4-29-11.2l-1.6-.5 0 0c-11-3.3-24.3-7.3-34.8-13.7c-12-7.2-22.6-18.9-22.7-37.3c-.1-19.4 10.8-32.8 23.8-40.5c7.5-4.4 15.8-7.2 24.1-8.7V232c0-8.8 7.2-16 16-16z" />
                                    </svg>
                                    <span>Hóa đơn của bạn</span>
                                </NavLink>
                            </li>
                            <li className="py-2">
                                <NavLink
                                    exact="true"
                                    activeclassname="active"
                                    to="/profile/salesfee"
                                    className="flex hover:fill-orange-600 hover:text-orange-600 hover:cursor-pointer hover:font-bold "
                                >
                                    <svg className="w-4 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zm20-312v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V344c0 11-9 20-20 20s-20-9-20-20V329.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V136c0-11 9-20 20-20s20 9 20 20z" />
                                    </svg>
                                    <span>Phí bán hàng</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </>
    );
}

export default Category;
