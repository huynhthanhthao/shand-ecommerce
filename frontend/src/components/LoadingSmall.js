import loaderImg from "assets/images/loading_small.gif";

function LoadingSmall() {
    return (
        <div className=" loading-container ">
            <div className="loading  ">
                <img alt="loading " className="w-10" src={loaderImg}></img>
                <p className="text-sm">Đang kiểm tra...</p>
            </div>
        </div>
    );
}

export default LoadingSmall;
