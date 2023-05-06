import { useDispatch } from "react-redux";
import { showLogin } from "store/reducers/authSlice";
import { useSelector } from "react-redux";
import { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchProductApi } from "api/productApi";

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [option, setOption] = useState(false);
    const [name, setName] = useState("");

    const useOutsideBox = function (ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOption(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    };

    const wrapperRefOption = useRef(null);

    useOutsideBox(wrapperRefOption);

    const account = useSelector((state) => state.accountReducer.account);

    return (
        <header className="flex justify-between items-center py-4 px-24 bground ">
            <div className="flex">
                <Link to="/">
                    <h3 className="text-white font-[Prompt] from-sky-50">SHAND</h3>
                </Link>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="d7ed-SwZDZ2 ml-8 mr-4"
            >
                <path
                    d="M9 2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5zm0 2H4v5h5V4zm11-2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5zm0 2h-5v5h5V4zM9 13a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h5zm0 2H4v5h5v-5zm8.5-2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5z"
                    fill="white"
                    fillRule="nonzero"
                ></path>
            </svg>

            <div className="relative flex-1 ">
                <input
                    value={name}
                    type="text"
                    className="w-full py-2 px-3 border-none outline-none bg-[#f5f7f9] rounded "
                    placeholder="Tìm kiếm sản phẩm..."
                    onKeyDown={async (e) => {
                        if (e.key === "Enter") {
                            if (name.trim() === "") return navigate(`/`);
                            return navigate(`/search/${name}`);
                        }
                    }}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <img
                    onClick={() => {
                        if (name.trim() === "") return navigate(`/`);

                        return navigate(`/search/${name}`);
                        // window.location.href = `/search/${name}`;
                    }}
                    alt="Search icon"
                    src={require("assets/images/search.png")}
                    className="w-5 absolute right-4 top-[50%] -translate-y-1/2 hover:opacity-75 cursor-pointer"
                />
            </div>
            <div className="flex items-center">
                <div className="mx-8 flex">
                    <Link to="/cart">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            className="d7ed-SwZDZ2 "
                        >
                            <path
                                d="m20.946 2 .994 17.89a2 2 0 0 1-1.886 2.107l-.111.003H4.057a2 2 0 0 1-2-2c0-.055 0-.055.003-.11L3.054 2h17.892Zm-1.892 2H4.946l-.889 16h15.886l-.889-16ZM9 6v2.5c0 1.248 1.385 2.5 3 2.5s3-1.252 3-2.5V6h2v2.5c0 2.4-2.323 4.5-5 4.5s-5-2.1-5-4.5V6h2Z"
                                fill="#fff"
                                fillRule="nonzero"
                            ></path>
                        </svg>
                    </Link>
                </div>
                {account ? (
                    <>
                        <div ref={wrapperRefOption} className="relative flex bg-[white] z-10  p-1 rounded-3xl">
                            <div
                                onClick={() => setOption(true)}
                                className="flex items-center cursor-pointer hover:opacity-80"
                            >
                                <img src={account.urlAvatar} alt="avatar" className="w-7 h-7 rounded-full " />
                                <p className="font-bold text-sm px-1">{account.fullName}</p>
                            </div>
                            {option && (
                                <div className="bg-white shadow-lg shadow-slate-400/20 w-[182px] py-2  px-2 rounded-md absolute top-10 right-0">
                                    <ul>
                                        <li className="px-2 hover:bg-[#f2f3f4] hover:font-bold cursor-pointer py-1">
                                            <Link to="/profile/account">Thông tin tài khoản</Link>
                                        </li>
                                        <li className="px-2 hover:bg-[#f2f3f4] hover:font-bold cursor-pointer py-1">
                                            <Link to="/profile/love-products">Sản phẩm yêu thích</Link>
                                        </li>
                                        <li className="px-2 hover:bg-[#f2f3f4] hover:font-bold cursor-pointer py-1">
                                            <Link to="/profile/order-receive/pending">Theo dõi đơn hàng</Link>
                                        </li>
                                        <li
                                            onClick={() => {
                                                localStorage.clear();
                                                window.location.replace("/");
                                            }}
                                            className="px-2 hover:bg-[#f2f3f4] hover:font-bold cursor-pointer py-1"
                                        >
                                            Thoát tài khoản
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <button
                        className="flex bg-[white] btn"
                        onClick={() => {
                            dispatch(showLogin());
                        }}
                    >
                        Đăng nhập
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;
