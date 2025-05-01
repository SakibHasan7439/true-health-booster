const BrandTitle = ({title, className}) => {
    return (
        <div className="flex justify-center pb-10 items-center w-full">
            <div className="h-px bg-[#32BADE] w-10 md:w-20"></div>
            <h2 className={`font-bold text-black px-4 title-small text-lg md:text-2xl xl:text-3xl ${className}`}>{title}</h2>
            <div className=" h-px bg-[#32BADE] w-10 md:w-20"></div>
        </div>
    );
};

export default BrandTitle;