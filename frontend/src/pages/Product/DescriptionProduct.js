import { useState } from "react";

function DiscriptionProduct({ product }) {
    const [showDetail, setShowDetail] = useState(false);
    return (
        <div className="discription-product">
            <div className="infor-seller bg-white p-5 rounded-md ">
                <div className=" font-bold ">Mô tả sản phẩm</div>
                <div className="my-3">{product.detail.description}</div>
                <div className=" font-bold ">Thông tin cơ bản</div>
                <table className="w-full text-sm text-left my-3">
                    <tbody>
                        <tr className=" bg-[#eeeeee] ">
                            <th scope="row" className="px-6 py-4 font-medium ">
                                Trình Trạng
                            </th>
                            <td className="px-6 py-4">Sliver</td>
                        </tr>
                        <tr className="  ">
                            <th scope="row" className="px-6 py-4 font-medium ">
                                Thương hiệu
                            </th>
                            <td className="px-6 py-4">{product.trademark}</td>
                        </tr>
                        <tr className=" bg-[#eeeeee] ">
                            <th scope="row" className="px-6 py-4 font-medium ">
                                Kích thước
                            </th>
                            <td className="px-6 py-4">{product.size ? product.size : "-"}</td>
                        </tr>

                        <tr className="  ">
                            <th scope="row" className="px-6 py-4 font-medium ">
                                Danh mục
                            </th>
                            <td className="px-6 py-4">{product.detail.category.nameCategory}</td>
                        </tr>
                        <tr className="  bg-[#eeeeee]">
                            <th scope="row" className="px-6 py-4 font-medium ">
                                Vận chuyển
                            </th>
                            <td className="px-6 py-4">
                                {product.transport === "buyer" ? "Người mua trả" : "Người bán trả"}
                            </td>
                        </tr>
                        <tr className=" ">
                            <th scope="row" className="px-6 py-4 font-medium ">
                                Nguồn gốc
                            </th>
                            <td className="px-6 py-4">
                                {JSON.parse(product.detail.imagesSource).length === 0 ? (
                                    "-"
                                ) : (
                                    <span className="text-green-600">Đã tải lên</span>
                                )}
                            </td>
                        </tr>
                        <tr className=" ">
                            <th
                                className="px-6 py-4 hover:opacity-70 cursor-pointer"
                                onClick={() => {
                                    setShowDetail((prev) => !prev);
                                }}
                            >
                                {showDetail ? "Ẩn" : "Xem chi tiết"}
                            </th>
                        </tr>
                    </tbody>
                </table>
                {showDetail && (
                    <ul className="grid grid-cols-5  gap-2">
                        {JSON.parse(product.detail.imagesSource).map((image, index) => (
                            <li
                                key={index}
                                className="hover:opacity-80 hover:border-orange-600 border cursor-pointer mx-1 w-full"
                            >
                                <a target="_blank" href={image}>
                                    <img src={image} className="w-full h-28" alt="source" />
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default DiscriptionProduct;
