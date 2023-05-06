import { getFee } from "api/feeApi";
import { useEffect, useState } from "react";
import Moment from "react-moment";

import { useDispatch, useSelector } from "react-redux";
function SalesFee() {
    const { account } = useSelector(({ accountReducer }) => accountReducer);
    const [fee, setFee] = useState(JSON.stringify("{}"));
    const [amountBill, setAmountBill] = useState({});
    const [deadLine, setDeadLine] = useState("");
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getFee({ sellerId: account.username });

                const billList = JSON.parse(data.billList);

                const newTotal = billList.reduce((total, currentValue) => {
                    return total + currentValue.order.total;
                }, 0);
                setAmountBill(billList.length);
                setDeadLine(data.deadLine);
                setFee(data);
                setTotal(newTotal);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="love-product animate__animated animate__fadeIn">
            <label className="font-bold">Phí bán hàng cần thanh toán</label>
            <div className="flex justify-center py-4  border-t my-3">
                {fee.billList ? (
                    <div className="border p-3  w-1/2  leading-8">
                        <div className="grid grid-cols-2">
                            <p className="font-bold">Họ tên:</p>
                            <p>{account.fullName}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="font-bold">MSSV:</p>
                            <p>{account.username}</p>
                        </div>

                        <div className="grid grid-cols-2">
                            <p className="font-bold">Tổng số hóa đơn:</p>
                            <p>{amountBill} hóa đơn</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="font-bold">Doanh thu:</p>
                            <p>{total.toLocaleString().split(",")} vnd</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="font-bold">Phí bán hàng:</p>
                            <p>{((total * 2) / 100).toLocaleString().split(",")} vnd</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="font-bold">Hạn cuối nộp phí:</p>
                            <p>
                                <Moment format="DD/MM/YYYY">{fee.deadLine}</Moment>
                            </p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="font-bold">Tình trạng:</p>
                            {amountBill > 0 ? (
                                <p className="text-yellow-500">Chưa thanh toán</p>
                            ) : (
                                <p className="text-green-600">Đã thanh toán</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <p>Tài khoản chưa phát sinh giao dịch mới.</p>
                )}
            </div>
        </div>
    );
}

export default SalesFee;
