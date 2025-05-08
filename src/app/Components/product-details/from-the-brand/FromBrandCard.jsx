const FromBrandCard = ({info}) => {
    return (
        <div className=" bg-cover bg-center flex flex-col justify-end h-[140px] md:h-[260px] xl:h-[400px] text-center bg-no-repeat px-2 py-2 text-white" style={{ backgroundImage:  `url(${info?.img})` }}>
            <h3 className="lg:text-[15px] xl:text-xl text-[12px] text-sm font-medium border-b-2 mb-2"><i>{info?.title}</i></h3>
            <p className="text-[8px] md:text-[12px] xl:text-sm">{info?.text}</p>
        </div>
    );
};

export default FromBrandCard;