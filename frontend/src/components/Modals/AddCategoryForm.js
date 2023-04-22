import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCategoryApi } from "api/categoryApi";

function AddCategoryForm() {
    const [nameCategory, setNameCategory] = useState("");
    const [parent, setParent] = useState(0);
    const dispatch = useDispatch();
    const { categoryList } = useSelector(({ categoryReducer }) => categoryReducer);

    const rootCategory = categoryList.filter((category) => category.parent === null);

    const handCreateCategory = async () => {
        await createCategoryApi({ parent: +parent, nameCategory }, dispatch);
    };

    return (
        <>
            <div
                className="modal fade"
                id="add_category"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 ">
                            <h5
                                className="text-xl font-medium leading-normal text-neutral-800"
                                id="exampleModalScrollableLabel"
                            >
                                Thêm danh mục
                            </h5>

                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6 "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                        className="text-black"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="relative p-4">
                            <form>
                                <div className="flex flex-col mb-2">
                                    <label className="pb-2">Tên danh mục</label>
                                    <input
                                        className="p-2 border outline-neutral-400"
                                        placeholder="Nhập tên danh mục..."
                                        onChange={(e) => {
                                            setNameCategory(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col mb-2">
                                    <label className="pb-2">Phụ thuộc</label>
                                    <div className="flex justify-center ">
                                        <select
                                            className="p-2 border outline-neutral-400 w-full"
                                            data-te-select-init
                                            onChange={(e) => setParent(e.target.value)}
                                        >
                                            <option value="0" className="p-2">
                                                root
                                            </option>
                                            {rootCategory.map((root) => (
                                                <option className="p-2" value={root.id} key={root.id}>
                                                    [{root.id}] - {root.nameCategory}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <button
                                type="button"
                                className="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                Đóng
                            </button>
                            <button
                                className="bg-green-700 ml-1 inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase  text-white "
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => handCreateCategory()}
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddCategoryForm;
