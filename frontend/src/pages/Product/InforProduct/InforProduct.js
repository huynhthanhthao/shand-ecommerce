import { addCartApi } from "api/cartApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showLogin } from "store/reducers/authSlice";
import { setOrderConfirm } from "store/reducers/orderSlice";

function InforProduct({ product }) {
    const [amount, setAmount] = useState(1);
    const { account } = useSelector(({ accountReducer }) => accountReducer);
    const dispatch = useDispatch();

    // Mua ngay
    const [order, setOrder] = useState({ product, amount });
    useEffect(() => {
        dispatch(setOrderConfirm([{ ...order, amount }]));
    }, [dispatch, order, order.length, amount]);

    return (
        <div className="relative infor-product col-span-2">
            <div className="absolute right-0 -z-0 flex">
                <Link
                    to={"/search-same/" + product.detail.name}
                    className="text-sm bg-green-500 font-bold rounded hover:opacity-80 flex text-white p-2 mr-2"
                >
                    <svg className="w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>{" "}
                    Tìm kiếm sản phẩm tương tự
                </Link>
                <svg
                    className="fill-yellow-600  w-5 hover:cursor-pointer hover:opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-te-toggle="modal"
                    data-te-target="#report_modal"
                >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
            </div>

            <h4 className="w-2/3">{product.detail.name}</h4>
            <div className="my-2">Thương hiệu: {product.trademark}</div>
            <h4 className="my-2 text-orange-600">{product.detail.price.toLocaleString().split(",")}đ</h4>
            <div className="amount my-5">
                <span className="text-[#464747]">Chọn số lượng: </span>
                <div className="select-amount flex my-5">
                    <button
                        onClick={() => setAmount((prev) => (prev <= 1 ? prev : prev - 1))}
                        className="bg-[#e7e8ea] p-2 rounded text-3xl hover:opacity-60"
                    >
                        <img className="w-5" src={require("assets/images/subtraction.png")} alt="Subtraction icon" />
                    </button>
                    <input
                        type="number"
                        className="w-12 px-2 mx-3 border rounded outline-cyan-600 py-1 text-center font-bold"
                        value={amount}
                        onChange={(e) =>
                            setAmount(() =>
                                e.target.value >= product.quantityAvailable ? product.quantityAvailable : e.target.value
                            )
                        }
                    />

                    <button
                        onClick={(e) => setAmount((prev) => (prev >= product.quantityAvailable ? prev : prev + 1))}
                        className="bg-[#e7e8ea] p-2 rounded  text-3xl hover:opacity-60"
                    >
                        <img className="w-5" src={require("assets/images/add.png")} alt="Add icon" />
                    </button>
                </div>
            </div>

            {product.quantityAvailable <= 0 ? (
                <div className="p-4 bg-[#e7effe] rounded-lg my-5 flex items-center">
                    <img src={require("assets/images/warning.png")} alt="warning" className="w-8 mr-3" />
                    Sản phẩm này đã bán.
                </div>
            ) : (
                <div className="p-4 bg-[#e7effe] rounded-lg my-5 flex items-center">
                    <img src={require("assets/images/warning.png")} alt="warning" className="w-8 mr-3" />
                    Bạn chỉ có thể mua tối đa
                    <span className="font-bold">&nbsp;{product.quantityAvailable}&nbsp;</span> sản phẩm.
                </div>
            )}
            {product.quantityAvailable <= 0 ? (
                ""
            ) : (
                <div className="w-full flex">
                    <div className="w-1/2 mx-1">
                        <button
                            onClick={() => {
                                if (account === null) {
                                    dispatch(showLogin());
                                } else {
                                    addCartApi({
                                        productId: product.id,
                                        studentId: account.username,
                                        amount,
                                    });
                                }
                            }}
                            className="bg-[#e7e8ea] text-[#292a2d] px-5 py-3 font-bold rounded-md hover:opacity-80  w-full"
                        >
                            Thêm vào giỏ
                        </button>
                    </div>
                    <div className="w-1/2 mx-1">
                        <Link to="/confirm-order">
                            <button className="bg-orange-500 w-full text-white font-bold py-3 rounded">Mua ngay</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default InforProduct;
