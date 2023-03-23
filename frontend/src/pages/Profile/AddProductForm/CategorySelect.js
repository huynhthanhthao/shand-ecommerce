import { useState, useRef, useEffect } from "react";

function CategorySelect() {
    const [showTopic, setShowTopic] = useState(false);
    const [showDetai, setShowDetai] = useState(false);

    const useOutsideBox = function (ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    alert("You clicked outside of me!");
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    };

    const wrapperRef = useRef(null);
    useOutsideBox(wrapperRef);

    return (
        <>
            <td className="w-[15%] text-right">
                <strong>Danh mục</strong>
                <span className="text-red-600">*</span>
            </td>
            <td className="px-5 ">
                <button
                    onClick={() => setShowTopic(true)}
                    className="w-full flex justify-between text-left input focus:shadow-input py-2 px-3"
                >
                    Chọn loại sản phẩm
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5"
                    >
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                </button>
                {showTopic && (
                    <div
                        ref={wrapperRef}
                        className="absolute flex  bg-white border py-1 px-4 rounded-sm"
                    >
                        <div
                            className="topic-list"
                            onMouseOver={() => setShowDetai(true)}
                        >
                            <div className="topic-list-item flex justify-between font-bold  min-w-[200px] h-8 topic px-4 py-1 hover:bg-orange-200 cursor-pointer rounded">
                                Thời trang nam
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-2"
                                >
                                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                </svg>
                            </div>
                            <div className="topic-list-item flex justify-between font-bold  min-w-[200px] h-8 topic px-4 py-1 hover:bg-orange-200 cursor-pointer rounded">
                                Thời trang nữ
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-2"
                                >
                                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                </svg>
                            </div>
                        </div>

                        {showDetai && (
                            <div className="border-l px-3 rounded-sm detail-product ">
                                <ul>
                                    <li className="my-2">Áo sơ mi nam</li>
                                    <li className="my-2">Áo khoác nam</li>
                                    <li className="my-2">
                                        Áo thun, áo polo nam
                                    </li>
                                    <li className="my-2">Quần dài nam</li>
                                    <li className="my-2">Quần thể thao nam</li>
                                    <li className="my-2">Quần short nam</li>
                                    <li className="my-2">
                                        Phụ kiện thời trang nam
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </td>
        </>
    );
}

export default CategorySelect;
