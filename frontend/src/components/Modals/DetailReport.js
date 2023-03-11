function DetailReport() {
    return (
        <>
            <div
                data-te-modal-init
                className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="detail_report"
                tabIndex="-1"
                aria-labelledby="exampleModalFullscreenLabel"
                aria-hidden="true"
            >
                <div
                    data-te-modal-dialog-ref
                    className="h-screen transform-none opacity-100 duration-300 ease-in-out transition"
                >
                    <div className="pointer-events-auto relative flex w-full flex-col rounded-md bg-white bg-clip-padding text-current shadow-lg outline-none  min-[0px]:h-full min-[0px]:rounded-none min-[0px]:border-0">
                        <div className="flex  flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 min-[0px]:rounded-none">
                            <h5
                                className="text-xl font-medium leading-normal text-neutral-800 "
                                id="exampleModalFullscreenLabel"
                            >
                                Chi tiết đơn báo cáo
                            </h5>
                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="relative p-4 min-[0px]:overflow-y-auto">
                            <div className="grid grid-cols-2 mx-28 gap-5">
                                <div className="border-r-2 px-5">
                                    <div className="text-xl font-bold my-3">
                                        Thông tin người báo cáo
                                    </div>
                                    <div className="my-3">
                                        <div className="mb-2">
                                            Mã số sinh viên
                                        </div>
                                        <div className="border p-3 rounded ">
                                            B1906570
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <div className="mb-2">Họ tên</div>
                                        <div className="border p-3 rounded ">
                                            Huỳnh Thanh Thảo
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <div className="mb-2">Tiêu đề</div>
                                        <div className="border p-3 rounded ">
                                            Sản phẩm lừa đảo
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <div className="mb-2">Email</div>
                                        <div className="border p-3 rounded ">
                                            thao@gmail.com
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <div className="mb-2">
                                            Nội dung báo cáo
                                        </div>
                                        <div className="border p-3 rounded ">
                                            thao@gmail.com
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold">
                                        Thông tin sản phẩm bị báo cáo
                                    </div>

                                    <div className="my-3">
                                        <div className="mb-2">Chủ sở hữu</div>
                                        <div className="border p-3 rounded ">
                                            thao@gmail.com B1906570
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <div className="mb-2">Điện thoại</div>
                                        <div className="border p-3 rounded ">
                                            0933 510 548
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <div className="mb-2">Tên sản phẩm</div>
                                        <div className="border p-3 rounded ">
                                            Kem trộn chính hãng
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <div className="mb-2">Hình ảnh</div>
                                        <div className="border p-3 rounded flex">
                                            <img
                                                className="w-32 mr-3"
                                                alt="product"
                                                src="https://vinmec-prod.s3.amazonaws.com/images/20210614_152923_982613_kem-tron-1.max-1800x1800.jpg"
                                            />
                                            <img
                                                className="w-32"
                                                alt="product"
                                                src="https://vinmec-prod.s3.amazonaws.com/images/20210614_152923_982613_kem-tron-1.max-1800x1800.jpg"
                                            />
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <div className="mb-2">
                                            Link sản phẩm
                                        </div>
                                        <div className="border p-3 rounded text-blue-700">
                                            <a href="https://tailwindcomponents.com/components/forms">
                                                https://tailwindcomponents.com/components/forms
                                            </a>
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <div className="mb-2">Tùy chọn</div>
                                        <button className="mr-3 inline-block rounded bg-danger px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]">
                                            Xóa sản phẩm này
                                        </button>
                                        <button className="inline-block rounded bg-info px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
                                            Xóa đơn báo cáo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 min-[0px]:rounded-none">
                            <button
                                type="button"
                                className="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                                data-te-modal-dismiss
                            >
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailReport;
