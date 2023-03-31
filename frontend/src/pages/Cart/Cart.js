import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, updateCartApi, deleteCartApi } from "api/cartApi";
import { setOrderConfirm } from "store/reducers/orderSlice";
import { Link } from "react-router-dom";
import { DefaultLayout } from "components/Layout";
function Cart() {
    const { account } = useSelector(({ accountReducer }) => accountReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await getCart({ studentId: account.username }, dispatch);
        };
        fetchData();
    }, [dispatch, account]);

    const { productList: carts } = useSelector(({ cartReducer }) => cartReducer);

    const [order, setOrder] = useState([]);
    useEffect(() => {
        dispatch(setOrderConfirm(order));
    }, [dispatch, order, order.length]);
    return (
        <DefaultLayout>
            <div className="px-24 py-5 text-[#0f1e29]">
                <div className="font-bold text-xl gap-3 mb-3">Giỏ hàng của bạn (7)</div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 ">
                        {carts.length > 0 ? (
                            <ul>
                                {carts.map((cart) => (
                                    <li key={cart.id} className="bg-white p-4 rounded-sm mb-3">
                                        <div>
                                            <div className="flex items-center mb-4">
                                                <img
                                                    src={cart.product.detail.owner.urlAvatar}
                                                    alt="shop"
                                                    className="w-8 h-8 rounded-full mr-2"
                                                />
                                                <p className="font-bold ">
                                                    {cart.product.detail.owner.fullName}
                                                    &nbsp;
                                                    {cart.product.detail.owner.username}
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="flex items-center ">
                                                    <input
                                                        className="cursor-pointer w-6 h-6"
                                                        type="checkbox"
                                                        value=""
                                                        name="check-buy"
                                                        id={"product-" + cart.id}
                                                        onChange={(e) => {
                                                            setOrder((prev) => {
                                                                let newOrder = null;

                                                                const checkHave = prev.some(
                                                                    (item) =>
                                                                        item.product.detail.ownId !==
                                                                        cart.product.detail.ownId
                                                                );
                                                                if (checkHave) {
                                                                    const inputCheck =
                                                                        document.querySelectorAll(
                                                                            "input[name='check-buy']"
                                                                        );
                                                                    inputCheck.forEach((elementInput) => {
                                                                        if (
                                                                            elementInput.checked &&
                                                                            `product-${cart.id}` !== elementInput.id
                                                                        ) {
                                                                            elementInput.checked = false;
                                                                        }
                                                                    });
                                                                    newOrder = [cart];
                                                                } else if (e.target.checked === false) {
                                                                    newOrder = prev.filter(
                                                                        (item) => item.id !== cart.id
                                                                    );
                                                                } else {
                                                                    newOrder = [...prev, cart];
                                                                }

                                                                return newOrder;
                                                            });
                                                        }}
                                                    />
                                                    <img
                                                        className="w-20 h-20 mx-3"
                                                        alt="product"
                                                        src={JSON.parse(cart.product.detail.images)[0]}
                                                    />
                                                    <div>
                                                        <p className="rounded-lg w-44 py-1 text-center bg-[#e2e6f2] font-bold text-xs text-[#133096]">
                                                            {cart.product.detail.transport === "buyer"
                                                                ? "Không miễn phí vận chuyển"
                                                                : "Miễn phí vận chuyển"}
                                                        </p>
                                                        <a href="http://">
                                                            <p className="text-ellipsis overflow-hidden">
                                                                {cart.product.detail.name}
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className=" items-center grid grid-cols-3">
                                                    <p className="font-bold text-center">
                                                        {cart.product.detail.price}đ
                                                    </p>
                                                    <div className="text-center">
                                                        <div className="select-amount flex relative">
                                                            <button
                                                                onChange={(e) => {}}
                                                                className="bg-[#e7e8ea] p-2 rounded text-3xl hover:opacity-60"
                                                            >
                                                                <img
                                                                    className="w-5"
                                                                    src={require("assets/images/subtraction.png")}
                                                                    alt="Subtraction icon"
                                                                />
                                                            </button>
                                                            <input
                                                                onChange={(e) => {
                                                                    if (
                                                                        e.target.value > cart.product.quantityAvailable
                                                                    ) {
                                                                        e.target.value = cart.product.quantityAvailable;
                                                                        updateCartApi(
                                                                            {
                                                                                amount: cart.product.quantityAvailable,
                                                                                id: cart.id,
                                                                            },
                                                                            dispatch
                                                                        );
                                                                    } else
                                                                        updateCartApi(
                                                                            {
                                                                                amount: e.target.value,
                                                                                id: cart.id,
                                                                            },
                                                                            dispatch
                                                                        );
                                                                }}
                                                                type="number"
                                                                value={cart.amount}
                                                                className="w-12 px-2 mx-3 border rounded outline-cyan-600 py-1 text-center font-bold"
                                                            />
                                                            <button
                                                                onChange={(e) => {}}
                                                                className="bg-[#e7e8ea] p-2 rounded  text-3xl hover:opacity-60"
                                                            >
                                                                <img
                                                                    className="w-5"
                                                                    src={require("assets/images/add.png")}
                                                                    alt="Add icon"
                                                                />
                                                            </button>
                                                            <p className="absolute top-9 text-orange-600 text-xs">
                                                                Chỉ được mua tối đa &nbsp;
                                                                {cart.product.quantityAvailable}
                                                                &nbsp;sản phẩm này.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="w-full text-center">
                                                        <button className="w-4 mx-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 512 512"
                                                                className="hover:fill-slate-600"
                                                            >
                                                                <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            onClick={(e) => {
                                                                deleteCartApi({ id: cart.id }, dispatch);
                                                            }}
                                                            className="w-4 mx-2"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 448 512"
                                                                className="hover:fill-slate-600"
                                                            >
                                                                <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div>Chưa có sản phẩm nào trong giỏ.</div>
                        )}
                    </div>
                    <div className="col-span-1 bg-white p-4 rounded-sm h-44">
                        <div className="flex justify-between  border-b pb-3">
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    className="w-5 mr-1 fill-slate-600"
                                >
                                    <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
                                </svg>
                                Mã ưu đãi SHand
                            </div>
                            <button className="text-blue-700">Chọn/nhập mã</button>
                        </div>
                        <div className="flex items-center justify-between my-3">
                            <p className="text-sm">
                                Tạm tính (
                                {order.reduce(function (total, currentValue) {
                                    return total + currentValue.amount;
                                }, 0)}
                                &nbsp;sản phẩm):
                            </p>
                            <p className="text-orange-500 font-bold text-xl">
                                {order.reduce(function (total, currentValue) {
                                    return total + currentValue.product.detail.price * currentValue.amount;
                                }, 0)}
                                &nbsp;đ
                            </p>
                        </div>
                        <Link to="/confirm-order">
                            <button className="bg-orange-500 w-full text-white font-bold py-3 rounded">Mua ngay</button>
                        </Link>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Cart;
