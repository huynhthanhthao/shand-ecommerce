import { useState } from "react";

function InforProduct({ product }) {
    const [amount, setAmount] = useState(1);
    return (
        <div className="infor-product col-span-2">
            <h4>{product.detail.name}</h4>
            <div className="my-2">Thương hiệu: {product.trademark}</div>
            <h4 className="my-2 text-orange-600">{product.detail.price}đ</h4>
            <div className="amount my-5">
                <span className="text-[#464747]">Chọn số lượng: </span>
                <div className="select-amount flex my-5">
                    <button
                        onClick={() =>
                            setAmount((prev) => (prev <= 1 ? prev : prev - 1))
                        }
                        className="bg-[#e7e8ea] p-2 rounded text-3xl hover:opacity-60"
                    >
                        <img
                            className="w-5"
                            src={require("assets/images/subtraction.png")}
                            alt="Subtraction icon"
                        />
                    </button>
                    <input
                        type="number"
                        className="w-12 px-2 mx-3 border rounded outline-cyan-600 py-1 text-center font-bold"
                        value={amount}
                        onChange={(e) =>
                            setAmount(() =>
                                e.target.value >= product.quantityAvailable
                                    ? product.quantityAvailable
                                    : e.target.value
                            )
                        }
                    />

                    <button
                        onClick={(e) =>
                            setAmount((prev) =>
                                prev >= product.quantityAvailable
                                    ? prev
                                    : prev + 1
                            )
                        }
                        className="bg-[#e7e8ea] p-2 rounded  text-3xl hover:opacity-60"
                    >
                        <img
                            className="w-5"
                            src={require("assets/images/add.png")}
                            alt="Add icon"
                        />
                    </button>
                </div>
            </div>
            <div className="p-4 bg-[#e7effe] rounded-lg my-5 flex items-center">
                <img
                    src={require("assets/images/warning.png")}
                    alt="warning"
                    className="w-8 mr-3"
                />
                Bạn chỉ có thể mua tối đa
                <span className="font-bold">
                    &nbsp;{product.quantityAvailable}&nbsp;
                </span>{" "}
                sản phẩm.
            </div>
            <div className="w-full flex">
                <div className="w-1/2 mx-1">
                    <button className="bg-[#e7e8ea] text-[#292a2d] px-5 py-3 font-bold rounded-md hover:opacity-80  w-full">
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
