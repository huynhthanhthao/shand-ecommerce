function Box({ children }) {
    return (
        <>
            {/* <div className="text-center text-lg py-4 bg-white mb-2 text-red-600 border-b-[3px] border-b-[#ee2624]">
                GỢI Ý HUM NAY
            </div> */}

            <div className="box mb-2 rounded-sm grid grid-cols-6 p-2 gap-3 bg-white min-h-[50px] ">
                {children}
            </div>
        </>
    );
}

export default Box;
