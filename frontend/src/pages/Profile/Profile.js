import Categogy from "./Categogy/Category";
import { Outlet } from "react-router-dom";
function Profile() {
    return (
        <div className="profile bg-white px-20 grid grid-cols-5 gap-10 py-5 ">
            <div className="profile-category col-span-1 text-[#000000a6] border-r">
                <Categogy />
            </div>
            <div className="profile-detail col-span-4">
                <Outlet />
            </div>
        </div>
    );
}

export default Profile;
