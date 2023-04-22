import { addAddressListApi } from "api/addressReceiveApi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddAddressForm({ setShowFormAdd }) {
    const dispatch = useDispatch();
    const { account } = useSelector(({ accountReducer }) => accountReducer);
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [isDefault, setIsDefault] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleAddAddress = () => {
        addAddressListApi(
            {
                username: account.username,
                fullName,
                address,
                phoneNumber,
                isDefault,
            },
            dispatch
        );
    };
    return (
        <div className="address-form animate__animated animate__fadeIn">
            <table className="w-full border-separate border-spacing-2  ">
                <tbody>
                    <tr>
                        <td className="w-1/6">
                            Họ và tên:
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
                            Số điện thoại:
                            <span className="text-red-600">*</span>
                        </td>
                        <td className="">
                            <input
                                value={phoneNumber}
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value);
                                }}
                                className="border rounded p-2 focus:outline-teal-400 w-4/5"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="w-1/6">
                            Địa chỉ:
                            <span className="text-red-600">*</span>
                        </td>
                        <td className="">
                            <input
                                value={address}
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                                className="border rounded p-2 focus:outline-teal-400 w-4/5"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="">
                            Mặc định:
                            <span className="text-red-600">*</span>
                        </td>
                        <td className="">
                            <input
                                type="checkbox"
                                value={isDefault}
                                onChange={(e) => {
                                    setIsDefault(e.target.checked);
                                }}
                                className="border rounded p-2 focus:outline-teal-400  w-5 h-5 cursor-pointer"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => handleAddAddress()} className="px-8 text-base py-2 btn3 my-3 mx-2">
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

export default AddAddressForm;
