import Topic from "./Topic";
import Event from "./Event";
import ProductList from "./ProductList";
import { DefaultLayout } from "components/Layout";

function Home() {
    return (
        <DefaultLayout>
            <div className="home">
                <div className="nav bg-white">
                    <Topic />
                    <Event />
                </div>
                <div className="container  bg-[#f5f5f5] px-24 py-5 ">
                    <ProductList label="Sản phẩm mới nhất" />
                    <ProductList label="Sản phẩm miễn phí" />
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Home;
