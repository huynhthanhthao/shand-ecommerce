import Topic from "./Topic";
import Event from "./Event";
import ProductList from "./ProductList";
import { DefaultLayout } from "components/Layout";
import { useEffect, useState } from "react";
import { getAllProductApi, getFreeProductApi } from "api/productApi";

function Home() {
    let [allProduct, setAllProduct] = useState([]);
    let [freeProduct, setFreeProduct] = useState([]);
    let [limit, setLimit] = useState(12);
    let [limitFree, setLimitFree] = useState(12);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allProduct = await getAllProductApi({ limit });
                const freeProduct = await getFreeProductApi({ limitFree });
                setAllProduct(allProduct);
                setFreeProduct(freeProduct);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [limit]);
    return (
        <DefaultLayout>
            <div className="home">
                <div className="nav bg-white">
                    <Topic />
                    <Event />
                </div>
                <div className="container  bg-[#f5f5f5] px-24 py-5 ">
                    <ProductList productList={allProduct} label="Sản phẩm mới nhất" setLimit={setLimit} />
                    <ProductList productList={freeProduct} label="Sản phẩm miễn phí" setLimit={setLimitFree} />
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Home;
