import NameProduct from "./NameProduct";
import CategorySelect from "./CategorySelect";
import Description from "./Description";
import ImageProduct from "./ImageProduct";
import StatusProduct from "./StatusProduct";
import OtherInforProduct from "./OtherInforProduct";
import ShipInfor from "./ShipInfor";
import ImageSource from "./ImageSource";
import { useDispatch, useSelector } from "react-redux";
import { setNewProduct } from "store/reducers/productSlice";
import { createProductApi } from "api/productApi";
import ProductId from "./ProductId";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTransaction } from "api/transactionApi";
function AddProductForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { newProduct } = useSelector(({ productReducer }) => productReducer);
    const { account } = useSelector(({ accountReducer }) => accountReducer);
    const { transaction } = useSelector(({ transactionReducer }) => transactionReducer);
    const handleCreateProduct = async () => {
        try {
            const status = await createProductApi(newProduct, dispatch);
            if (status) {
                return navigate("/profile/products");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        dispatch(
            setNewProduct({
                ...newProduct,
                ownId: account.username,
            })
        );

        const fetchData = async () => {
            await getTransaction({ username: account.username }, dispatch);
        };

        fetchData();
    }, [dispatch]);
    console.log(transaction.username);
    return (
        <div className="add-product animate__animated animate__fadeIn">
            <label className="font-bold">THÔNG TIN SẢN PHẨM</label>
            <div className="px-10 py-4 border-t my-3 bg-white">
                {transaction.username !== undefined ? (
                    <table className="w-full border-separate border-spacing-2  text-sm">
                        <tbody>
                            <tr>
                                <NameProduct
                                    newProduct={newProduct}
                                    dispatch={dispatch}
                                    setNewProduct={setNewProduct}
                                />
                            </tr>
                            <tr>
                                <ProductId newProduct={newProduct} dispatch={dispatch} setNewProduct={setNewProduct} />
                            </tr>
                            <tr>
                                <CategorySelect
                                    newProduct={newProduct}
                                    dispatch={dispatch}
                                    setNewProduct={setNewProduct}
                                />
                            </tr>
                            <tr>
                                <Description
                                    newProduct={newProduct}
                                    dispatch={dispatch}
                                    setNewProduct={setNewProduct}
                                />
                            </tr>
                            <tr>
                                <ImageProduct
                                    newProduct={newProduct}
                                    dispatch={dispatch}
                                    setNewProduct={setNewProduct}
                                />
                            </tr>
                            <tr>
                                <ImageSource
                                    newProduct={newProduct}
                                    dispatch={dispatch}
                                    setNewProduct={setNewProduct}
                                />
                            </tr>

                            <tr>
                                <td className="w-[15%] text-right">
                                    <strong>Giá sản phẩm (VND)</strong>
                                    <span className="text-red-600">*</span>
                                </td>
                                <td className="px-5">
                                    <input
                                        type="number"
                                        value={newProduct.price}
                                        onChange={(e) => {
                                            dispatch(
                                                setNewProduct({
                                                    ...newProduct,
                                                    price: parseInt(e.target.value),
                                                })
                                            );
                                        }}
                                        className=" w-full input focus:shadow-input py-1 px-2"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="w-[15%] text-right">
                                    <strong>Số lượng có sẳn</strong>
                                    <span className="text-red-600">*</span>
                                </td>
                                <td className="px-5">
                                    <input
                                        type="number"
                                        className=" w-full input focus:shadow-input py-1 px-2"
                                        value={newProduct.quantityAvailable}
                                        onChange={(e) => {
                                            dispatch(
                                                setNewProduct({
                                                    ...newProduct,
                                                    quantityAvailable: parseInt(e.target.value),
                                                })
                                            );
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <StatusProduct
                                    newProduct={newProduct}
                                    dispatch={dispatch}
                                    setNewProduct={setNewProduct}
                                />
                            </tr>
                            <tr>
                                <OtherInforProduct
                                    newProduct={newProduct}
                                    dispatch={dispatch}
                                    setNewProduct={setNewProduct}
                                />
                            </tr>
                            <tr>
                                <ShipInfor newProduct={newProduct} dispatch={dispatch} setNewProduct={setNewProduct} />
                            </tr>
                            <tr className="">
                                <td className="w-[15%] text-right "></td>
                                <td className="grid grid-cols-4  px-5">
                                    <button
                                        className="btn3 px-2 py-2"
                                        onClick={() => {
                                            handleCreateProduct();
                                        }}
                                    >
                                        Lưu sản phẩm
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <div>
                        Vui lòng thêm{" "}
                        <Link className="text-orange-600" to="/profile/transaction">
                            thông tin giao dịch
                        </Link>{" "}
                        trước khi thực hiện đăng bán sản phẩm.
                    </div>
                )}
            </div>
        </div>
    );
}

export default AddProductForm;
