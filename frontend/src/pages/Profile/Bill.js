import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { getBillListApi } from "api/billApi";

function Bill() {
    const dispatch = useDispatch();
    const { type } = useParams();
    const { account } = useSelector(({ accountReducer }) => accountReducer);

    const [billList, setBillList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const billList = await getBillListApi({ studentId: account.username }, dispatch);
            setBillList(billList);
            console.log(billList);
        };
        fetchData();
    }, [dispatch, account.username]);
    return (
        <div className="bill">
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

                {billList && (
                    <div>
                        {billList.length === 0 ? (
                            <div className="text-center ">Bạn chưa có hóa đơn tất cả gần đây.</div>
                        ) : (
                            ""
                        )}
                        <ul>
                            {billList.map((bill) => (
                                <li key={bill.order.id} className="border rounded-sm text-sm mb-2">
                                    <div className="flex justify-between p-3 bg-slate-100 ">
                                        <div>
                                            <div className="flex ">
                                                Mã đơn hàng:
                                                <Link
                                                    to={"/profile/detail-order/" + bill.order.id}
                                                    className="cursor-pointer text-blue-500"
                                                >
                                                    &nbsp;#{bill.order.id} | Chi tiết
                                                </Link>
                                            </div>
                                            <p>
                                                Đặt ngày: <Moment format="DD/MM/YYYY">{bill.order.createdAt}</Moment>
                                            </p>
                                        </div>
                                        <div>
                                            <p>Người nhận:</p>
                                            <p>{bill.order.buyer.fullName}</p>
                                        </div>
                                        <div className="text-center">
                                            <p>Tổng tiền:</p>
                                            <p>{bill.order.total}đ</p>
                                        </div>
                                        <div className="text-right">
                                            {bill.order.paid && (
                                                <div className="w-36 border  text-center bg-green-500 p-3 text-white font-bold">
                                                    Đã thanh toán
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex  p-3">
                                        <div className="">
                                            {bill?.order?.productsInformation ?? (
                                                <ul>
                                                    {JSON.parse(bill.order.productsInformation).map((product) => (
                                                        <li key={product.id} className="flex items-start mb-2">
                                                            <img
                                                                src={JSON.parse(product.images)[0]}
                                                                alt="product"
                                                                className="w-16 border mr-2"
                                                            />
                                                            <div>
                                                                <a href="/" className="font-bold">
                                                                    {product.name}
                                                                </a>
                                                                <div className="flex my-2 mt-1">
                                                                    <p>Người bán:&nbsp;</p>
                                                                    <p className="text-blue-500">
                                                                        {bill.order.seller.fullName}{" "}
                                                                        {bill.order.seller.username}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-3 flex items-end justify-between">
                                        <div className="flex ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                className="w-3 mr-1 fill-green-600"
                                            >
                                                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                                            </svg>
                                            <p className="font-bold">{bill.order.buyer.phoneNumber}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Bill;
