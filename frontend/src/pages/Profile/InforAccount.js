function InforAccount() {
    return (
        <div className="infor-account">
            <label className="font-bold">Thông tin tài khoản</label>
            <div className="px-10 grid grid-cols-6 py-5 border-t my-3 ">
                <div className="col-span-1">
                    <div className="relative w-28 rounded-full overflow-hidden  border border-[#5e6d81]">
                        <img
                            src={require("assets/images/account.jpg")}
                            alt="account"
                            className="  "
                        />
                        <button className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#0000008a] text-white text-xs py-1 w-full">
                            Thay đổi
                        </button>
                    </div>
                </div>
                <div className="col-span-4 text-sm">
                    <table className="w-full border-separate border-spacing-2  ">
                        <tbody>
                            <tr>
                                <td className="w-1/6">
                                    Họ và tên:
                                    <span className="text-red-600">*</span>
                                </td>
                                <td className="">
                                    <input className="input w-4/5 focus:shadow-input  p-2" />
                                </td>
                            </tr>
                            <tr>
                                <td className="w-1/6">
                                    Số điện thoại:
                                    <span className="text-red-600">*</span>
                                </td>
                                <td className="">
                                    <input className="input w-4/5 focus:shadow-input  p-2" />
                                </td>
                            </tr>
                            <tr>
                                <td className="w-1/6">
                                    Email cá nhân:
                                    <span className="text-red-600">*</span>
                                </td>
                                <td className="">
                                    <input className="input w-4/5 focus:shadow-input  p-2" />
                                </td>
                            </tr>
                            <tr>
                                <td className="w-1/6">Ngày sinh:</td>
                                <td className="">
                                    <input
                                        className="input w-4/5 focus:shadow-input  p-2"
                                        type="date"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="w-1/6"></td>
                                <td className="text-sky-600">Đổi mật khẩu</td>
                            </tr>
                            <tr>
                                <td className="w-1/6"></td>
                                <td>
                                    <button className="px-16 text-base py-2 btn3 my-3">
                                        Cập nhật
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default InforAccount;
