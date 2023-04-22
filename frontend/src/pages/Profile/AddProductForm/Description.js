function Description(props) {
    return (
        <>
            <td className="w-[15%] text-right">
                <strong>Mô tả</strong>
            </td>
            <td className="px-5">
                <textarea
                    className=" w-full input focus:shadow-input py-1 px-2"
                    value={props.newProduct.description}
                    onChange={(e) => {
                        props.dispatch(
                            props.setNewProduct({
                                ...props.newProduct,
                                description: e.target.value,
                            })
                        );
                    }}
                ></textarea>
            </td>
        </>
    );
}

export default Description;
