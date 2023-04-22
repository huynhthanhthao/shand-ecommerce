import { useDispatch, useSelector } from "react-redux";
// import { deleteProductById } from "api/productApi";
import { deleteAccountApi } from "api/accountApi";
import { deleteCategoryApi } from "api/categoryApi";
import { deleteEventApi } from "api/eventApi";
import { deleteProductById } from "api/productApi";

function Confirm(props) {
    const dispatch = useDispatch();
    const { accountTarget } = useSelector(({ accountReducer }) => accountReducer);
    const { category } = useSelector(({ categoryReducer }) => categoryReducer);
    const { event } = useSelector(({ eventReducer }) => eventReducer);
    const handleDeleteAccount = async () => {
        await deleteAccountApi(accountTarget, dispatch);
    };
    const handleDeleteCategory = async () => {
        await deleteCategoryApi(category, dispatch);
    };

    const handleDeleteEvent = async () => {
        await deleteEventApi(event, dispatch);
    };

    return (
        <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2  border-opacity-100 p-4 dark:border-opacity-50">
                        <h5
                            className="text-xl flex items-center font-medium leading-normal text-neutral-800"
                            id="exampleModalLabel"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 mr-2">
                                <path
                                    className="fill-yellow-600"
                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                                />
                            </svg>
                            {props.title}
                        </h5>
                        <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="relative flex-auto p-4" data-te-modal-body-ref>
                        {props.description}
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
                            className="bg-red-700 ml-1 inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase  text-white "
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => {
                                if (props.id === "delete_student") handleDeleteAccount();
                                else if (props.id === "delete_shop") handleDeleteAccount();
                                else if (props.id === "delete_category") handleDeleteCategory();
                                else if (props.id === "delete_event") handleDeleteEvent();
                                else deleteProductById({ id: props.product.id }, dispatch);
                            }}
                        >
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confirm;
