import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeLogin } from "store/reducers/authSlice";
import { login } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

function LoginModal() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const changeUsername = (e) => {
        setUsername(e.target.value);
    };
    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="login-modal w-full h-full bg-[#0f1e2980] absolute top-0 animate__animated animate__fadeIn">
            <div className="flex flex-col w-[425px] h-[520px] bg-white p-5 fixed bottom-[15%] right-1/2 translate-x-1/2 rounded-lg">
                <button
                    className="btn self-end hover:bg-[#f2f3f4]"
                    onClick={() => {
                        dispatch(closeLogin());
                    }}
                >
                    Thoát
                </button>
                <h4 className="mt-4 mb-2 ">Xin chào,</h4>
                <div className="my-3">Đăng nhập vào Shand</div>
                <input
                    className="input px-2 py-3 my-2"
                    placeholder="Tên đăng nhập"
                    value={username}
                    onChange={changeUsername}
                />
                <input
                    className="input px-2 py-3 my-2"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={changePassword}
                />

                <button
                    onClick={async () => {
                        const response = await login({ username, password }, dispatch);
                        if (response.user.role === "admin") {
                            navigate("/admin/student-list");
                        }
                    }}
                    className="bground text-[19px] transition border-none p-4 my-2 rounded text-sm font-semibold text-white hover:opacity-80"
                >
                    Đăng nhập
                </button>

                <div className="text-center mt-auto">
                    <>
                        <button className="text-cyan-800">&nbsp;Quên mật khẩu?</button>
                    </>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
