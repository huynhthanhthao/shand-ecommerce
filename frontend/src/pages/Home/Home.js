import Topic from "./Topic";
import Ads from "./Ads";
import Suggest from "./Suggest";

function Home() {
    return (
        <div className="home">
            <div className="nav bg-white">
                <Topic />
                <Ads />
            </div>
            <div className="container  bg-[#f5f5f5] px-24 py-5 ">
                <Suggest />
            </div>
        </div>
    );
}

export default Home;
