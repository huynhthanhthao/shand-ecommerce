import Categogy from "./Categogy/Category";
import { Outlet } from "react-router-dom";
import Confirm from "components/Modals/Confirm";
import { useSelector } from "react-redux";
import { DefaultLayout } from "components/Layout";

function Profile() {
    const { product } = useSelector(({ productReducer }) => productReducer);
    return (
        <DefaultLayout>
            <div className="profile bg-white px-20 grid grid-cols-5 gap-10 py-5 ">
                <div className="profile-category col-span-1 text-[#000000a6] border-r">
                    <Categogy />
                </div>
                <div className="profile-detail col-span-4">
                    <Confirm
                        id="delete_product"
                        title="Xóa sản phẩm"
                        description="Bạn có chắc muốn xóa sản phẩm này?"
                        product={product}
                    />
                    <Outlet />
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Profile;
