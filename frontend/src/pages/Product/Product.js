import ImageProduct from "./InforProduct/ImageProduct";
import InforProduct from "./InforProduct/InforProduct";
import InforSelller from "./InforSeller/InforSeller";
import DescriptionProduct from "./DescriptionProduct";
import Suggest from "pages/Home/Suggest";
function Product() {
    return (
        <div className="py-10">
            <div className="product mx-24 ">
                <div className="grid grid-cols-3 gap-4 bg-white rounded-lg  p-6">
                    <ImageProduct />
                    <InforProduct />
                </div>
                <div className="grid grid-cols-5 gap-4 my-5 ">
                    <div className="col-span-2">
                        <InforSelller />
                    </div>
                    <div className="col-span-3">
                        <DescriptionProduct />
                    </div>
                </div>
                <div className="font-bold my-3">
                    Ở đây có sản phẩm bạn thích
                </div>
                <Suggest />
            </div>
        </div>
    );
}

export default Product;
