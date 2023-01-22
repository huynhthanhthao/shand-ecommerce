function Topic() {
    return (
        <>
            <div className="topic bground ">
                <ul className="flex justify-between mx-24 text-white">
                    <li className="topic-item border-white border-b-4">
                        Đầm váy
                    </li>
                    <li className="topic-item">Đồ bếp</li>
                    <li className="topic-item">Item 1</li>
                    <li className="topic-item">Item 1</li>
                    <li className="topic-item">Item 1</li>
                    <li className="topic-item">Item 1</li>
                </ul>
            </div>
            <div className="item-type mx-24">
                <ul className="flex justify-center">
                    <li className="p-4 h-36 w-32   text-center">
                        <img
                            src={require("assets/images/logo.png")}
                            alt="sp"
                            className="w-14 m-auto"
                        />
                        <span>Giá, kệ để gọn đồ</span>
                    </li>
                    <li className="p-4 h-36 w-32  text-center ">
                        <img
                            src={require("assets/images/logo.png")}
                            alt="sp"
                            className="w-14 m-auto"
                        />
                        <span>Giá, kệ để gọn đồ</span>
                    </li>
                    <li className="p-4 h-36 w-32  text-center ">
                        <img
                            src={require("assets/images/logo.png")}
                            alt="sp"
                            className="w-14 m-auto"
                        />
                        <span>Giá, kệ để gọn đồ</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Topic;
