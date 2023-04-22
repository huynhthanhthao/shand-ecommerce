import { DefaultLayout } from "components/Layout";
import { Link } from "react-router-dom";

function Profile() {
    return (
        <DefaultLayout>
            <div className="profile bg-white flex justify-center flex-col items-center p-10 h-full">
                <img src={require("assets/images/404-V2.png")} alt="Not found" className="w-[500px]" />
                <p className="text-xl font-bold mt-3">Không tìm thấy trang này.</p>
                <Link to="/" className="btn3 px-10 py-2 mt-5">
                    Quay lại
                </Link>
            </div>
        </DefaultLayout>
    );
}

export default Profile;
