function DiscriptionProduct({ product }) {
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
                            <td className="px-6 py-4">{product.size}</td>
                        </tr>

                        <tr className="  ">
                            <th scope="row" className="px-6 py-4 font-medium ">
                                Danh mục
                            </th>
                            <td className="px-6 py-4">
                                {product.detail.category.nameCategory}
                            </td>
                        </tr>
                        <tr className="  bg-[#eeeeee]">
                            <th scope="row" className="px-6 py-4 font-medium ">
                                Vận chuyển
                            </th>
                            <td className="px-6 py-4">
                                {product.transport === "buyer"
                                    ? "Người mua trả"
                                    : "Người bán trả"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DiscriptionProduct;
