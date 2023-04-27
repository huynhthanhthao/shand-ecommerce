import { createUrlImage } from "api/cloudinaryApi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { closeLoading, openLoading } from "store/reducers/loadingSlice";

function ImageProduct(props) {
    const dispatch = useDispatch();

    const [imageList, setImageList] = useState([]);

    const setImageStore = async (e) => {
        const file = e.target.files[0];

        const getSizeImage = e.target.files[0].size;
        if (getSizeImage > 4000 * 3000) {
            toast.error("Chỉ chấp nhận hình ảnh dưới 5MB");
        } else {
            dispatch(openLoading("Đang tải lên..."));

            const url = await createUrlImage(file);
            dispatch(closeLoading());

            setImageList((prev) => [...prev, url]);
        }
    };

    useEffect(() => {
        props.dispatch(
            props.setNewProduct({
                ...props.newProduct,
                images: imageList,
            })
        );
    }, [imageList.length]);

    return (
        <>
            <td className="w-[15%] text-right">
                <strong>Hình ảnh sản phẩm</strong>
                <span className="text-red-600">*</span>
            </td>
            <td className="px-5">
                <input
                    id="file"
                    type="file"
                    className="hidden"
                    accept=".jpg, .png"
                    multiple
                    onChange={async (e) => {
                        await setImageStore(e);
                    }}
                />
                <label
                    htmlFor="file"
                    className="w-28 flex items-center font-bold cursor-pointer hover:opacity-70 border border-dashed p-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 mr-1">
                        <path
                            className="fill-emerald-600 "
                            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                        />
                    </svg>
                    Thêm ảnh
                </label>
                <div>
                    <ul className="flex mt-2">
                        {imageList.map((image, index) => (
                            <li key={index} className="relative">
                                <img alt="product" className="w-20 h-20 mr-2" src={image} />
                                <svg
                                    onClick={() => {
                                        setImageList((prev) => {
                                            return prev.filter((image, indexList) => index !== indexList);
                                        });
                                    }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 352 512"
                                    className="w-3 fill-orange-600 cursor-pointer hover:opacity-80  absolute top-0 right-3"
                                >
                                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                                </svg>
                            </li>
                        ))}
                    </ul>
                </div>
            </td>
        </>
    );
}

export default ImageProduct;
