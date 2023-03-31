function ImageProduct({ images }) {
    return (
        <div className="img-product flex  flex-col items-center">
            <img src={images[0]} className="w-80 h-80" alt="Product" />
            <ul className="flex mt-3">
                {images.map((image, index) => (
                    <li
                        key={index}
                        className="border-gray-50 border-2 mx-1 hover:border-red-600 rounded cursor-pointer"
                    >
                        <img
                            src={image}
                            className="w-20 h-20  rounded-sm"
                            alt="Product"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ImageProduct;
