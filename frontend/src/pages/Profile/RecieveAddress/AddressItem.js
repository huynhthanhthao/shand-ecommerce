import { deleteAddressReceiveApi } from "api/addressReceiveApi";
import { useDispatch } from "react-redux";
import { setAddressReceive } from "store/reducers/addressReceiveSlice";

function AddressItem({ address, setShowFormUpdate }) {
    const dispatch = useDispatch();

    return (
        <div className="animate__animated animate__fadeIn address-item  bg-[#dceafa]  p-3 rounded text-sm flex justify-between items-center">
            <div>
                <strong>{address.fullName}</strong>
                <div>
                    <strong>Địa chỉ: </strong>
                    <span>{address.address}</span>
                </div>
                <div>
                    <strong>Điên thoại: </strong>
                    <span>{address.phoneNumber}</span>
                </div>
            </div>
            <div>
                {address.isDefault && (
                    <div>
                        <div className="bg-green-500 p-1 rounded text-white font-bold">Mặc định</div>
                    </div>
                )}
            </div>
            <div className="flex">
                <button
                    onClick={() => {
                        setShowFormUpdate(true);
                        dispatch(setAddressReceive(address));
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 mr-2">
                        <path
                            className=" fill-orange-400"
                            d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z"
                        />
                    </svg>
                </button>
                <button className="" onClick={() => deleteAddressReceiveApi({ id: address.id }, dispatch)}>
                    <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default AddressItem;
