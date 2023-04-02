import ImageProduct from "./InforProduct/ImageProduct";
import InforProduct from "./InforProduct/InforProduct";
import InforSelller from "./InforSeller/InforSeller";
import DescriptionProduct from "./DescriptionProduct";
import ProductList from "pages/Home/ProductList";
import { getDetailProduct } from "api/productApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DefaultLayout } from "components/Layout";
import ReportModal from "components/Modals/ReportModal";
function Product() {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await getDetailProduct({ id }, dispatch);
        };
        fetchData();
    }, [dispatch, id]);

    const { detailProduct: product } = useSelector(({ productReducer }) => productReducer);

    return (
        <DefaultLayout>
            <div className="py-10">
                <ReportModal />

                {product && (
                    <div className="product mx-24 ">
                        <div className="grid grid-cols-3 gap-4 bg-white rounded-lg  p-6">
                            <ImageProduct images={JSON.parse(product.detail.images)} />
                            <InforProduct product={product} />
                        </div>
                        <div className="grid grid-cols-5 gap-4 my-5 ">
                            <div className="col-span-2">
                                <InforSelller product={product} />
                            </div>
                            <div className="col-span-3">
                                <DescriptionProduct product={product} />
                            </div>
                        </div>
                        <div className="font-bold my-3">Ở đây có sản phẩm bạn thích</div>
                        <ProductList />
                    </div>
                )}
            </div>
        </DefaultLayout>
    );
}

export default Product;
