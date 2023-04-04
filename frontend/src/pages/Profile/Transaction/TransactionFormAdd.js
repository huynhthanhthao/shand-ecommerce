import { addTransactionApi } from "api/transactionApi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function TransactionFormAdd({ setShowFormAdd }) {
    const dispatch = useDispatch();

    const { account } = useSelector(({ accountReducer }) => accountReducer);

    const [fullName, setFullName] = useState("");
    const [bankCode, setBankCode] = useState("");
    const [bankName, setBankName] = useState("");
    const handleAddTransaction = () => {
        addTransactionApi(
            {
                username: account.username,
                fullName,
                bankCode,
                bankName,
            },
            dispatch
        );
        setShowFormAdd(false);
    };
    return (
        <div className="address-form">
            <table className="w-full border-separate border-spacing-2  ">
                <tbody>
                    <tr>
                        <td className="w-1/6">
                            Chủ sở hữu:
                            <span className="text-red-600">*</span>
                        </td>
                        <td className="">
                            <input
                                value={fullName}
                                onChange={(e) => {
                                    setFullName(e.target.value);
                                }}
                                className="border rounded p-2 focus:outline-teal-400 w-4/5"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="w-1/6">
                            Ngân hàng:
                            <span className="text-red-600">*</span>
                        </td>
                        <td className="">
                            {/* <input
                                value={bankName}
                                onChange={(e) => {
                                    setBankName(e.target.value);
                                }}
                                className="border rounded p-2 focus:outline-teal-400 w-4/5"
                            /> */}
                            <select
                                onChange={(e) => {
                                    setBankName(e.target.value);
                                }}
                                className="border rounded p-2 focus:outline-teal-400 w-4/5"
                            >
                                <option className="p-3">Chọn ngân hàng</option>
                                <option className="p-3" value="Ngân hàng TMCP Ngoại Thương Việt Nam (Vietcombank)">
                                    Ngân hàng TMCP Ngoại Thương Việt Nam (Vietcombank)
                                </option>
                                <option className="p-3" value="Ngân hàng TMCP Kỹ Thương Việt Nam (Techcombank)">
                                    Ngân hàng TMCP Kỹ Thương Việt Nam (Techcombank)
                                </option>
                                <option className="p-3" value="Ngân hàng TMCP Quốc Tế (VIB)">
                                    Ngân hàng TMCP Quốc Tế (VIB)
                                </option>
                                <option className="p-3" value="Ngân hàng TMCP Xuất Nhập Khẩu Việt Nam (EIB)">
                                    Ngân hàng TMCP Xuất Nhập Khẩu Việt Nam (EIB)
                                </option>
                                <option className="p-3" value="Ngân hàng TMCP Quân Đội (MBank)">
                                    Ngân hàng TMCP Quân Đội (MBank)
                                </option>
                                <option className="p-3" value="Ngân hàng TMCP Phát Triển TP. Hồ Chí Minh (HDBank)">
                                    Ngân hàng TMCP Phát Triển TP. Hồ Chí Minh (HDBank)
                                </option>
                                <option className="p-3" value="Ngân hàng TMCP Á Châu (ACB)">
                                    Ngân hàng TMCP Á Châu (ACB)
                                </option>
                                <option className="p-3" value="Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank)">
                                    Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank)
                                </option>
                                <option className="p-3" value="Ngân hàng TMCP Tiên Phong (TPB)">
                                    Ngân hàng TMCP Tiên Phong (TPB)
                                </option>
                                <option className="p-3" value="Ngân hàng TMCP Công Thương Việt Nam (Vietinbank)">
                                    Ngân hàng TMCP Công Thương Việt Nam (Vietinbank).
                                </option>
                                <option
                                    className="p-3"
                                    value="     Ngân hàng TMCP Đầu Tư và Phát triển Việt Nam (BIDV)"
                                >
                                    Ngân hàng TMCP Đầu Tư và Phát triển Việt Nam (BIDV)
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="w-1/6">
                            Số tài khoản:
                            <span className="text-red-600">*</span>
                        </td>
                        <td className="">
                            <input
                                value={bankCode}
                                onChange={(e) => {
                                    setBankCode(e.target.value);
                                }}
                                className="border rounded p-2 focus:outline-teal-400 w-4/5"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => handleAddTransaction()} className="px-8 text-base py-2 btn3 my-3 mx-2">
                Lưu thông tin
            </button>
            <button
                onClick={() => setShowFormAdd(false)}
                className="px-16 py-2  my-3 mx-2 border font-bold rounded hover:opacity-80  text-black"
            >
                Hủy
            </button>
        </div>
    );
}

export default TransactionFormAdd;
