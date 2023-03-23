// import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getMyProductList } from "api/productApi";
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "store/reducers/productSlice";

function AllProduct() {
    const dispatch = useDispatch();
    const { account } = useSelector(({ accountReducer }) => accountReducer);

    useEffect(() => {
        const fetchData = async () => {
            await getMyProductList({ ownId: account.username }, dispatch);
        };
        fetchData();
    }, [account, dispatch]);
    const { productList } = useSelector(({ productReducer }) => productReducer);
    return (
        <div className="all-product">
            {productList && (
                <>
                    <label className="font-bold">Sản phẩm của bạn</label>
                    <div className=" py-5 border-t my-3">
                        <table className=" text-left border border-slate-200 w-full">
                            <thead>
                                <tr className="bg-slate-300">
                                    <th className="border border-slate-200 p-2 ">
                                        MSP
                                    </th>
                                    <th className="border border-slate-200 p-2 ">
                                        Tên sản phẩm
                                    </th>
                                    <th className="border border-slate-200 p-2 ">
                                        Giá
                                    </th>
                                    <th className="border border-slate-200 p-2 ">
                                        Vận chuyển
                                    </th>

                                    <th className="border border-slate-200 p-2 ">
                                        Tùy chọn
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {productList.map((product) => (
                                    <tr key={product.id}>
                                        <td className="border border-slate-200 p-2 ">
                                            {product.productId}
                                        </td>
                                        <td className="border border-slate-200 p-2 ">
                                            {product.name}
                                        </td>
                                        <td className="border border-slate-200 p-2 ">
                                            {product.price}
                                        </td>

                                        <td className="border border-slate-200 p-2 ">
                                            {product.transport === "buyer"
                                                ? "Người mua trả"
                                                : "Người bán trả"}
                                        </td>
                                        <td className="border border-slate-200 p-2 ">
                                            <button className="hover:opacity-80 mx-1">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    className="w-5"
                                                    // data-te-toggle="modal"
                                                    // data-te-target="#edit_shop"
                                                >
                                                    <path
                                                        className="fill-slate-800"
                                                        d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                                                    />
                                                </svg>
                                            </button>
                                            <button
                                                className="hover:opacity-80 mx-1"
                                                data-te-toggle="modal"
                                                data-te-target="#delete_product"
                                                onClick={() =>
                                                    dispatch(
                                                        setProduct(product)
                                                    )
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512"
                                                    className="w-5"
                                                >
                                                    <path
                                                        className="fill-slate-800"
                                                        d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
}

export default AllProduct;
