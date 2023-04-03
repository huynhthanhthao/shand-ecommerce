import { getCategoryListApi } from "api/categoryApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function Topic(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = () => {
            getCategoryListApi(dispatch);
        };
        fetchData();
    }, [dispatch]);

    const { categoryList } = useSelector(({ categoryReducer }) => categoryReducer);

    const rootCategory = categoryList.filter((category) => category.parent === null);

    const allChildCategory = categoryList.filter((category) => category.parent !== null);

    return (
        <>
            <div className="topic bground mb-16">
                <ul className="flex mx-20 text-white">
                    {rootCategory.map((root, index) => (
                        <li
                            onClick={() => {
                                props.setCategory(root);
                            }}
                            key={index}
                            className="topic-item relative font-bold border-white border-b-4 "
                        >
                            <div className="flex justify-center">
                                <div>
                                    <div className="relative " data-te-dropdown-ref>
                                        <a
                                            className="flex px-20 py-3 items-center whitespace-nowrap text-base    text-white transition duration-150 ease-in-out hover:bg-[#575757] "
                                            href="#"
                                            type="button"
                                            id="dropdownMenuButton2"
                                            data-te-dropdown-toggle-ref
                                            aria-expanded="false"
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                        >
                                            {root.nameCategory}
                                        </a>
                                        <ul
                                            className="absolute z-[1000]  m-0 hidden min-w-max list-none overflow-hidden border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                            aria-labelledby="dropdownMenuButton2"
                                            data-te-dropdown-menu-ref
                                        >
                                            {allChildCategory.map((child, index) => {
                                                if (child.parent.id === root.id)
                                                    return (
                                                        <li
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                props.setCategory(child);
                                                            }}
                                                            key={index}
                                                        >
                                                            <a
                                                                className="block w-full bg-transparent px-16 shadow py-2  font-normal text-white hover:bg-neutral-100 hover:text-neutral-800 transition "
                                                                href="#"
                                                                data-te-dropdown-item-ref
                                                            >
                                                                {child.nameCategory}
                                                            </a>
                                                        </li>
                                                    );
                                                else return "";
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Topic;
