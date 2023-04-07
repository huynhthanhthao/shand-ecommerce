import NameProduct from "./AddProductForm/NameProduct";
import CategorySelect from "./AddProductForm/CategorySelect";
import Description from "./AddProductForm/Description";
import ImageProduct from "./AddProductForm/ImageProduct";
import StatusProduct from "./AddProductForm/StatusProduct";
import OtherInforProduct from "./AddProductForm/OtherInforProduct";
import ShipInfor from "./AddProductForm/ShipInfor";
import ImageSource from "./AddProductForm/ImageSource";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateProduct as setNewProduct } from "store/reducers/productSlice";
import ProductId from "./AddProductForm/ProductId";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateProductApi } from "api/productApi";
// import { useState } from "react";
function EditProductForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { updateProduct: newProduct } = useSelector(({ productReducer }) => productReducer);
    const { account } = useSelector(({ accountReducer }) => accountReducer);
    const handleEditProduct = async () => {
        try {
            const status = await updateProductApi(newProduct, dispatch);
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
    }, [dispatch, account.username]);
    return (
        <div className="add-product animate__animated animate__fadeIn">
            <label className="font-bold">THÔNG TIN SẢN PHẨM</label>
            <div className="px-10 py-5 border-t my-3 bg-white">
                <table className="w-full border-separate border-spacing-2  text-sm">
                    <tbody>
                        <tr>
                            <NameProduct newProduct={newProduct} dispatch={dispatch} setNewProduct={setNewProduct} />
                        </tr>
                        <tr>
                            <ProductId newProduct={newProduct} dispatch={dispatch} setNewProduct={setNewProduct} />
                        </tr>
                        <tr>
                            <CategorySelect newProduct={newProduct} dispatch={dispatch} setNewProduct={setNewProduct} />
                        </tr>
                        <tr>
                            <Description newProduct={newProduct} dispatch={dispatch} setNewProduct={setNewProduct} />
                        </tr>
                        <tr>
                            <ImageProduct newProduct={newProduct} dispatch={dispatch} setNewProduct={setNewProduct} />
                        </tr>
                        <tr>
                            <ImageSource newProduct={newProduct} dispatch={dispatch} setNewProduct={setNewProduct} />
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
                                    className=" w-full input focus:shadow-input py-1 px-3"
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
                                    className=" w-full input focus:shadow-input py-1 px-3"
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
                            <StatusProduct newProduct={newProduct} dispatch={dispatch} setNewProduct={setNewProduct} />
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
                                        handleEditProduct();
                                    }}
                                >
                                    Lưu sản phẩm
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EditProductForm;
