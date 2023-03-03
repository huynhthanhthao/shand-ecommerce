import HeaderAdmin from "./HeaderAdmin/HeaderAdmin";
import Categogy from "./Category/Category";
import { Outlet } from "react-router-dom";

function Admin() {
    return (
        <div className="admin bg-[#364050] ">
            <HeaderAdmin />
            <div className="container grid grid-cols-5 gap-4">
                <div class="category">
                    <Categogy />
                </div>
                <div class="content col-span-4 my-4 mr-4 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Admin;
