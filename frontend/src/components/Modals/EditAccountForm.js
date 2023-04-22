import { useDispatch, useSelector } from "react-redux";

import { updateAccountApi } from "api/accountApi";
import { useState } from "react";

function EditAccountForm(props) {
    const dispatch = useDispatch();

    const { accountTarget } = useSelector(({ accountReducer }) => accountReducer);

    const handleUpdateAccount = async () => {
        if (password === "") password = accountTarget.password;
        await updateAccountApi({ ...accountTarget, password, fullName, status }, dispatch);
    };

    const [username, setUsername] = useState(accountTarget.username);
    const [fullName, setFullName] = useState("");
    let [password, setPassword] = useState("");
    const [status, setStatus] = useState(accountTarget.status);
    return (
        <>
            <div
                className="modal fade"
                id="edit_student"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 ">
                            <h5
                                className="text-xl font-medium leading-normal text-neutral-800"
                                id="exampleModalScrollableLabel"
                            >
                                {props.label}
                            </h5>

                            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="relative p-4">
                            <form>
                                <div className="flex flex-col mb-2">
                                    <label className="pb-2">Tên đăng nhập</label>
                                    <input
                                        className="p-2 border outline-neutral-400"
                                        placeholder="Nhập tên đăng nhập..."
                                        value={accountTarget.username}
                                        onChange={(e) => setUsername(username)}
                                        disabled
                                    />
                                </div>
                                <div className="flex flex-col mb-2">
                                    <label className="pb-2">Tên đầy đủ</label>
                                    <input
                                        className="p-2 border outline-neutral-400"
                                        placeholder="Nhập họ tên..."
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col mb-2">
                                    <label className="pb-2">Mật khẩu</label>
                                    <input
                                        className="p-2 border outline-neutral-400"
                                        placeholder="Nhập mật khẩu..."
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col justify-between  mb-2">
                                    <label className="pb-2">Tùy chọn</label>
                                    <div className="flex items-center">
                                        <input
                                            className="mr-2 w-5 h-5 outline-neutral-400"
                                            type="checkbox"
                                            checked={status}
                                            onChange={(e) => setStatus(e.target.checked)}
                                        />
                                        Hoạt động
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <button
                                type="button"
                                className="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                Đóng
                            </button>
                            <button
                                className="bg-green-700 ml-1 inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase  text-white "
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => handleUpdateAccount()}
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditAccountForm;
