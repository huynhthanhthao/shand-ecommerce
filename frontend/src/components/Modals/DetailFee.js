import { deleteFeeApi } from "api/feeApi";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { deleteFee } from "store/reducers/feeSlice";
function DetailFee(props) {
    const dispatch = useDispatch();
    const { feeTarget } = useSelector(({ feeReducer }) => feeReducer);

    const handleConfirmPay = async () => {
        await deleteFeeApi({ sellerId: feeTarget.sellerId });
        dispatch(deleteFee({ sellerId: feeTarget.sellerId }));
    };
    return (
        <div
            className="modal fade"
            id="detail_fee"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2  border-opacity-100 p-4 dark:border-opacity-50">
                        <h5
                            className="text-xl flex items-center font-medium leading-normal text-neutral-800"
                            id="exampleModalLabel"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 mr-2">
                                <path
                                    className="fill-yellow-600"
                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                                />
                            </svg>
                            Chi tiết phí bán hàng
                        </h5>
                        <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="relative flex-auto p-4" data-te-modal-body-ref>
                        {feeTarget && (
                            <div className=" p-3    leading-8">
                                <div className="grid grid-cols-2">
                                    <p className="font-bold">Họ tên:</p>
                                    <p>{feeTarget?.seller?.fullName}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="font-bold">MSSV:</p>
                                    <p>{feeTarget.seller?.username}</p>
                                </div>

                                <div className="grid grid-cols-2">
                                    <p className="font-bold">Tổng số hóa đơn:</p>
                                    <p>{JSON.parse(feeTarget.billList).length} hóa đơn</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="font-bold">Doanh thu:</p>
                                    <p>
                                        {JSON.parse(feeTarget.billList)
                                            .reduce((total, currentValue) => {
                                                return total + currentValue.order.total;
                                            }, 0)
                                            .toLocaleString()
                                            .split(",")}{" "}
                                        vnd
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="font-bold">Phí bán hàng:</p>
                                    <p>
                                        {(
                                            (JSON.parse(feeTarget.billList).reduce((total, currentValue) => {
                                                return total + currentValue.order.total;
                                            }, 0) *
                                                2) /
                                            100
                                        )
                                            .toLocaleString()
                                            .split(",")}{" "}
                                        vnd
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="font-bold">Hạn cuối nộp phí:</p>
                                    <p>
                                        <Moment format="DD/MM/YYYY">{feeTarget.deadLine}</Moment>
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="font-bold">Tình trạng:</p>
                                    {JSON.parse(feeTarget.billList).length > 0 ? (
                                        <p className="text-yellow-500">Chưa thanh toán</p>
                                    ) : (
                                        <p className="text-green-600">Đã thanh toán</p>
                                    )}
                                </div>
                            </div>
                        )}
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
                            onClick={() => {
                                handleConfirmPay();
                            }}
                        >
                            Xác nhận thanh toán
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailFee;
