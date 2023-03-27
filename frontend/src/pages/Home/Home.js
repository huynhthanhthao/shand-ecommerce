import Topic from "./Topic";
import Event from "./Event";
import ProductList from "./ProductList";

function Home() {
    return (
        <div className="home">
            <div className="nav bg-white">
                <Topic />
                <Event />
            </div>
            <div className="container  bg-[#f5f5f5] px-24 py-5 ">
                <ProductList />
                <ProductList />
            </div>
        </div>
    );
}

export default Home;
