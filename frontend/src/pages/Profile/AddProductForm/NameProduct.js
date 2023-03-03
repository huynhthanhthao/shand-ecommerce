function NameProduct() {
    return (
        <>
            <td className="w-[15%] text-right">
                <strong>Tên sản phẩm</strong>
                <span className="text-red-600">*</span>
            </td>
            <td className="px-5">
                <input className=" w-full input focus:shadow-input py-1 px-3" />
            </td>
        </>
    );
}

export default NameProduct;
