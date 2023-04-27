import { NavLink } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { getBillListApi } from "api/billApi";
import { useReactToPrint } from "react-to-print";

function Bill() {
    const dispatch = useDispatch();
    const { type } = useParams();
    const { account } = useSelector(({ accountReducer }) => accountReducer);
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "epm-data",
    });

    const [billList, setBillList] = useState([]);
    const [billFilter, setBillFilter] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const billList = await getBillListApi({ studentId: account.username }, dispatch);
            setBillList(billList);
            setBillFilter(billList);
        };
        fetchData();
    }, [dispatch, account.username]);

    useEffect(() => {
        if (type === "buy") {
            const filter = billList.filter((bill) => bill.buyerId === account.username);
            setBillFilter(filter);
        } else {
            const filter = billList.filter((bill) => bill.sellerId === account.username);
            setBillFilter(filter);
        }
    }, [type]);
    return (
        <div className="bill animate__animated animate__fadeIn">
            <label className="font-bold">Hóa đơn của bạn</label>
            <div className=" bg-white">
                <ul className="border-b py-3 flex mb-3">
                    <NavLink
                        className="mr-8 hover:text-orange-500 cursor-pointer"
                        exact="true"
                        to="/profile/bill/buy"
                        activeclassname="active"
                    >
                        Hóa đơn mua hàng
                    </NavLink>
                    <NavLink
                        exact="true"
                        className="mr-8 hover:text-orange-500 cursor-pointer"
                        to="/profile/bill/sell"
                        activeclassname="active"
                    >
                        Hóa đơn bán hàng
                    </NavLink>
                </ul>

                {billFilter ? (
                    <div>
                        {/* Bill print */}

                        {billFilter.length === 0 ? (
                            <div className="text-center ">Bạn chưa có hóa đơn tất cả gần đây.</div>
                        ) : (
                            ""
                        )}
                        <ul>
                            {billFilter.map((bill) => (
                                <li key={bill.order.id} className="border rounded-sm text-sm mb-2">
                                    <div className="bg-white rounded-lg shadow-lg px-6 py-4">
                                        <div ref={componentRef}>
                                            <div className="">
                                                <div className="flex justify-between items-center mb-6">
                                                    <div>
                                                        <h1 className="text-2xl font-bold">Hóa đơn thanh toán SHAND</h1>
                                                        <p className="text-gray-700">Mã hóa đơn #{bill.id}</p>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <p className="text-right">
                                                            Ngày đặt hàng:{" "}
                                                            <Moment format="DD/MM/YYYY">{bill.order.createdAt}</Moment>
                                                        </p>
                                                        <p className="text-right">
                                                            Ngày tạo hóa đơn:{" "}
                                                            <Moment format="DD/MM/YYYY">{bill.createdAt}</Moment>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center mb-6">
                                                    <div>
                                                        <h2 className="text-lg font-medium">Người mua:</h2>
                                                        <p className="text-gray-700">{bill.order.buyer.fullName}</p>
                                                        <p className="text-gray-700">{bill.order.buyer.phoneNumber}</p>
                                                        <p className="text-gray-700">
                                                            So 65, Tan Long, Phung Hiep, Hau Giang
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <h2 className="text-lg font-medium">Người bán:</h2>
                                                        <p className="text-gray-700">{bill.order.seller.fullName}</p>
                                                        <p className="text-gray-700">{bill.order.seller.phoneNumber}</p>
                                                    </div>
                                                </div>
                                                <table className="w-full mb-6">
                                                    <thead>
                                                        <tr className="border-b-2 border-gray-300">
                                                            <th className="text-left py-2">Mô tả</th>
                                                            <th className="text-right py-2">Số lượng</th>
                                                            <th className="text-right py-2">Giá</th>
                                                            <th className="text-right py-2">Tổng</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {JSON.parse(bill?.order?.productsInformation ?? "[]").map(
                                                            (item) => (
                                                                <tr className="border-b-2 border-gray-300">
                                                                    <td className="py-2">
                                                                        {" "}
                                                                        {item.product.detail.name}
                                                                    </td>
                                                                    <td className="text-right py-2">{item.amount}</td>
                                                                    <td className="text-right py-2">
                                                                        {item.product.detail.price
                                                                            .toLocaleString()
                                                                            .split(",")}{" "}
                                                                        đ
                                                                    </td>
                                                                    <td className="text-right py-2">
                                                                        {(item.product.detail.price * item.amount)
                                                                            .toLocaleString()
                                                                            .split(",")}{" "}
                                                                        đ
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                        <tr className="border-b-2 border-gray-300">
                                                            <td className="py-2"> </td>
                                                            <td className="text-right py-2"></td>
                                                            <td className="text-right py-2">Thành tiền</td>
                                                            <td className="text-right py-2">
                                                                {bill.order.total.toLocaleString().split(",")} đ
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b-2 border-gray-300">
                                                            <td className="py-2"> </td>
                                                            <td className="text-right py-2"></td>
                                                            <td className="text-right py-2">Đã thanh toán</td>
                                                            <td className="text-right py-2">
                                                                {bill.order.total.toLocaleString().split(",")} đ
                                                            </td>
                                                        </tr>
                                                        <tr className="border-b-2 border-gray-300">
                                                            <td className="py-2"> </td>
                                                            <td className="text-right py-2"></td>
                                                            <td className="text-right py-2">Còn lại</td>
                                                            <td className="text-right py-2">0 đ</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <button onClick={handlePrint} className="btn3 flex px-3 py-2 ml-3">
                                            <svg
                                                className="w-5 fill-white mr-1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                                            </svg>{" "}
                                            Xuất hóa đơn
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default Bill;
