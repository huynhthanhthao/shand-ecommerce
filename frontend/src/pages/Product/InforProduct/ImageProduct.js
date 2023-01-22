function ImageProduct() {
    return (
        <div className="img-product flex  flex-col items-center">
            <img
                src={require("assets/images/sp.jpg")}
                className="w-80"
                alt="Product"
            />
            <ul className="flex mt-3">
                <li className="border-gray-50 border-2 mx-1 hover:border-red-600 rounded cursor-pointer">
                    <img
                        src={require("assets/images/sp.jpg")}
                        className="w-20  rounded-sm"
                        alt="Product"
                    />
                </li>
                <li className="border-gray-50 border-2 mx-1 hover:border-red-600 rounded cursor-pointer">
                    <img
                        src={require("assets/images/sp.jpg")}
                        className="w-20  rounded"
                        alt="Product"
                    />
                </li>
            </ul>
        </div>
    );
}

export default ImageProduct;
