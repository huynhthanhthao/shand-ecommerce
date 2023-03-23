import { updateAddressReceiveApi } from "api/addressReceiveApi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddressReceive } from "store/reducers/addressReceiveSlice";

function UpdateAddressForm({ setShowFormUpdate }) {
    const dispatch = useDispatch();
    const { addressReceive } = useSelector(
        ({ addressReceiveReducer }) => addressReceiveReducer
    );
    const [fullName, setFullName] = useState(addressReceive.fullName);
    const [address, setAddress] = useState(addressReceive.address);

    const [phoneNumber, setPhoneNumber] = useState(addressReceive.phoneNumber);
    const handleUpdateAddress = () => {
        updateAddressReceiveApi(
            {
                id: addressReceive.id,
                fullName,
                address,
                phoneNumber,
            },
            dispatch
        );
    };
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
                                    dispatch(setAddressReceive(address));
                                }}
                                className="border rounded p-2 focus:outline-teal-400 w-4/5"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button
                onClick={() => handleUpdateAddress()}
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
