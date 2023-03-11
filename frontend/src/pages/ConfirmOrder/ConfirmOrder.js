function ConfirmOrder() {
    return (
        <div className="mx-32 grid grid-cols-3 gap-4 text-[#000]">
            <div className="col-span-2">
                {/* Address received */}
                <div className="bg-white rounded-sm my-4 shadow ">
                    <div className="bg-[#f6fcff] flex justify-between p-3">
                        <div className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                                className="w-3 mr-2 fill-blue-700"
                            >
                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg>
                            <div>
                                <div className="font-bold">
                                    Địa chỉ nhận hàng
                                </div>
                            </div>
                        </div>
                        <button className="text-blue-700">Thay đổi </button>
                    </div>
                    <div className="px-6 py-3">
                        <div className="flex">
                            <p className="text-sm font-bold">
                                Huynh Thanh&nbsp;
                            </p>
                            <p className="text-sm text-slate-600">
                                | 0355219791
                            </p>
                        </div>
                        <p className="text-sm text-slate-600">
                            Can Tho, Xã Bành Trạch, Huyện Ba Bể, Bắc Kạn
                        </p>
                    </div>
                </div>
                {/* Method pay */}
                <div className="bg-white rounded-sm my-4 shadow ">
                    <div className="bg-[#f6fcff] flex justify-between p-3">
                        <div className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-5 mr-2 fill-blue-700"
                            >
                                <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                            </svg>
                            <div>
                                <div className="font-bold">
                                    Phương thức thanh toán
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-3">
                        <label className="flex justify-between border p-2 rounded shadow-md drop-shadow-2xl cursor-pointer mb-2">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="mr-3 bg-orange-500 w-5 h-5"
                                    name="method_pay"
                                    id="cash"
                                />
                                <div>
                                    <p className="font-bold">Tiền mặt</p>
                                    <p className="text-sm text-slate-500">
                                        Thanh toán khi nhận hàng
                                    </p>
                                </div>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-5 fill-slate-500 "
                            >
                                <path d="M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64H64V352zm64-208c0 35.3-28.7 64-64 64V144h64zM512 304v64H448c0-35.3 28.7-64 64-64zM448 96h64v64c-35.3 0-64-28.7-64-64z" />
                            </svg>
                        </label>
                        <label className="flex justify-between border p-2 rounded shadow-md drop-shadow-2xl cursor-pointer mb-2">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="mr-3 bg-orange-500 w-5 h-5"
                                    name="method_pay"
                                    id="bank"
                                />
                                <div>
                                    <p className="font-bold">Chuyển khoản</p>
                                    <p className="text-sm text-slate-500">
                                        Chuyển khoản ngân hàng
                                    </p>
                                </div>
                            </div>

                            <svg
                                className="w-5 fill-slate-500 "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                            >
                                <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z" />
                            </svg>
                        </label>
                    </div>
                </div>
                {/* End method pay */}
                {/* infor product */}
                <div className="bg-white rounded-sm my-4 shadow ">
                    <div className="bg-[#f6fcff] flex justify-between p-3">
                        <div className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                                className="w-3 mr-2 fill-blue-700"
                            >
                                <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                            </svg>
                            <div>
                                <div className="font-bold">
                                    Thông tin sản phẩm
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-3">
                        <ul>
                            <li className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                    <img
                                        className="w-12 h-12 mr-2"
                                        alt="product"
                                        src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/02/rose-cake-820x1024.jpg?fit=640%2C20000&quality=95&ssl=1"
                                    />
                                    <div className="text-sm">
                                        <p className="uppercase font-bold">
                                            THÙNG 10 BỊCH KHĂN GIẤY ƯỚT VỊT VÀNG
                                            MOM LOVE
                                        </p>
                                        <p className="text-orange-600 font-bold">
                                            42.000đ
                                        </p>
                                    </div>
                                </div>
                                <p className="font-bold">x1</p>
                            </li>
                            <li className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                    <img
                                        className="w-12 h-12 mr-2"
                                        alt="product"
                                        src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/02/rose-cake-820x1024.jpg?fit=640%2C20000&quality=95&ssl=1"
                                    />
                                    <div className="text-sm">
                                        <p className="uppercase font-bold">
                                            THÙNG 10 BỊCH KHĂN GIẤY ƯỚT VỊT VÀNG
                                            MOM LOVE
                                        </p>
                                        <p className="text-orange-600 font-bold">
                                            42.000đ
                                        </p>
                                    </div>
                                </div>
                                <p className="font-bold">x1</p>
                            </li>
                            <li className="flex items-center justify-between mb-2 text-[#333]">
                                <div className="flex items-center">
                                    <img
                                        className="w-12 h-12 mr-2"
                                        alt="product"
                                        src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/02/rose-cake-820x1024.jpg?fit=640%2C20000&quality=95&ssl=1"
                                    />
                                    <div className="text-sm">
                                        <p className="uppercase font-bold">
                                            THÙNG 10 BỊCH KHĂN GIẤY ƯỚT VỊT VÀNG
                                            MOM LOVE
                                        </p>
                                        <p className="text-orange-600 font-bold">
                                            42.000đ
                                        </p>
                                    </div>
                                </div>
                                <p className="font-bold">x1</p>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* End infor product */}
            </div>
            {/* Total */}
            <div>
                <div className="bg-white rounded-sm my-4 shadow ">
                    <div className="px-6 py-3">
                        <div className="flex justify-between mb-3">
                            <p className="text-sm text-gray-700">Tiền hàng</p>
                            <p className="text-sm font-bold">20.599đ</p>
                        </div>

                        <div className="flex justify-between mb-3">
                            <p className="text-sm text-gray-700">Giảm giá</p>
                            <p className="text-sm font-bold">0đ</p>
                        </div>
                        <div className="flex justify-between mb-3 items-center">
                            <p className="text-sm text-gray-700">
                                Tổng thanh toán (Chưa tính phí giao hàng)
                            </p>
                            <p className="text-xl font-bold text-orange-600">
                                20.599đ
                            </p>
                        </div>
                        <button className="btn3 w-full py-3 text-base">
                            Đặt hàng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmOrder;
