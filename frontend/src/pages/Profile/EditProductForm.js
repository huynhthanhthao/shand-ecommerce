import NameProduct from "./AddProductForm/NameProduct";
import CategorySelect from "./AddProductForm/CategorySelect";
import Description from "./AddProductForm/Description";
import ImageProduct from "./AddProductForm/ImageProduct";
import StatusProduct from "./AddProductForm/StatusProduct";
import OtherInforProduct from "./AddProductForm/OtherInforProduct";
import ShipInfor from "./AddProductForm/ShipInfor";
function EditProductForm() {
    return (
        <div className="edit-product">
            <label className="font-bold">THÔNG TIN SẢN PHẨM</label>
            <div className="px-10 py-5 border-t my-3 bg-white">
                <table className="w-full border-separate border-spacing-2  text-sm">
                    <tbody>
                        <tr>
                            <NameProduct />
                        </tr>
                        <tr>
                            <CategorySelect />
                        </tr>
                        <tr>
                            <Description />
                        </tr>
                        <tr>
                            <ImageProduct />
                        </tr>
                        <tr>
                            <td className="w-[15%] text-right"></td>
                            <td className="px-5 ">
                                <div>
                                    <ul className="flex">
                                        <li className="relative">
                                            <img
                                                src={require("assets/images/sp.jpg")}
                                                className="w-16 mx-1"
                                                alt="product"
                                            />
                                            <button>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 320 512"
                                                    className="absolute w-3 top-0 right-2 hover:opacity-70"
                                                >
                                                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                                                </svg>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[15%] text-right ">
                                <strong>Giá sản phẩm (VND)</strong>
                                <span className="text-red-600">*</span>
                            </td>
                            <td className="px-5">
                                <input className=" w-full input focus:shadow-input py-1 px-3" />
                            </td>
                        </tr>
                        <tr>
                            <td className="w-[15%] text-right">
                                <strong>Số lượng có sẳn</strong>
                                <span className="text-red-600">*</span>
                            </td>
                            <td className="px-5">
                                <input className=" w-full input focus:shadow-input py-1 px-3" />
                            </td>
                        </tr>
                        <tr>
                            <StatusProduct />
                        </tr>
                        <tr>
                            <OtherInforProduct />
                        </tr>
                        <tr>
                            <ShipInfor />
                        </tr>
                        <tr className="">
                            <td className="w-[15%] text-right "></td>
                            <td className="grid grid-cols-4  px-5">
                                <button className="btn3 px-2 py-2">
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
