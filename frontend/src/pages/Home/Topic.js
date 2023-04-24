import { getCategoryListApi } from "api/categoryApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function Topic(props) {
    const dispatch = useDispatch();
    const [showTopic, setShowTopic] = useState(false);

    useEffect(() => {
        const fetchData = () => {
            getCategoryListApi(dispatch);
        };
        fetchData();
    }, [dispatch]);

    const { categoryList } = useSelector(({ categoryReducer }) => categoryReducer);

    const rootCategory = categoryList.filter((category) => category.parent === null).slice(3, 9);

    // const allChildCategory = categoryList.filter((category) => category.parent !== null);

    return (
        <>
            <div className="topic bground mb-2 w-screen">
                <ul className="flex mx-20 text-white">
                    {rootCategory.map((root, index) => (
                        <li
                            onClick={() => {
                                props.setCategory(root);
                            }}
                            key={index}
                            className="topic-item relative font-bold  "
                        >
                            <div className="flex justify-center">
                                <div>
                                    <div className="relative ">
                                        <div
                                            onClick={() => setShowTopic(true)}
                                            className="flex px-16 py-3 items-center whitespace-nowrap text-base    text-white transition duration-150 ease-in-out hover:bg-[#575757]dropdown-toggle"
                                        >
                                            {root.nameCategory}
                                        </div>
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
