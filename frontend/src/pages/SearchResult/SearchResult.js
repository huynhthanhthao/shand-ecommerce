import { searchProductApi } from "api/productApi";
import Card from "components/Card";
import { DefaultLayout } from "components/Layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function SearchResult() {
    const dispatch = useDispatch();
    const { key } = useParams();
    useEffect(() => {
        searchProductApi(key, dispatch);
    }, [dispatch, key]);
    const { searchProductList: productList } = useSelector(({ productReducer }) => productReducer);

    const [productFilter, setProductFilter] = useState(productList);

    useEffect(() => {
        setProductFilter(productList);
    }, [productList, key]);

    const handleSortPrice = (option) => {
        if (option === "big_to_small") {
            setProductFilter((prev) => {
                return [...productList].sort((a, b) => {
                    return b.item.price - a.item.price;
                });
            });
        } else if (option === "small_to_big") {
            setProductFilter((prev) => {
                return [...productList].sort((a, b) => {
                    return a.item.price - b.item.price;
                });
            });
        } else {
            setProductFilter((prev) => {
                return productList.filter((product) => {
                    return product.item.price === 0;
                });
            });
        }
    };

    const handleFilterStatus = (option) => {
        if (option === "1") {
            setProductFilter((prev) => {
                return productList.filter((product) => {
                    return product.item.status === "1";
                });
            });
        } else if (option === "2") {
            setProductFilter((prev) => {
                return productList.filter((product) => {
                    return product.item.status === "2";
                });
            });
        } else if (option === "3") {
            setProductFilter((prev) => {
                return productList.filter((product) => {
                    return product.item.status === "3";
                });
            });
        } else if (option === "4") {
            setProductFilter((prev) => {
                return productList.filter((product) => {
                    return product.item.status === "4";
                });
            });
        }
    };

    const handleFilterTransport = (option) => {
        if (option === "free") {
            setProductFilter((prev) => {
                return productList.filter((product) => {
                    return product.item.transport === "seller";
                });
            });
        }
    };

    return (
        <DefaultLayout>
            <div className="px-24 pt-8 grid grid-cols-6 gap-3 text-[#555] fill-[#555] animate__animated animate__fadeIn min-h-screen">
                <div className="">
                    <div className="font-bold flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 mr-1">
                            <path d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z" />
                        </svg>
                        BỘ LỌC TÌM KIẾM
                    </div>
                    <div className="">
                        <div className="py-3 border-b border-y-slate-300">
                            <label className="">Theo Giá</label>
                            <div className="py-1">
                                <div>
                                    <div className="my-1">
                                        <input
                                            type="radio"
                                            name="option"
                                            className="mr-1"
                                            value="small_to_big"
                                            onChange={(e) => {
                                                handleSortPrice(e.target.value);
                                            }}
                                        />
                                        Thấp nhất
                                    </div>
                                </div>
                                <div>
                                    <div className="my-1">
                                        <input
                                            type="radio"
                                            name="option"
                                            className="mr-1"
                                            value="big_to_small"
                                            onChange={(e) => {
                                                handleSortPrice(e.target.value);
                                            }}
                                        />
                                        Cao nhất
                                    </div>
                                </div>
                                <div>
                                    <div className="my-1">
                                        <input
                                            type="radio"
                                            name="option"
                                            className="mr-1"
                                            value="free"
                                            onChange={(e) => {
                                                handleSortPrice(e.target.value);
                                            }}
                                        />
                                        Các sản phẩm miễn phí
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 border-b border-y-slate-300">
                            <label>Theo tình trạng</label>
                            <div className="py-1">
                                <div>
                                    <div className="my-1">
                                        <input
                                            type="radio"
                                            name="option"
                                            className="mr-1"
                                            value="1"
                                            onChange={(e) => {
                                                handleFilterStatus(e.target.value);
                                            }}
                                        />
                                        Mới
                                    </div>
                                </div>
                                <div>
                                    <div className="my-1">
                                        <input
                                            type="radio"
                                            name="option"
                                            className="mr-1"
                                            value="2"
                                            onChange={(e) => {
                                                handleFilterStatus(e.target.value);
                                            }}
                                        />
                                        Như mới
                                    </div>
                                </div>
                                <div>
                                    <div className="my-1">
                                        <input
                                            type="radio"
                                            name="option"
                                            className="mr-1"
                                            value="3"
                                            onChange={(e) => {
                                                handleFilterStatus(e.target.value);
                                            }}
                                        />
                                        Tốt
                                    </div>
                                </div>
                                <div>
                                    <div className="my-1">
                                        <input
                                            type="radio"
                                            name="option"
                                            className="mr-1"
                                            value="4"
                                            onChange={(e) => {
                                                handleFilterStatus(e.target.value);
                                            }}
                                        />
                                        Trung bình
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 border-b border-y-slate-300">
                            <label>Vận chuyển</label>{" "}
                            <div>
                                <div className="my-1">
                                    <input
                                        name="option"
                                        type="radio"
                                        className="mr-1"
                                        value="free"
                                        onChange={(e) => {
                                            handleFilterTransport(e.target.value);
                                        }}
                                    />
                                    Miễn phí vận chuyển
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-5">
                    <div className="flex ">
                        <svg viewBox="0 0 18 24" className="w-5 mr-1 shopee-svg-icon icon-hint-bdivb">
                            <g transform="translate(-355 -149)">
                                <g transform="translate(355 149)">
                                    <g fillrdive="nonzero" transform="translate(5.4 19.155556)">
                                        <path d="m1.08489412 1.77777778h5.1879153c.51164401 0 .92641344-.39796911.92641344-.88888889s-.41476943-.88888889-.92641344-.88888889h-5.1879153c-.51164402 0-.92641345.39796911-.92641345.88888889s.41476943.88888889.92641345.88888889z"></path>
                                        <g transform="translate(1.9 2.666667)">
                                            <path d="m .75 1.77777778h2.1c.41421356 0 .75-.39796911.75-.88888889s-.33578644-.88888889-.75-.88888889h-2.1c-.41421356 0-.75.39796911-.75.88888889s.33578644.88888889.75.88888889z"></path>
                                        </g>
                                    </g>
                                    <path
                                        d="m8.1 8.77777718v4.66666782c0 .4295545.40294373.7777772.9.7777772s.9-.3482227.9-.7777772v-4.66666782c0-.42955447-.40294373-.77777718-.9-.77777718s-.9.34822271-.9.77777718z"
                                        fillrdive="nonzero"
                                    ></path>
                                    <path
                                        d="m8.1 5.33333333v.88889432c0 .49091978.40294373.88888889.9.88888889s.9-.39796911.9-.88888889v-.88889432c0-.49091977-.40294373-.88888889-.9-.88888889s-.9.39796912-.9.88888889z"
                                        fillrdive="nonzero"
                                    ></path>
                                    <path d="m8.80092773 0c-4.86181776 0-8.80092773 3.97866667-8.80092773 8.88888889 0 1.69422221.47617651 3.26933331 1.295126 4.61333331l2.50316913 3.9768889c.30201078.4782222.84303623.7697778 1.42482388.7697778h7.17785139c.7077799 0 1.3618277-.368 1.7027479-.9617778l2.3252977-4.0213333c.7411308-1.2888889 1.1728395-2.7786667 1.1728395-4.37688891 0-4.91022222-3.9409628-8.88888889-8.80092777-8.88888889m0 1.77777778c3.82979317 0 6.94810087 3.18933333 6.94810087 7.11111111 0 1.24444441-.3168334 2.43022221-.9393833 3.51466671l-2.3252977 4.0213333c-.0166754.0284444-.0481735.0462222-.0833772.0462222h-7.07224026l-2.43461454-3.8648889c-.68184029-1.12-1.04128871-2.4053333-1.04128871-3.71733331 0-3.92177778 3.11645483-7.11111111 6.94810084-7.11111111"></path>
                                </g>
                            </g>
                        </svg>
                        Kết quả tìm kiếm
                    </div>
                    <div className="grid grid-cols-5 gap-3 mt-3">
                        {productList?.length === 0 ? (
                            <div className="col-span-2">Không tìm thấy sản phẩm nào.</div>
                        ) : (
                            productFilter.map((product, index) => <Card key={index} product={product.item} />)
                        )}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default SearchResult;
