import { getAllAccountApi } from "api/accountApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAccountTarget } from "store/reducers/accountSlice";

function AccountList() {
    const dispatch = useDispatch();

    let index = 0;

    useEffect(() => {
        const fetchData = async () => {
            await getAllAccountApi(dispatch);
        };
        fetchData();
    }, [dispatch]);

    const { accountList } = useSelector(({ accountReducer }) => accountReducer);

    return (
        <>
            <div className=" bg-[#1f2937] rounded-md mb-3 p-3  shadow-lg  flex items-center justify-between border-gray-600 border-b-4 ">
                <h4 className="text-white ">Tài khoản cửa hàng </h4>
                <button
                    className="bg-white py-1 px-3 rounded-md font-bold hover:opacity-80"
                    data-bs-toggle="modal"
                    data-bs-target="#add_shop"
                    // data-te-ripple-init
                    // data-te-ripple-color="light"
                >
                    Thêm tài khoản
                </button>
            </div>
            <div className="">
                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">STT</th>
                                    <th className="px-4 py-3">ID Shop</th>
                                    <th className="px-4 py-3">Họ và tên</th>
                                    <th className="px-4 py-3">Trạng thái</th>
                                    <th className="px-4 py-3">Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                {accountList.map((account) => {
                                    if (account.role === "shop") {
                                        index++;
                                        return (
                                            <tr
                                                key={account.username}
                                                className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                                            >
                                                <td className="px-4 py-3 text-sm">{index}</td>
                                                <td className="px-4 py-3 text-sm">{account.username}</td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center text-sm">
                                                        <div className="  w-8 h-8 mr-3 rounded-full md:block">
                                                            <img
                                                                className="object-cover w-full h-full rounded-full"
                                                                src={account.urlAvatar}
                                                                alt=""
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold">{account.fullName}</p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-4 py-3 text-xs">
                                                    {account.status ? (
                                                        <span className="px-2 py-1 font-semibold leading-tight text-white bg-green-700  rounded-full ">
                                                            Đang hoạt động
                                                        </span>
                                                    ) : (
                                                        <span className="px-2 py-1 font-semibold leading-tight text-white bg-orange-600 rounded-full ">
                                                            Đang khóa
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-4 py-3 text-sm">
                                                    <button
                                                        className="hover:opacity-80 mx-1"
                                                        onClick={() => {
                                                            dispatch(setAccountTarget(account));
                                                        }}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                            className="w-5"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#edit_shop"
                                                        >
                                                            <path
                                                                className="fill-white"
                                                                d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        className="hover:opacity-80 mx-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#delete_shop"
                                                        onClick={() => {
                                                            dispatch(setAccountTarget(account));
                                                        }}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 448 512"
                                                            className="w-5"
                                                        >
                                                            <path
                                                                className="fill-white"
                                                                d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                                                            />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    } else return <tr key={account.username}></tr>;
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                        <span className="flex items-center col-span-3"></span>
                        <span className="col-span-2"></span>
                        <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                            <nav aria-label="Table navigation">
                                <ul className="inline-flex items-center">
                                    <li>
                                        <button
                                            className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                                            aria-label="Previous"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="w-4 h-4 fill-current"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                    fillRule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1  text-black transition-colors duration-150 bg-white  border-r-0 border-blue-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            1
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            2
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            3
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            4
                                        </button>
                                    </li>
                                    <li>
                                        <span className="px-3 py-1">...</span>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            8
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            9
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                                            aria-label="Next"
                                        >
                                            <svg
                                                className="w-4 h-4 fill-current"
                                                aria-hidden="true"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clipRule="evenodd"
                                                    fillRule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountList;
