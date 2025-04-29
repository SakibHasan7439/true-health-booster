const BrandTitle = ({title}) => {
    return (
        <div className="flex justify-center pb-6 items-center w-full">
            <div className="h-px bg-[#32BADE] w-10"></div>
            <h2 className="font-bold text-black px-4 text-xl">{title}</h2>
            <div className=" h-px bg-[#32BADE] w-10"></div>
        </div>
    );
};

export default BrandTitle;