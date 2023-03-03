import { Link } from "react-router-dom";

function Category() {
    return (
        <div className="bg-[#111827] min-h-screen  py-5 ">
            <div className="mb-6">
                <p class="text-sm font-light tracking-wide text-gray-400 uppercase mx-5">
                    Quản lý tài khoản
                </p>
                <ul class="my-2">
                    <li>
                        <Link
                            className="flex text-white px-5 mb-1 cursor-pointer hover:bg-gray-600 py-3 transition"
                            to="/admin/student-list"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                                className="w-5"
                            >
                                <path
                                    className="fill-white"
                                    d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
                                />
                            </svg>
                            <p className="ml-2 text-sm truncate">
                                Tài khoản sinh viên
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex text-white px-5 mb-1 cursor-pointer hover:bg-gray-600 py-3 transition"
                            to="/admin/shop-list"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                                className="w-5"
                            >
                                <path
                                    className="fill-white"
                                    d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"
                                />
                            </svg>
                            <p className="ml-2 text-sm truncate">
                                Tài khoản cửa hàng
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mb-6">
                <p class="text-sm font-light tracking-wide text-gray-400 uppercase mx-5">
                    Danh mục sản phẩm
                </p>
                <ul class="my-2">
                    <li>
                        <Link
                            className="flex text-white px-5 mb-1 cursor-pointer hover:bg-gray-600 py-3 transition"
                            to="/admin/category-product"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-5"
                            >
                                <path
                                    className="fill-white"
                                    d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 0v64h64V96H64zm384 0H192v64H448V96zM64 224v64h64V224H64zm384 0H192v64H448V224zM64 352v64h64V352H64zm384 0H192v64H448V352z"
                                />
                            </svg>
                            <p className="ml-2 text-sm truncate">
                                Danh mục sản phẩm
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mb-6">
                <p class="text-sm font-light tracking-wide text-gray-400 uppercase mx-5">
                    Sự kiện
                </p>
                <ul class="my-2">
                    <li>
                        <Link
                            className="flex text-white px-5 mb-1 cursor-pointer hover:bg-gray-600 py-3 transition"
                            to="/admin/event-list"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-5"
                            >
                                <path
                                    className="fill-white"
                                    d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"
                                />
                            </svg>
                            <p className="ml-2 text-sm truncate">
                                Danh sách sự kiện
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="mb-6">
                <p class="text-sm font-light tracking-wide text-gray-400 uppercase mx-5">
                    Hỗ trợ người dùng
                </p>
                <ul class="my-2">
                    <li>
                        <Link
                            className="flex text-white px-5 mb-1 cursor-pointer hover:bg-gray-600 py-3 transition"
                            to="/admin/support"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                                className="w-5"
                            >
                                <path
                                    className="fill-white"
                                    d="M534 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L525.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L406.3 64.5c-2.7-.3-5.5-.5-8.3-.5H286c-37.1 0-67.6 28-71.6 64H214V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H454c44.2 0 80 35.8 80 80v8zM326 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L89.5 255.2 16.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H374c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H422c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"
                                />
                            </svg>
                            <p className="ml-2 text-sm truncate">
                                Thông tin hỗ trợ
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex text-white px-5 mb-1 cursor-pointer hover:bg-gray-600 py-3 transition"
                            to="/admin/report"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-5"
                            >
                                <path
                                    className="fill-white"
                                    d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"
                                />
                            </svg>
                            <p className="ml-2 text-sm truncate">
                                Đơn khiếu nại
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Category;
