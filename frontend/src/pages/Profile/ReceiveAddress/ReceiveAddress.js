import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAddressList } from "api/addressReceiveApi";
import { useState } from "react";
import AddressFormAdd from "./AddressFormAdd";
import AddressFormUpdate from "./AddressFormUpdate";
import AddressItem from "./AddressItem";

function RecieveAddress() {
    const dispatch = useDispatch();
    const { account } = useSelector(({ accountReducer }) => accountReducer);
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await getAddressList({ username: account.username }, dispatch);
        };
        fetchData();
    }, [dispatch, account]);

    const { addressList } = useSelector(({ addressReceiveReducer }) => addressReceiveReducer);

    return (
        <div className="recieve-address flex flex-col animate__animated animate__fadeIn">
            <label className="font-bold">Địa chỉ nhận hàng</label>

            <div className="border-t my-3 py-4">
                <div className="grid grid-cols-2 gap-2 ">
                    {addressList.map((address) => (
                        <AddressItem key={address.id} address={address} setShowFormUpdate={setShowFormUpdate} />
                    ))}
                </div>
                {showFormAdd || (
                    <button
                        onClick={() => setShowFormAdd(true)}
                        className="btn3 py-2 px-3 w-56 flex items-center justify-center my-4 "
                    >
                        <svg className="w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                className="fill-white"
                                d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                            />
                        </svg>
                        Thêm địa chỉ
                    </button>
                )}
                {showFormAdd && <AddressFormAdd setShowFormAdd={setShowFormAdd} />}
                {showFormUpdate && <AddressFormUpdate setShowFormUpdate={setShowFormUpdate} />}
            </div>
        </div>
    );
}

export default RecieveAddress;
