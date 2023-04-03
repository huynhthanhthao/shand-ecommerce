import Topic from "./Topic";
import Event from "./Event";
import ProductList from "./ProductList";
import { DefaultLayout } from "components/Layout";
import { useEffect, useState } from "react";
import { getAllProductApi, getFreeProductApi, getProductByCategory } from "api/productApi";

function Home() {
    let [allProduct, setAllProduct] = useState([]);
    let [freeProduct, setFreeProduct] = useState([]);
    let [productCategory, setProductCategory] = useState([]);
    let [limit, setLimit] = useState(12);
    let [limitFree, setLimitFree] = useState(12);
    let [category, setCategory] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allProduct = await getAllProductApi({ limit });
                const freeProduct = await getFreeProductApi({ limitFree });
                const productCategory = await getProductByCategory({ categoryId: category?.id ?? 1 });
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
            <div className="home">
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
