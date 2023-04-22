import { createReportApi } from "api/reportApi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ReportModal() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const { detailProduct: product } = useSelector(({ productReducer }) => productReducer);
    const { account } = useSelector(({ accountReducer }) => accountReducer);

    const handleCreateReport = async () => {
        try {
            await createReportApi(
                {
                    title,
                    content,
                    reportedStudentId: product.detail.ownId,
                    studentId: account.username,
                    productId: product.detail.id,
                },
                dispatch
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div
                className="modal fade"
                id="report_modal"
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
                                Báo cáo sản phẩm
                            </h5>

                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6 "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                        className="text-black"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="relative p-4">
                            <form>
                                <div className="flex flex-col mb-2">
                                    <label className="pb-2">Tiêu đề</label>
                                    <input
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="p-2 border outline-neutral-400"
                                        placeholder="Nhập tiêu đề..."
                                    />
                                </div>
                                <div className="flex flex-col mb-2">
                                    <label className="pb-2">Nội dung</label>
                                    <textarea
                                        className="p-2 border outline-neutral-400"
                                        placeholder="Nhập nội dung..."
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                    ></textarea>
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
                                onClick={(e) => {
                                    handleCreateReport();
                                }}
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

export default ReportModal;
