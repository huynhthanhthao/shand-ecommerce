import Category from "./Categogy/Category";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { DefaultLayout } from "components/Layout";

function Profile() {
    return (
        <DefaultLayout>
            <div className="profile bg-white px-20 grid grid-cols-5 gap-10 py-5 ">
                <div className="profile-category col-span-1 text-[#000000a6] border-r">
                    <Category />
                </div>
                <div className="profile-detail col-span-4">
                    <Outlet />
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Profile;
