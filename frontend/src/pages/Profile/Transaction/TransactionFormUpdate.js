import { updateTransactionApi } from "api/transactionApi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function UpdateAddressForm({ setShowFormUpdate }) {
    const dispatch = useDispatch();
    const { transaction } = useSelector(
        ({ transactionReducer }) => transactionReducer
    );
    const { account } = useSelector(({ accountReducer }) => accountReducer);

    const [fullName, setFullName] = useState(transaction.fullName);
    const [bankCode, setBankCode] = useState(transaction.bankCode);
    const [bankName, setBankName] = useState(transaction.bankName);
    const handleUpdateTransaction = () => {
        updateTransactionApi(
            {
                username: account.username,
                fullName,
                bankCode,
                bankName,
            },
            dispatch
        );

        setShowFormUpdate(false);
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
                            <input
                                value={bankName}
                                onChange={(e) => {
                                    setBankName(e.target.value);
                                }}
                                className="border rounded p-2 focus:outline-teal-400 w-4/5"
                            />
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
            <button
                onClick={() => handleUpdateTransaction()}
                className="px-8 text-base py-2 btn3 my-3 mx-2"
            >
                Lưu thông tin
            </button>
            <button
                onClick={() => setShowFormUpdate(false)}
                className="px-16 py-2  my-3 mx-2 border font-bold rounded hover:opacity-80  text-black"
            >
                Hủy
            </button>
        </div>
    );
}

export default UpdateAddressForm;
