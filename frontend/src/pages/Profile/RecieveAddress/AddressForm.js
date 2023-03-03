function AddressForm({ setShowForm }) {
    return (
        <div className="address-form">
            <table className="w-full border-separate border-spacing-2  ">
                <tbody>
                    <tr>
                        <td className="w-1/6">
                            Họ và tên:
                            <span className="text-red-600">*</span>
                        </td>
                        <td className="">
                            <input className="border rounded p-2 focus:outline-teal-400 w-4/5" />
                        </td>
                    </tr>
                    <tr>
                        <td className="w-1/6">
                            Số điện thoại:
                            <span className="text-red-600">*</span>
                        </td>
                        <td className="">
                            <input className="border rounded p-2 focus:outline-teal-400 w-4/5" />
                        </td>
                    </tr>
                    <tr>
                        <td className="w-1/6">
                            Địa chỉ:
                            <span className="text-red-600">*</span>
                        </td>
                        <td className="">
                            <input className="border rounded p-2 focus:outline-teal-400 w-4/5" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="px-8 text-base py-2 btn3 my-3 mx-2">
                Lưu thông tin
            </button>
            <button
                onClick={() => setShowForm(false)}
                className="px-16 py-2  my-3 mx-2 border font-bold rounded hover:opacity-80  text-black"
            >
                Hủy
            </button>
        </div>
    );
}

export default AddressForm;
