import { useDispatch } from "react-redux";
import { showLogin } from "store/reducers/LoginModalSlice";
function Header() {
    const dispatch = useDispatch();
    return (
        <header className="flex justify-between items-center py-4 px-24 bground ">
            <div className="flex">
                <h3 className="text-white font-[Prompt] from-sky-50">SHAND</h3>
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
            <div className="relative  flex-1">
                <input
                    type="text"
                    className="w-full py-2 px-4 border-none outline-none bg-[#f5f7f9] rounded-lg "
                    placeholder="Tìm kiếm sản phẩm..."
                />
                <img
                    alt="Search icon"
                    src={require("assets/images/search.png")}
                    className="w-5 absolute right-4 top-[50%] -translate-y-1/2"
                />
            </div>
            <div className="flex items-center">
                <div className="mx-8 flex">
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
                </div>
                <button
                    className="flex bg-[white] btn"
                    onClick={() => {
                        dispatch(showLogin());
                    }}
                >
                    Đăng nhập
                </button>
            </div>
        </header>
    );
}

export default Header;
