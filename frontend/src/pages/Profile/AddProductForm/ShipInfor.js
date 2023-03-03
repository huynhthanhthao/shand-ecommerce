function ShipInfor() {
    return (
        <>
            <td className="w-[15%] text-right">
                <strong>Vận chuyển</strong>
                <span className="text-red-600">*</span>
            </td>
            <td className="grid grid-cols-4  px-5 my-3">
                <button>
                    <div className="border rounded-lg p-2 mx-2 ">
                        Miễn phí vận chuyển cho người mua (khuyến khích)
                    </div>
                </button>
                <button>
                    <div className="border rounded-lg p-2 mx-2 ">
                        Người mua trả tiền vận chuyển
                    </div>
                </button>
            </td>
        </>
    );
}

export default ShipInfor;
