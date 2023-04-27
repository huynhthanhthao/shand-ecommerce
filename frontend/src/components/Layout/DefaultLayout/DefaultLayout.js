import Header from "./Header/Header";
import Footer from "./Footer";
import LoginModal from "components/Modals/LoginModal";
import { useSelector } from "react-redux";
import { loginModalSelector } from "store/reducers/authSlice";

function DefaultLayout({ children }) {
    const isShowLogin = useSelector(loginModalSelector);
    return (
        <>
            <Header />
            <div className="  bg-[#f2f3f4] ">{children}</div>
            <Footer />
            {isShowLogin && <LoginModal />}
        </>
    );
}

export default DefaultLayout;
