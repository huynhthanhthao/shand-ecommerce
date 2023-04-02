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
                data-te-modal-init
                className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                tabIndex="-1"
                aria-labelledby="report_modal"
                aria-modal="true"
                role="dialog"
                id="report_modal"
            >
                <div
                    data-te-modal-dialog-ref
                    className=" pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
                >
                    <div className="bg-white pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-clip-padding text-current shadow-lg outline-none">
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
                                data-te-modal-dismiss
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
                                data-te-modal-dismiss
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Đóng
                            </button>
                            <button
                                className="bg-green-700 ml-1 inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase  text-white "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                data-te-modal-dismiss
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
