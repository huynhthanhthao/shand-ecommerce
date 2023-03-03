function HeaderAdmin() {
    return (
        <div className="header-admin flex justify-between items-center px-10 bg-[#1f2937]  py-2">
            <div className="flex">
                <div class="flex items-center mr-36">
                    <img
                        src={require("assets/images/admin.jpg")}
                        className="w-10 mr-2 rounded"
                        alt="admin "
                    />
                    <p className="font-bold text-white">ADMIN</p>
                </div>
                <div className="flex bg-white p-2 rounded w-[550px]">
                    <svg
                        className="w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            className="fill-[#1f2937]"
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                        />
                    </svg>
                    <input
                        className="input outline-none border-none"
                        type="text"
                        placeholder="search"
                    />
                </div>
            </div>
            <div class="flex items-center font-bold">
                <svg
                    className="w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                        className="fill-white"
                        d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"
                    />
                </svg>
                <button className="text-white">Logout</button>
            </div>
        </div>
    );
}

export default HeaderAdmin;
