// import { loveProductApi } from "api/productApi";
import { loveProductApi } from "api/productApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showLogin } from "store/reducers/authSlice";
import { setProductLove } from "store/reducers/productSlice";

function Card({ product }) {
    const dispatch = useDispatch();
    const { account } = useSelector(({ accountReducer }) => accountReducer);
    const { productLove } = useSelector(({ productReducer }) => productReducer);
    let productList = JSON.parse(productLove?.productsId ?? "[]");

    const [image, setImage] = useState("");

    const handleLove = async () => {
        try {
            if (account) {
                if (productList) {
                    const loved = productList.includes(product.id);
                    if (loved) {
                        productList = productList.filter((item) => product.id !== item);

                        await loveProductApi({ productsId: productList, studentId: account.username }, dispatch);
                    } else {
                        productList.push(product.id);
                        await loveProductApi({ productsId: productList, studentId: account.username }, dispatch);
                    }
                }
            } else {
                dispatch(showLogin());
            }
            // await loveProductApi({})
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (JSON.parse(product.images)?.length > 0) {
            setImage(JSON.parse(product.images)[0]);
        } else {
            setImage(require("assets/images/product.png"));
        }
    }, []);

    return (
        <div className="card  shadow-md hover:shadow-xl border rounded-lg flex flex-col w-52 bg-white   hover:cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1">
            {product && (
                <>
                    <div className="relative">
                        <img className="h-56 rounded-t-lg w-full" src={image} alt="san pham" />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleLove();
                            }}
                            className="heart absolute bottom-0 right-0 bg-[#e7e8ea] p-2 rounded-md m-1 hover:opacity-75"
                        >
                            {productList.includes(product.id) ? (
                                <svg
                                    className="w-5 fill-red-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                </svg>
                            ) : (
                                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <Link to={"/product/" + product.id}>
                        <div className="infor p-2 ">
                            <div className="h-6 truncate">{product.name}</div>
                            <div className="text-orange-600 py-1 text-lg">
                                {product.price.toLocaleString().split(",")}
                                <span className="text-xs mr-[1px]">₫</span>
                            </div>
                            <div className="text-sm">
                                {product.transport === "seller" ? "Miễn phí vận chuyển" : "Không miễn phí vận chuyển"}
                            </div>
                        </div>
                    </Link>
                </>
            )}
        </div>
    );
}

export default Card;
