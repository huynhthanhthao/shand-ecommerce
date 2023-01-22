import Cart from "components/Card";
function ProductSeller() {
    return (
        <div className="product-seller">
            <div className="font-bold pb-3">Gợi ý thêm từ người bán</div>
            <div className="suggest bg-[linear-gradient(180deg,#fff,#fbcbcb)] rounded-md">
                <ul className="flex">
                    <li className="mx-1 my-2">
                        <Cart />
                    </li>
                    <li className="mx-1 my-2">
                        <Cart />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProductSeller;
