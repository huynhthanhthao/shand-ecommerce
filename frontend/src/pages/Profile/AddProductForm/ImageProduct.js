import { useState } from "react";

function ImageProduct(props) {
    // const [imageAvatar, setImageAvatar] = useState("");
    const [fileList, setFileList] = useState([]);
    const setImages = () => {
        // Save image in the cloudinary
        // const CLOUDINARY_UPLOAD_PRESET = "qle01vei";
        const formData = new FormData();
        // let detailImage = {};
        fileList.forEach((file, index) => {
            formData.append(`file-${index}`, file);
        });

        // if (file.name) {
        // formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        // const CLOUDINARY_URL =
        //     "https://api.cloudinary.com/v1_1/drjynwuyt/upload";
        // detailImage = await fetch(CLOUDINARY_URL, {
        //     method: "POST",
        //     body: formData,
        // }).then((data) => {
        //     return data.json();
        // });
        // }
        props.dispatch(props.setNewProduct(formData));
    };
    console.log();

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
                    onChange={(e) => {
                        const file = e.target.files[0];
                        // setImageAvatar(URL.createObjectURL(file));
                        setFileList((prev) => [...prev, file]);
                        setImages();
                    }}
                />
                <label
                    htmlFor="file"
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
            </td>
        </>
    );
}

export default ImageProduct;
