import Categogy from "./Categogy/Category";
import { Outlet } from "react-router-dom";
import Confirm from "components/Modals/Confirm";
function Profile() {
    return (
        <div className="profile bg-white px-20 grid grid-cols-5 gap-10 py-5 ">
            <div className="profile-category col-span-1 text-[#000000a6] border-r">
                <Categogy />
            </div>
            <div className="profile-detail col-span-4">
                <Confirm
                    id="delete_product"
                    title="Xóa sản phẩm"
                    description="bạn có chắc muốn xóa sản phẩm này?"
                />
                <Outlet />
            </div>
        </div>
    );
}

export default Profile;
