import Card from "components/Card";
function ProductList({ productList, label, setLimit }) {
    return (
        <div className="suggest text-[#3c3c3c] ">
            <div className="py-3 text-center uppercase bg-white font-bold border-b-4 border-b-[#3c3c3c]">{label}</div>
            {productList?.length === 0 ? (
                <div className="py-6">Chưa có sản phẩm nào.</div>
            ) : (
                <>
                    {productList && (
                        <ul className="grid grid-cols-6 gap-2 my-3">
                            {productList.map((product, index) => (
                                <Card key={index} product={product} />
                            ))}
                        </ul>
                    )}
                    <div className="w-full text-center my-4">
                        <button
                            onClick={() => {
                                setLimit((prev) => prev + 12);
                            }}
                            className=" bg-white px-16 py-[12px] rounded border  text-sm font-semibold hover:bg-[#f0f0f0]"
                        >
                            Xem thêm
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProductList;
