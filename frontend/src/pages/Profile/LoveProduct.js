import Card from "components/Card";
function LoveProduct() {
    return (
        <div className="love-product">
            <label className="font-bold">Sản phẩm yêu thích</label>
            <div className=" py-5 border-t my-3">
                <ul className="grid grid-cols-5">
                    <li>
                        <Card />
                    </li>
                    <li>
                        <Card />
                    </li>
                    <li>
                        <Card />
                    </li>
                    <li>
                        <Card />
                    </li>
                    <li>
                        <Card />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LoveProduct;
