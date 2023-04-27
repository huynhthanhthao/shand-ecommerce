import Moment from "react-moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventListApi } from "api/eventApi";
import { getTopRanking } from "api/accountApi";
function Event() {
    const dispatch = useDispatch();
    const [studentList, setStudentList] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            await getEventListApi(dispatch);
            const data = await getTopRanking();
            setStudentList(data);
        };
        fetchData();
    }, [dispatch]);
    const { eventList } = useSelector(({ eventReducer }) => eventReducer);

    const activeList = eventList.filter((event) => event.status === true)[0];
    return (
        <div className="ads mx-24 mt-5">
            <div className="grid grid-cols-2 gap-3">
                <div
                    className="text-center p-3 pt-0 rounded text-[#333]"
                    style={{
                        backgroundImage: `url(${require("assets/images/eventbg.jpg")})`,
                    }}
                >
                    <h4 className="flex justify-center mb-2 p-2 mx-auto bg-zinc-700 -mt-5 text-white w-[65%] uppercase ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 fill-white mr-2">
                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H368c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                        </svg>
                        Sự kiện mua bán đồ cũ
                    </h4>
                    {activeList && (
                        <div className="grid grid-cols-3 gap-3 mt-4">
                            <div className="flex flex-col p-2 justify-center items-center bg-yellow-400 w-48 rounded text-white shadow-xl shadow-yellow-500/20">
                                <p className=" flex font-bold uppercase">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                        className="w-5 mr-1 fill-white"
                                    >
                                        <path d="M192 128c0-17.7 14.3-32 32-32s32 14.3 32 32v7.8c0 27.7-2.4 55.3-7.1 82.5l-84.4 25.3c-40.6 12.2-68.4 49.6-68.4 92v71.9c0 40 32.5 72.5 72.5 72.5c26 0 50-13.9 62.9-36.5l13.9-24.3c26.8-47 46.5-97.7 58.4-150.5l94.4-28.3-12.5 37.5c-3.3 9.8-1.6 20.5 4.4 28.8s15.7 13.3 26 13.3H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H460.4l18-53.9c3.8-11.3 .9-23.8-7.4-32.4s-20.7-11.8-32.2-8.4L316.4 198.1c2.4-20.7 3.6-41.4 3.6-62.3V128c0-53-43-96-96-96s-96 43-96 96v32c0 17.7 14.3 32 32 32s32-14.3 32-32V128zm-9.2 177l49-14.7c-10.4 33.8-24.5 66.4-42.1 97.2l-13.9 24.3c-1.5 2.6-4.3 4.3-7.4 4.3c-4.7 0-8.5-3.8-8.5-8.5V335.6c0-14.1 9.3-26.6 22.8-30.7zM24 368c-13.3 0-24 10.7-24 24s10.7 24 24 24H64.3c-.2-2.8-.3-5.6-.3-8.5V368H24zm592 48c13.3 0 24-10.7 24-24s-10.7-24-24-24H305.9c-6.7 16.3-14.2 32.3-22.3 48H616z" />
                                    </svg>
                                    Tên sự kiện&nbsp;
                                </p>
                                {activeList.title}
                            </div>
                            <div className="flex flex-col p-2 justify-center items-center bg-blue-400 w-48 rounded text-white shadow-xl shadow-blue-500/20">
                                <p className=" flex font-bold uppercase">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-5 mr-1 fill-white"
                                    >
                                        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                    Thời gian&nbsp;
                                </p>
                                <div>
                                    {activeList.time} <Moment format="DD/MM/YYYY">{activeList.date}</Moment>
                                </div>
                            </div>
                            <div className="flex flex-col p-2 justify-center items-center bg-purple-400 w-48 rounded text-white shadow-xl shadow-purple-500/20">
                                <p className=" flex font-bold uppercase">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                        className="w-3 mr-1 fill-white"
                                    >
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                    </svg>
                                    Địa điểm&nbsp;
                                </p>
                                {activeList.address}
                            </div>
                            <div className="col-span-3 flex flex-col p-2 justify-center items-center bg-red-400  rounded text-white shadow-xl shadow-red-500/20">
                                <p className=" flex font-bold uppercase">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-5 mr-1 fill-white"
                                    >
                                        <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                                    </svg>
                                    Mục đích&nbsp;
                                </p>
                                {activeList.purpose}
                            </div>
                        </div>
                    )}
                </div>
                <div
                    className="text-center p-3 pt-0 rounded text-[#333]"
                    style={{
                        backgroundImage: `url(https://img.freepik.com/free-photo/light-gray-acrylic-painting-background-wallpaper-image_53876-124527.jpg?w=996&t=st=1678377664~exp=1678378264~hmac=7e1321f20972cae05ad9b86b3d9623ed2a628bcc32b44db25f0d2c135ce733d6)`,
                    }}
                >
                    <h4 className="flex justify-center mb-2 p-2 mx-auto bg-zinc-700 -mt-5 text-white w-[80%] uppercase">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-8 fill-white mr-2">
                            <path d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z" />
                        </svg>
                        Bảng xếp hạng tháng này
                    </h4>
                    {studentList && (
                        <div className="flex items-end mx-20">
                            <div className="w-52  flex flex-col items-center">
                                <div className="relative rounded-full ">
                                    <img
                                        src={studentList[1].urlAvatar}
                                        alt="top-3"
                                        className="w-20 h-20 rounded-full border-2 border-blue-500 shadow-xl shadow-blue-500/20"
                                    />
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                            className="absolute -bottom-1 bg-blue-500 text-center rounded-full p-2 w-7 h-7 fill-white"
                                        >
                                            <path d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="font-bold text-sm mt-2 mb-3">{studentList[1].username}</p>
                            </div>
                            <div className="w-52  flex flex-col items-center">
                                <div className="relative rounded-full text-center">
                                    <img
                                        src={require("assets/images/crown.png")}
                                        alt="top-3"
                                        className="w-10 mx-auto rounded-full"
                                    />
                                    <img
                                        src={studentList[0].urlAvatar}
                                        alt="top-3"
                                        className="w-28 h-28 rounded-full border-2 border-yellow-500 shadow-xl shadow-yellow-500/20"
                                    />
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 256 512"
                                            className="absolute -bottom-1 bg-yellow-500 text-center rounded-full p-2 w-7 h-7 fill-white"
                                        >
                                            <path d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="font-bold text-sm mt-2 mb-3">{studentList[0].username}</p>
                            </div>
                            <div className="w-52  flex flex-col items-center">
                                <div className="relative rounded-full ">
                                    <img
                                        src={studentList[2].urlAvatar}
                                        alt="top-3"
                                        className="w-20 h-20 rounded-full border-2 border-purple-500 shadow-xl shadow-purple-500/20"
                                    />
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                            className="absolute -bottom-1 bg-purple-500 text-center rounded-full p-2 w-7 h-7 fill-white"
                                        >
                                            <path d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="font-bold text-sm mt-2 mb-3">{studentList[2].username}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Event;
