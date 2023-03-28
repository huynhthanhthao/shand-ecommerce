function OtherInforProduct(props) {
    return (
        <>
            <td className="w-[15%] text-right">
                <strong>Thông tin khác</strong>
            </td>
            <td className="grid grid-cols-3 gap-4 px-5 my-3">
                <div>
                    <div className="my-1">Thương hiệu</div>
                    <input
                        className=" w-full input focus:shadow-input py-1 px-3"
                        placeholder="Thương hiệu"
                        value={props.newProduct.trademark}
                        onChange={(e) => {
                            props.dispatch(
                                props.setNewProduct({
                                    ...props.newProduct,
                                    trademark: props.target.value,
                                })
                            );
                        }}
                    />
                </div>

                <div>
                    <div className="my-1">Kích thước</div>

                    <input
                        className=" w-full input focus:shadow-input py-1 px-3"
                        placeholder="Kích thước"
                        value={props.newProduct.size}
                        onChange={(e) => {
                            props.dispatch(
                                props.setNewProduct({
                                    ...props.newProduct,
                                    size: props.target.value,
                                })
                            );
                        }}
                    />
                </div>
            </td>
        </>
    );
}

export default OtherInforProduct;
