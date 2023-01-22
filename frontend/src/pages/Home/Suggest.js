import Card from "components/Card";
function Suggest() {
    return (
        <div className="suggest">
            <ul className="grid grid-cols-6 gap-2">
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
            <div className="w-full text-center mt-5">
                <button className=" bg-white px-16 py-[12px] rounded border  text-sm font-semibold hover:bg-[#f0f0f0]">
                    Xem thêm
                </button>
            </div>
        </div>
    );
}

export default Suggest;
