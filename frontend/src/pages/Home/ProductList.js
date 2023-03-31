import Card from "components/Card";
function ProductList(props) {
    return (
        <div className="suggest text-[#3c3c3c] ">
            <div className="py-4 text-center uppercase bg-white font-bold border-b-4 border-b-[#3c3c3c]">
                {props.label}
            </div>
            <ul className="grid grid-cols-6 gap-2 my-3">
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
                <li>
                    <Card />
                </li>
            </ul>
            {/* <div className="w-full text-center mt-5">
                <button className=" bg-white px-16 py-[12px] rounded border  text-sm font-semibold hover:bg-[#f0f0f0]">
                    Xem thêm
                </button>
            </div> */}
        </div>
    );
}

export default ProductList;
