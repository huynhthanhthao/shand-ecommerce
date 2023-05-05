import { getProductLoveApi } from "api/productApi";
import Card from "components/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function LoveProduct() {
    const dispatch = useDispatch();
    const { account } = useSelector(({ accountReducer }) => accountReducer);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getProductLoveApi({ studentId: account.username }, dispatch);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const { productLove } = useSelector(({ productReducer }) => productReducer);
    return (
        <div className="love-product animate__animated animate__fadeIn">
            <label className="font-bold">Sản phẩm yêu thích</label>
            <ul className="  py-4  border-t my-3 ">
                <ul className="grid grid-cols-5 gap-3">
                    {productLove.productDetail?.map((product, index) => (
                        <li key={index}>
                            <Card product={product} />
                        </li>
                    ))}
                </ul>
            </ul>
        </div>
    );
}

export default LoveProduct;
