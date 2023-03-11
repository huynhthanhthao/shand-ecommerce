function ImageProve() {
    return (
        <>
            <td className="w-[15%] text-right">
                <strong>Hình ảnh nguồn gốc</strong>
                <span className="text-red-600">*</span>
            </td>
            <td className="px-5">
                <input id="file" type="file" className="hidden" />
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

export default ImageProve;
