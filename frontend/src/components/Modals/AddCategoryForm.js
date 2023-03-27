import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCategoryApi } from "api/categoryApi";

function AddCategoryForm() {
    const [nameCategory, setNameCategory] = useState("");
    const [parent, setParent] = useState(0);
    const dispatch = useDispatch();
    const { categoryList } = useSelector(
        ({ categoryReducer }) => categoryReducer
    );

    const rootCategory = categoryList.filter(
        (category) => category.parent === null
    );

    const handCreateCategory = async () => {
        await createCategoryApi({ parent: +parent, nameCategory }, dispatch);
    };

    return (
        <>
            <div
                data-te-modal-init
                className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                tabIndex="-1"
                aria-labelledby="AddCategory"
                aria-modal="true"
                role="dialog"
                id="add_category"
            >
                <div
                    data-te-modal-dialog-ref
                    className=" pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
                >
                    <div className="bg-white pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-clip-padding text-current shadow-lg outline-none">
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
                                data-te-modal-dismiss
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
                                            onChange={(e) =>
                                                setParent(e.target.value)
                                            }
                                        >
                                            <option value="0" className="p-2">
                                                root
                                            </option>
                                            {rootCategory.map((root) => (
                                                <option
                                                    className="p-2"
                                                    value={root.id}
                                                    key={root.id}
                                                >
                                                    [{root.id}] -{" "}
                                                    {root.nameCategory}
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
                                data-te-modal-dismiss
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Đóng
                            </button>
                            <button
                                className="bg-green-700 ml-1 inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase  text-white "
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                data-te-modal-dismiss
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
