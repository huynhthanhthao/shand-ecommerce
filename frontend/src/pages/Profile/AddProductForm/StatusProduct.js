function StatusProduct(props) {
    return (
        <>
            <td className="w-[15%] text-right ">
                <strong>Tình trạng</strong>
                <span className="text-red-600">*</span>
            </td>
            <td className="px-5 grid grid-cols-5 gap-2 ">
                <div
                    className={
                        props.newProduct.status === 1
                            ? "border-orange-600 text-orange-600 col-span-1 flex  flex-col text-center border rounded-lg p-2"
                            : "col-span-1 flex  flex-col text-center border rounded-lg p-2"
                    }
                >
                    <button
                        onClick={() => {
                            props.dispatch(
                                props.setNewProduct({
                                    ...props.newProduct,
                                    status: 1,
                                })
                            );
                        }}
                    >
                        <strong>Mới</strong>
                        <div>
                            Hàng mới kèm mác, chưa mở hộp/bao bì, chưa qua sử
                            dụng.
                        </div>
                    </button>
                </div>
                <div
                    className={
                        props.newProduct.status === 2
                            ? "border-orange-600 text-orange-600 col-span-1 flex  flex-col text-center border rounded-lg p-2"
                            : "col-span-1 flex  flex-col text-center border rounded-lg p-2"
                    }
                >
                    <button
                        onClick={() => {
                            props.dispatch(
                                props.setNewProduct({
                                    ...props.newProduct,
                                    status: 2,
                                })
                            );
                        }}
                    >
                        <strong>Như mới</strong>
                        <div>
                            Hàng mới kèm mác, đã mở bao bì/hộp, chưa qua sử
                            dụng.
                        </div>
                    </button>
                </div>

                <div
                    className={
                        props.newProduct.status === 3
                            ? "border-orange-600 text-orange-600 col-span-1 flex  flex-col text-center border rounded-lg p-2"
                            : "col-span-1 flex  flex-col text-center border rounded-lg p-2"
                    }
                >
                    <button
                        onClick={() => {
                            props.dispatch(
                                props.setNewProduct({
                                    ...props.newProduct,
                                    status: 3,
                                })
                            );
                        }}
                    >
                        <strong>Tốt</strong>
                        <div>
                            Đã qua sử dụng, tính năng đầy đủ, hoạt động tốt (có
                            thể có vài vết xước nhỏ)
                        </div>
                    </button>
                </div>
                <div
                    className={
                        props.newProduct.status === 4
                            ? "border-orange-600 text-orange-600 col-span-1 flex  flex-col text-center border rounded-lg p-2"
                            : "col-span-1 flex  flex-col text-center border rounded-lg p-2"
                    }
                >
                    <button
                        onClick={() => {
                            props.dispatch(
                                props.setNewProduct({
                                    ...props.newProduct,
                                    status: 4,
                                })
                            );
                        }}
                    >
                        <strong>Trung bình</strong>
                        <div>
                            Hàng đã qua sử dụng, đầy đủ chức năng. Nhiều sai sót
                            hoặc lỗi nhỏ.
                        </div>
                    </button>
                </div>
                <div
                    className={
                        props.newProduct.status === 5
                            ? "border-orange-600 text-orange-600 col-span-1 flex  flex-col text-center border rounded-lg p-2"
                            : "col-span-1 flex  flex-col text-center border rounded-lg p-2"
                    }
                >
                    <button
                        onClick={() => {
                            props.dispatch(
                                props.setNewProduct({
                                    ...props.newProduct,
                                    status: 5,
                                })
                            );
                        }}
                    >
                        <strong>Kém</strong>
                        <div>
                            Đã qua sử dụng. Nhiều sai sót. Có thể bị hư hỏng (đề
                            cập chi tiết nếu bị hư hỏng).
                        </div>
                    </button>
                </div>
            </td>
        </>
    );
}

export default StatusProduct;
