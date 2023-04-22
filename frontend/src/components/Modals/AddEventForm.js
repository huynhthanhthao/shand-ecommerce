import { createEventApi } from "api/eventApi";
import { useState } from "react";
import { useDispatch } from "react-redux";

function AddEventForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState("");
    const [purpose, setPurpose] = useState("");
    const [status, setStatus] = useState(true);
    const [time, setTime] = useState("");

    const handleCreateEvent = async () => {
        try {
            await createEventApi(
                {
                    title,
                    address,
                    date,
                    purpose,
                    status,
                    time,
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
                id="add_event"
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
                                Thêm sự kiện bán đồ cũ
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
                                    <label className="pb-2">Tên danh mục</label>
                                    <input
                                        className="p-2 border outline-neutral-400"
                                        placeholder="Nhập tên sự kiện..."
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col mb-2">
                                    <label className="pb-2">Địa điểm tổ chức</label>
                                    <input
                                        className="p-2 border outline-neutral-400"
                                        placeholder="Nhập địa điểm..."
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                                <div className="flex  mb-2">
                                    <div className="flex flex-col w-1/3 justify-center mr-2">
                                        <label className="pb-2">Thời gian</label>

                                        <input
                                            className="p-2 outline-neutral-400 border"
                                            type="time"
                                            onChange={(e) => setTime(e.target.value)}
                                            value={time}
                                        />
                                    </div>
                                    <div className="flex flex-col w-full justify-center">
                                        <label className="pb-2">Ngày</label>
                                        <input
                                            className="p-2 outline-neutral-400 border"
                                            type="date"
                                            onChange={(e) => setDate(e.target.value)}
                                            value={date}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-2">
                                    <label className="pb-2">Mục đích sự kiện</label>
                                    <textarea
                                        className="p-2 border outline-neutral-400"
                                        placeholder="Nhập mục đích sự kiện..."
                                        value={purpose}
                                        onChange={(e) => setPurpose(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="flex flex-col mb-2">
                                    <label className="pb-2">Trạng thái</label>

                                    <div className="flex items-center">
                                        <input
                                            className="mr-2 w-4 h-4 p-2 border outline-neutral-400"
                                            value={status}
                                            type="checkbox"
                                            onChange={(e) => setStatus(e.target.checked)}
                                        />
                                        Bật thông báo{" "}
                                    </div>
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
                                onClick={(e) => handleCreateEvent()}
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

export default AddEventForm;
