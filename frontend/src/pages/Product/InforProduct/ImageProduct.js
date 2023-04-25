import { useState } from "react";

function ImageProduct({ images }) {
    const [imageShow, setImageShow] = useState(images[0]);
    return (
        <div className="img-product flex  flex-col items-center">
            <img src={imageShow} className="w-80 h-80" alt="Product" />
            <ul className="flex mt-3">
                {images.map((image, index) => (
                    <li
                        onClick={() => setImageShow(image)}
                        key={index}
                        className="border-gray-50 border-2 mx-1 hover:border-red-600 rounded cursor-pointer"
                    >
                        <img src={image} className="w-20 h-20  rounded-sm" alt="Product" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ImageProduct;
