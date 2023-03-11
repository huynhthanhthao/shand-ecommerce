function Cart() {
    return (
        <div className="px-24 py-5 text-[#0f1e29]">
            <div className="font-bold text-xl gap-3 mb-3">
                Giỏ hàng của bạn (7)
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 ">
                    <ul>
                        <li className="bg-white p-4 rounded-sm mb-3">
                            <div>
                                <div className="flex items-center mb-4">
                                    <img
                                        src="https://media3.scdn.vn/img4/2020/04_17/UYlpUWrE9F76PHEtpJ0O_simg_de2fe0_500x500_maxb.jpg"
                                        alt="shop"
                                        className="w-8 rounded-full mr-2"
                                    />
                                    <p className="font-bold ">
                                        Cửa Hàng Phụ Kiện Điện Tử
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center ">
                                        <input
                                            className="cursor-pointer w-6 h-6"
                                            type="checkbox"
                                            value=""
                                            id="checkboxDefault"
                                        />
                                        <img
                                            className="w-20 mx-3"
                                            alt="product"
                                            src="https://media3.scdn.vn/img4/2020/04_17/UYlpUWrE9F76PHEtpJ0O_simg_de2fe0_500x500_maxb.jpg"
                                        />
                                        <div>
                                            <p className="rounded-lg w-32 py-1 text-center bg-[#e2e6f2] font-bold text-xs text-[#133096]">
                                                Mua trước trả sau
                                            </p>
                                            <a href="http://">
                                                <p className="text-ellipsis overflow-hidden">
                                                    Bút kẻ mắt, sắc nét, lâu
                                                    phai, chống lem Lameila 775
                                                    - 4727sola
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className=" items-center grid grid-cols-3">
                                        <p className="font-bold text-center">
                                            5.605đ
                                        </p>
                                        <div className="text-center">
                                            <div className="select-amount flex relative">
                                                <button className="bg-[#e7e8ea] p-2 rounded text-3xl hover:opacity-60">
                                                    <img
                                                        className="w-5"
                                                        src={require("assets/images/subtraction.png")}
                                                        alt="Subtraction icon"
                                                    />
                                                </button>
                                                <input
                                                    type="text"
                                                    className="w-12 px-2 mx-3 border rounded outline-cyan-600 py-1 text-center font-bold"
                                                />
                                                <button className="bg-[#e7e8ea] p-2 rounded  text-3xl hover:opacity-60">
                                                    <img
                                                        className="w-5"
                                                        src={require("assets/images/add.png")}
                                                        alt="Add icon"
                                                    />
                                                </button>
                                                <p className="absolute top-9 text-orange-600 text-xs">
                                                    Chỉ được mua tối đa 20 sản
                                                    phẩm này.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full text-center">
                                            <button className="w-4 mx-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    className="hover:fill-slate-600"
                                                >
                                                    <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                                                </svg>
                                            </button>
                                            <button className="w-4 mx-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512"
                                                    className="hover:fill-slate-600"
                                                >
                                                    <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t mt-5">
                                    <div className="flex mt-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 640 512"
                                            className="w-5 mr-1 fill-green-700"
                                        >
                                            <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
                                        </svg>
                                        Miễn phí giao hàng tới 25.000đ
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="bg-white p-4 rounded-sm mb-3">
                            <div>
                                <div className="flex items-center mb-4">
                                    <img
                                        src="https://media3.scdn.vn/img4/2020/04_17/UYlpUWrE9F76PHEtpJ0O_simg_de2fe0_500x500_maxb.jpg"
                                        alt="shop"
                                        className="w-8 rounded-full mr-2"
                                    />
                                    <p className="font-bold ">
                                        Cửa Hàng Phụ Kiện Điện Tử
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center ">
                                        <input
                                            className="cursor-pointer w-6 h-6"
                                            type="checkbox"
                                            value=""
                                            id="checkboxDefault"
                                        />
                                        <img
                                            className="w-20 mx-3"
                                            alt="product"
                                            src="https://media3.scdn.vn/img4/2020/04_17/UYlpUWrE9F76PHEtpJ0O_simg_de2fe0_500x500_maxb.jpg"
                                        />
                                        <div>
                                            <p className="rounded-lg w-32 py-1 text-center bg-[#e2e6f2] font-bold text-xs text-[#133096]">
                                                Mua trước trả sau
                                            </p>
                                            <a href="http://">
                                                <p className="text-ellipsis overflow-hidden">
                                                    Bút kẻ mắt, sắc nét, lâu
                                                    phai, chống lem Lameila 775
                                                    - 4727sola
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className=" items-center grid grid-cols-3">
                                        <p className="font-bold text-center">
                                            5.605đ
                                        </p>
                                        <div className="text-center">
                                            <div className="select-amount flex relative">
                                                <button className="bg-[#e7e8ea] p-2 rounded text-3xl hover:opacity-60">
                                                    <img
                                                        className="w-5"
                                                        src={require("assets/images/subtraction.png")}
                                                        alt="Subtraction icon"
                                                    />
                                                </button>
                                                <input
                                                    type="text"
                                                    className="w-12 px-2 mx-3 border rounded outline-cyan-600 py-1 text-center font-bold"
                                                />
                                                <button className="bg-[#e7e8ea] p-2 rounded  text-3xl hover:opacity-60">
                                                    <img
                                                        className="w-5"
                                                        src={require("assets/images/add.png")}
                                                        alt="Add icon"
                                                    />
                                                </button>
                                                <p className="absolute top-9 text-orange-600 text-xs">
                                                    Chỉ được mua tối đa 20 sản
                                                    phẩm này.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full text-center">
                                            <button className="w-4 mx-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    className="hover:fill-slate-600"
                                                >
                                                    <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                                                </svg>
                                            </button>
                                            <button className="w-4 mx-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512"
                                                    className="hover:fill-slate-600"
                                                >
                                                    <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t mt-5">
                                    <div className="flex mt-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 640 512"
                                            className="w-5 mr-1 fill-green-700"
                                        >
                                            <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
                                        </svg>
                                        Miễn phí giao hàng tới 25.000đ
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1 bg-white p-4 rounded-sm h-44">
                    <div className="flex justify-between  border-b pb-3">
                        <div className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-5 mr-1 fill-slate-600"
                            >
                                <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
                            </svg>
                            Mã ưu đãi SHand
                        </div>
                        <button className="text-blue-700">Chọn/nhập mã</button>
                    </div>
                    <div className="flex items-center justify-between my-3">
                        <p className="text-sm">Tạm tính (2 sản phẩm):</p>
                        <p className="text-orange-500 font-bold text-xl">
                            11.210đ
                        </p>
                    </div>
                    <button className="bg-orange-500 w-full text-white font-bold py-3 rounded">
                        Mua ngay
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
