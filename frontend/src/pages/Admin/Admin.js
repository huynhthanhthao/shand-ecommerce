import { Outlet } from "react-router-dom";

import HeaderAdmin from "./HeaderAdmin/HeaderAdmin";
import Categogy from "./Category/Category";
import AddAccountForm from "components/Modals/AddAccountForm";
import EditAccountForm from "components/Modals/EditAccountForm";
import AddCategoryForm from "components/Modals/AddCategoryForm";
import EditCategoryForm from "components/Modals/EditCategoryForm";
import AddEventForm from "components/Modals/AddEventForm";
import EditEventForm from "components/Modals/EditEventForm";
import AddSupportForm from "components/Modals/AddSupportForm";
import EditSupportForm from "components/Modals/EditSupportForm";
import Confirm from "components/Modals/Confirm";
import DetailReport from "components/Modals/DetailReport";
import DetailFee from "components/Modals/DetailFee";

function Admin() {
    return (
        <>
            <div className="admin bg-[#364050] relative ">
                <AddAccountForm label="Thêm tài khoản sinh viên" role="student" idModal="add_student" />
                <AddAccountForm label="Thêm tài khoản cửa hàng" idModal="add_shop" role="shop" />
                <EditAccountForm label="Chỉnh sửa tài khoản sinh viên" idModal="edit_student" />
                <EditAccountForm label="Chỉnh sửa tài khoản cửa hàng" idModal="edit_shop" />
                <AddCategoryForm />
                <EditCategoryForm />

                <AddEventForm />
                <EditEventForm />
                <AddSupportForm />
                <EditSupportForm />
                <Confirm title="Xóa tài khoản" description="Bạn có muốn xóa tài khoản này?" id="delete_student" />
                <Confirm title="Xóa tài khoản" description="Bạn có muốn xóa tài khoản này?" id="delete_shop" />
                <Confirm title="Xóa danh mục" description="Bạn có muốn xóa danh mục này?" id="delete_category" />
                <Confirm title="Xóa sự kiện" description="Bạn có muốn xóa sự kiện này?" id="delete_event" />
                <Confirm
                    title="Xóa thông tin hỗ trợ"
                    description="Bạn có muốn xóa thông tin hỗ trợ này?"
                    id="delete_support"
                />
                <DetailReport />
                <DetailFee />
                {/* main */}
                <HeaderAdmin />
                <div className="grid grid-cols-5 gap-4">
                    <div className="category">
                        <Categogy />
                    </div>
                    <div className="content col-span-4 my-4 mr-4 ">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin;
