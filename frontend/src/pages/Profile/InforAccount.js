import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDetailAccount } from "api/accountApi";
import { closeLoading, openLoading } from "store/reducers/loadingSlice";

function InforAccount() {
    const dispatch = useDispatch();
    const { account } = useSelector(({ accountReducer }) => accountReducer);
    const [changePassword, setChangePassword] = useState(false);
    const [fullName, setFullName] = useState(account.fullName);
    const [email, setEmail] = useState(account.email);
    const [phoneNumber, setPhoneNumber] = useState(account.phoneNumber);
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [imageAvatar, setImageAvatar] = useState(account.urlAvatar);
    const [file, setFile] = useState({});
    const updateInfor = async () => {
        try {
            // Save image in the cloudinary
            const CLOUDINARY_UPLOAD_PRESET = "qle01vei";
            const formData = new FormData();
            let detailImage = {};
            formData.append("file", file);

            if (file.name) {
                formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
                dispatch(openLoading(""));

                const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/drjynwuyt/upload";
                detailImage = await fetch(CLOUDINARY_URL, {
                    method: "POST",
                    body: formData,
                }).then((data) => {
                    return data.json();
                });
            }

            // update database
            updateDetailAccount(
                {
                    ...account,
                    urlAvatar: detailImage.secure_url ? detailImage.secure_url : account.urlAvatar,
                    fullName,
                    email,
                    phoneNumber,
                    password,
                    passwordAgain,
                },
                dispatch
            );
            dispatch(closeLoading());
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="infor-account animate__animated animate__fadeIn">
            <label className="font-bold">Thông tin tài khoản</label>
            <div className="px-10 grid grid-cols-6 py-4  border-t my-3 ">
                <div className="col-span-1">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden  border border-[#5e6d81]">
                        <img src={imageAvatar ? imageAvatar : account.urlAvatar} alt="account" className="" />
                        <label
                            htmlFor="imageAvatar"
                            className="absolute cursor-pointer hover:opacity-75 text-center bottom-0 left-1/2 -translate-x-1/2 bg-[#0000008a] text-white text-xs py-1 w-full"
                        >
                            Thay đổi
                        </label>
                        <input
                            type="file"
                            className="hidden"
                            id="imageAvatar"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                setImageAvatar(URL.createObjectURL(file));
                                setFile(file);
                            }}
                        />
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
                                    <input
                                        className="input w-4/5 focus:shadow-input  p-2"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
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
                                        className="input w-4/5 focus:shadow-input p-2"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="w-1/6">
                                    Email cá nhân:
                                    <span className="text-red-600">*</span>
                                </td>
                                <td className="">
                                    <input
                                        type="email"
                                        className="input w-4/5 focus:shadow-input  p-2"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="w-1/6"></td>
                                <td
                                    onClick={() => setChangePassword(!changePassword)}
                                    className="text-sky-600 hover:cursor-pointer hover:opacity-80"
                                >
                                    Đổi mật khẩu
                                </td>
                            </tr>
                            {changePassword && (
                                <>
                                    <tr>
                                        <td className="w-1/6">Mật khẩu cũ:</td>
                                        <td className="">
                                            <input
                                                className="input w-4/5 focus:shadow-input  p-2"
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/6">Mật khẩu mới:</td>
                                        <td className="">
                                            <input
                                                className="input w-4/5 focus:shadow-input  p-2"
                                                type="password"
                                                value={passwordAgain}
                                                onChange={(e) => setPasswordAgain(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                </>
                            )}
                            <tr>
                                <td className="w-1/6"></td>
                                <td>
                                    <button onClick={() => updateInfor()} className="px-16 text-base py-2 btn3 my-3">
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
