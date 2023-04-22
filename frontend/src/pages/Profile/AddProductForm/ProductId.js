function ProductId(props) {
    return (
        <>
            <td className="w-[15%] text-right">
                <strong>Mã sản phẩm</strong>
                <span className="text-red-600">*</span>
            </td>
            <td className="px-5">
                <input
                    className=" w-full input focus:shadow-input py-1 px-2"
                    value={props.newProduct.productId}
                    onChange={(e) => {
                        props.dispatch(
                            props.setNewProduct({
                                ...props.newProduct,
                                productId: e.target.value,
                            })
                        );
                    }}
                />
            </td>
        </>
    );
}

export default ProductId;
