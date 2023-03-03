function LabelCategory({ label }) {
    return (
        <div
            className="label-category my-3 px-2 py-2 bg-[#f5f5f5] font-bold 
            border-l-[3px] border-orange-600 text-orange-600 text-sm"
        >
            {label}
        </div>
    );
}

export default LabelCategory;
