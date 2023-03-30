import loaderImg from "assets/images/loading.gif";
import { useSelector } from "react-redux";

function Loading() {
    const { content } = useSelector(({ loadingReducer }) => loadingReducer);

    return (
        <div className=" loading-container bg-[#3c3c3c4a]  w-screen h-screen fixed flex items-center justify-center z-50">
            <div className="loading  relative">
                <img alt="loading " className="w-44" src={loaderImg}></img>
                <p className="absolute bottom-1 left-1/2 -translate-x-1/2 w-40 text-center">
                    {content}
                </p>
            </div>
        </div>
    );
}

export default Loading;
