import { getCategoryListApi } from "api/categoryApi";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CategorySelect(props) {
    const dispatch = useDispatch();

    const [showTopic, setShowTopic] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [rootActive, setRootActive] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getCategoryListApi(dispatch);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [dispatch]);

    const { categoryList } = useSelector(
        ({ categoryReducer }) => categoryReducer
    );

    const rootCategory = categoryList.filter(
        (category) => category.parent === null
    );
    const getChild = (id) => {
        return categoryList.filter((category) => {
            if (category.parent !== null) {
                return category.parent.id === id;
            } else return false;
        });
    };

    const getNameCategory = (id) => {
        for (let i = 0; i < categoryList.length; i++) {
            if (categoryList[i].id === id) return categoryList[i].nameCategory;
        }
    };

    const useOutsideBox = function (ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowTopic(false);
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
                    {props.newProduct.categoryId
                        ? getNameCategory(props.newProduct.categoryId)
                        : "Chọn loại sản phẩm"}
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
                            onMouseOver={() => setShowDetail(true)}
                        >
                            {rootCategory.map((root, index) => (
                                <div
                                    key={index}
                                    className="topic-list-item flex justify-between font-bold  min-w-[200px] h-8 topic px-4 py-1 hover:bg-orange-200 cursor-pointer rounded"
                                    onMouseEnter={() => {
                                        setRootActive(root.id);
                                    }}
                                    onClick={() => {
                                        setShowTopic(false);
                                        props.dispatch(
                                            props.setNewProduct({
                                                ...props.newProduct,
                                                categoryId: root.id,
                                            })
                                        );
                                    }}
                                >
                                    {root.nameCategory}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                        className="w-2"
                                    >
                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                    </svg>
                                </div>
                            ))}
                        </div>

                        {showDetail && (
                            <div className="border-l px-3 rounded-sm detail-product ">
                                <ul>
                                    {getChild(rootActive).map(
                                        (category, index) => (
                                            <li
                                                onClick={() => {
                                                    setShowTopic(false);
                                                    props.dispatch(
                                                        props.setNewProduct({
                                                            ...props.newProduct,
                                                            categoryId:
                                                                category.id,
                                                        })
                                                    );
                                                }}
                                                key={index}
                                                className="my-2 topic-list-item flex justify-between font-bold  min-w-[50px] h-8 topic px-2 py-1 hover:bg-orange-200 cursor-pointer rounded"
                                            >
                                                {category.nameCategory}
                                            </li>
                                        )
                                    )}
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
