function Card() {
    return (
        <div className="card  shadow-md hover:shadow-xl border rounded-lg flex flex-col w-52 bg-white   hover:cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1">
            <img
                className="rounded-t-lg w-full"
                src={require("assets/images/sp.jpg")}
                alt="san pham"
            />
            <div className="infor p-2 ">
                <div className="h-6 truncate">
                    Áo Hoodie Nike Swoosh Nỉ Bông Dày Dặn Fom Rộng Unisex - Áo
                    Hoodie Nam Nữ Mũ 2 Lớp Siêu Hot 2022
                </div>
                <div className="text-red-600 py-1">
                    <span className="text-xs mr-[1px]">₫</span>
                    99K <span className="text-xs mr-[1px]">- ₫</span>
                    154K
                </div>
                <div className="text-sm">Đã bán 8k</div>
            </div>
        </div>
    );
}

export default Card;
