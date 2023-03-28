function Description(props) {
    return (
        <>
            <td className="w-[15%] text-right">
                <strong>Mô tả</strong>
            </td>
            <td className="px-5">
                <textarea
                    className=" w-full input focus:shadow-input py-1 px-3"
                    value={props.newProduct.description}
                    onChange={(e) => {
                        props.dispatch(
                            props.setNewProduct({
                                ...props.newProduct,
                                description: props.target.value,
                            })
                        );
                    }}
                ></textarea>
            </td>
        </>
    );
}

export default Description;
