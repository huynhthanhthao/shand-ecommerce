import Topic from "./Topic";
import Event from "./Event";
import ProductList from "./ProductList";
import { DefaultLayout } from "components/Layout";
import { useEffect, useState } from "react";
import { getAllProductApi, getFreeProductApi, getProductByCategory, getProductLoveApi } from "api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { setProductLove } from "store/reducers/productSlice";
import { closeLoading, openLoading } from "store/reducers/loadingSlice";

function Home() {
    const dispatch = useDispatch();
    const { account } = useSelector(({ accountReducer }) => accountReducer);

    let [allProduct, setAllProduct] = useState([]);
    let [freeProduct, setFreeProduct] = useState([]);
    let [productCategory, setProductCategory] = useState([]);
    let [limit, setLimit] = useState(12);
    let [limitFree, setLimitFree] = useState(12);
    let [category, setCategory] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(openLoading(""));
                const [allProduct, freeProduct, productCategory] = await Promise.all([
                    getAllProductApi({ limit }),
                    getFreeProductApi({ limitFree }),
                    getProductByCategory({ categoryId: category?.id ?? 1 }),
                ]);

                if (account) await getProductLoveApi({ studentId: account.username }, dispatch);
                dispatch(closeLoading());

                setAllProduct(allProduct);
                setFreeProduct(freeProduct);
                setProductCategory(productCategory);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [limit, category?.id]);

    return (
        <DefaultLayout>
            <div className="home animate__animated animate__fadeIn">
                <div className="nav bg-white">
                    <Topic setCategory={setCategory} />
                    <Event />
                </div>
                <div className="container  bg-[#f5f5f5] px-24 py-5 ">
                    {category && <ProductList productList={productCategory} label={category.nameCategory} />}
                    <ProductList productList={allProduct} label="Sản phẩm mới nhất" setLimit={setLimit} />
                    <ProductList productList={freeProduct} label="Sản phẩm miễn phí" setLimit={setLimitFree} />
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Home;
