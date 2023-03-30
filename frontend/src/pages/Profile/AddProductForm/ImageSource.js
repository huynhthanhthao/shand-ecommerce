import { createUrlImage } from "api/cloudinaryApi";
import { checkImageValid } from "api/teachablemachineApi";
import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import LoadingSmall from "components/LoadingSmall";

function ImageSource(props) {
    const [imageList, setImageList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShowNotify, setIsShowNotify] = useState(false);

    const setImageStore = async (e) => {
        try {
            const file = e.target.files[0];

            setIsLoading(true);
            setIsShowNotify(false);
            const url = await createUrlImage(file);
            if (url) {
                const percent = await checkImageValid(url);
                if (percent >= 90) {
                    setImageList((prev) => [...prev, url]);
                } else setIsShowNotify(true);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        props.dispatch(
            props.setNewProduct({
                ...props.newProduct,
                imagesSource: imageList,
            })
        );
    }, [imageList.length]);

    console.log(props.newProduct);

    return (
        <>
            <td className="w-[15%] text-right">
                <strong>Hình ảnh nguồn gốc</strong>
                <span className="text-red-600">*</span>
            </td>

            <td className="px-5">
                <input
                    id="file-sourse"
                    type="file"
                    className="hidden"
                    onChange={async (e) => {
                        await setImageStore(e);
                    }}
                />
                <label
                    htmlFor="file-sourse"
                    className="w-28 flex items-center font-bold cursor-pointer hover:opacity-70 border border-dashed p-1"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-6 mr-1"
                    >
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
                                <img
                                    alt="product"
                                    className="w-20 h-20 mr-2"
                                    src={image}
                                />
                                <svg
                                    onClick={() => {
                                        setImageList((prev) => {
                                            return prev.filter(
                                                (image, indexList) =>
                                                    index !== indexList
                                            );
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

                    {isLoading && <LoadingSmall />}
                    {isShowNotify && (
                        <div className="border-red-500 border p-2 text-red-500 text-center">
                            Hình ảnh chứng minh nguồn gốc sản phẩm của bạn cung
                            cấp chưa hợp lệ. Vui lòng thử lại!
                        </div>
                    )}
                </div>
            </td>
        </>
    );
}

export default ImageSource;
