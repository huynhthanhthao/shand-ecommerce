import { addCartApi } from "api/cartApi";
import { useState } from "react";
import { useSelector } from "react-redux";

function InforProduct({ product }) {
    const [amount, setAmount] = useState(1);
    const { account } = useSelector(({ accountReducer }) => accountReducer);

    return (
        <div className="relative infor-product col-span-2">
            <svg
                className="fill-yellow-600 absolute w-5 right-0 -z-0 hover:cursor-pointer hover:opacity-60"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-te-toggle="modal"
                data-te-target="#report_modal"
            >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
            <h4>{product.detail.name}</h4>
            <div className="my-2">Thương hiệu: {product.trademark}</div>
            <h4 className="my-2 text-orange-600">{product.detail.price}đ</h4>
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
            <div className="p-4 bg-[#e7effe] rounded-lg my-5 flex items-center">
                <img src={require("assets/images/warning.png")} alt="warning" className="w-8 mr-3" />
                Bạn chỉ có thể mua tối đa
                <span className="font-bold">&nbsp;{product.quantityAvailable}&nbsp;</span> sản phẩm.
            </div>
            <div className="w-full flex">
                <div className="w-1/2 mx-1">
                    <button
                        onClick={() => {
                            addCartApi({
                                productId: product.id,
                                studentId: account.username,
                                amount,
                            });
                        }}
                        className="bg-[#e7e8ea] text-[#292a2d] px-5 py-3 font-bold rounded-md hover:opacity-80  w-full"
                    >
                        Thêm vào giỏ
                    </button>
                </div>
                <div className="w-1/2 mx-1">
                    <button className="px-5 py-3 btn3  w-full">Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default InforProduct;
