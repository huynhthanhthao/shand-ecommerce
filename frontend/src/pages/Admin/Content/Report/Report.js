import { getReportListApi } from "api/reportApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReport } from "store/reducers/reportSlice";
function Report() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchApi = async () => {
            await getReportListApi(dispatch);
        };
        fetchApi();
    }, [dispatch]);

    const { reportList } = useSelector(({ reportReducer }) => reportReducer);

    return (
        <>
            <div className="bg-[#1f2937] rounded-md mb-3 p-3  shadow-lg  flex items-center justify-between border-gray-600 border-b-4 ">
                <h4 className="text-white ">Đơn báo cáo</h4>
            </div>
            <div className="">
                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">STT</th>
                                    <th className="px-4 py-3">Tiêu đề</th>
                                    <th className="px-4 py-3">Người báo cáo</th>
                                    <th className="px-4 py-3">Nội dung</th>
                                    <th className="px-4 py-3">Tùy chọn</th>
                                </tr>
                            </thead>
                            {reportList && (
                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                    {reportList.map((report, index) => (
                                        <tr
                                            key={index + 1}
                                            className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                                        >
                                            <td className="px-4 py-3 text-sm">
                                                {index + 1}
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                {report.title}
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center text-sm">
                                                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                        <img
                                                            className="object-cover w-full h-full rounded-full"
                                                            src={
                                                                report.student
                                                                    .urlAvatar
                                                            }
                                                            alt=""
                                                            loading="lazy"
                                                        />
                                                        <div
                                                            className="absolute inset-0 rounded-full shadow-inner"
                                                            aria-hidden="true"
                                                        ></div>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">
                                                            {
                                                                report.student
                                                                    .fullName
                                                            }
                                                        </p>
                                                        <p className="text-xs text-gray-600 dark:text-gray-400">
                                                            {
                                                                report.student
                                                                    .username
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-4 py-3 text-xs">
                                                {report.content}
                                            </td>
                                            <td className="px-4 py-3 text-sm text-black">
                                                <button
                                                    className="bg-white py-1 px-3 rounded-md font-bold hover:opacity-80"
                                                    data-te-toggle="modal"
                                                    data-te-target="#detail_report"
                                                    onClick={() => {
                                                        dispatch(
                                                            setReport(report)
                                                        );
                                                    }}
                                                >
                                                    Xem chi tiết
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            )}
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
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            1
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            2
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-blue-600 dark:bg-gray-100 border border-r-0 border-blue-600 dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple">
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

export default Report;
