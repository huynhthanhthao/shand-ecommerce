import { getProductByOwner } from "api/productApi";
import Cart from "components/Card";
import { useEffect, useState } from "react";
function InforSelller({ product }) {
    const [productSuggest, setProductSuggest] = useState([]);
    const [showPhone, setShowPhone] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProductByOwner({ ownId: product.detail.owner.username });
                setProductSuggest(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="bg-white p-4 rounded-md">
            <div className=" font-bold ">Thông tin nguời bán</div>
            <div className="avatar-shop my-3 flex items-center">
                <img alt="avatar" src={product.detail.owner.urlAvatar} className="w-16 h-16 rounded-full" />
                <div className="name-shop mx-3">
                    <div className="font-bold">
                        {product.detail.owner.fullName} {product.detail.owner.username}
                    </div>
                    <div className="text-slate-600 text-sm">{product.detail.owner.address}</div>
                </div>
            </div>
            <div className="option flex justify-between ">
                <button className="justify-center btn2">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        version="1.1"
                        className="d7ed-SwZDZ2 d7ed-w34diS mr-2"
                    >
                        <path
                            d="M16.553 2C20.258 2.015 23 5.14 23 9.12c0 .631-.073 1.258-.217 1.88H20.71a6.43 6.43 0 0 0 .289-1.88c0-2.931-1.912-5.11-4.45-5.12-1.163 0-1.804.118-2.568.492a4.18 4.18 0 0 0-1.25.936l-.73.79-.735-.784a4.262 4.262 0 0 0-1.232-.913C9.248 4.13 8.565 4 7.455 4 4.884 4 3 6.148 3 9.12c0 2.38 1.414 4.83 4.186 7.323 1.512 1.36 3.455 2.718 4.814 3.43v2.253l-.866-.449c-1.515-.784-3.63-2.258-5.285-3.747C2.694 15.092 1 12.158 1 9.12 1 5.097 3.716 2 7.455 2c1.395 0 2.376.189 3.467.728.38.188.736.41 1.068.668a6.146 6.146 0 0 1 1.113-.7c1.07-.524 2.003-.696 3.45-.696zM19 13v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2z"
                            fill="#6F787E"
                            fillRule="nonzero"
                        ></path>
                    </svg>
                    Theo dõi người bán
                </button>
                <button className="justify-center btn2 relative" onClick={() => setShowPhone(true)}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        version="1.1"
                        className="d7ed-SwZDZ2 d7ed-w34diS  mr-2"
                    >
                        <path
                            d="M8.22 2.729c.555.548 1.44 1.685 2.755 3.525.585.65.4 1.386-.118 2.084a5.453 5.453 0 0 1-.436.508 14.89 14.89 0 0 1-.28.285l-.767.768c-.1.1.586 1.47 1.917 2.803 1.33 1.331 2.7 2.018 2.801 1.917l.767-.767c.422-.422.645-.626.952-.827.638-.42 1.335-.533 1.922-.008 1.917 1.372 3.002 2.213 3.534 2.765 1.037 1.078.9 2.736.006 3.682-.31.328-.704.722-1.169 1.17-2.811 2.813-8.745 1.101-13.293-3.45C2.263 12.63.551 6.695 3.358 3.888c.503-.512.67-.678 1.16-1.161.913-.9 2.648-1.041 3.703 0Zm-2.3 1.424c-.483.476-.642.635-1.144 1.145-1.804 1.805-.423 6.595 3.45 10.471 3.87 3.875 8.66 5.257 10.478 3.438.457-.441.83-.815 1.117-1.118.208-.22.245-.671.006-.92-.397-.412-1.37-1.17-3.05-2.377a6.856 6.856 0 0 0-.505.474l-.766.767c-1.303 1.303-3.521.192-5.629-1.917-2.109-2.111-3.219-4.329-1.916-5.632l.766-.766c.123-.123.18-.18.246-.25.092-.097.167-.182.228-.257-1.166-1.623-1.958-2.637-2.385-3.06-.22-.217-.714-.177-.896.002Zm7.735-2.083a9.505 9.505 0 0 1 8.275 8.275l-1.975.33a7.503 7.503 0 0 0-6.63-6.63l.33-1.975Zm-.659 3.952a5.501 5.501 0 0 1 4.982 4.982l-1.982.33a3.5 3.5 0 0 0-3.33-3.33l.33-1.982Z"
                            fill="#6F787E"
                            fillRule="nonzero"
                        ></path>
                    </svg>
                    Gọi điện
                    {showPhone && (
                        <div className="absolute flex bg-white border p-2 rounded shadow top-12">
                            <svg
                                className="w-10 fill-blue-700"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                            </svg>
                            Số điện thoại của người bán: {product.detail.owner.phoneNumber}
                            <svg
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowPhone(false);
                                }}
                                className="w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </svg>
                        </div>
                    )}
                </button>
            </div>
            <div className="border border-gray-200 my-3"></div>
            <div className="product-seller">
                <div className="font-bold pb-3">Gợi ý thêm từ người bán</div>
                <div className="suggest bg-[linear-gradient(180deg,#fff,#fbcbcb)] rounded-md">
                    <ul className="flex">
                        {productSuggest?.map((product, index) => (
                            <li key={index} className="mx-1 my-2">
                                <Cart product={product} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default InforSelller;
