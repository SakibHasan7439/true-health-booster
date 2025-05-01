import Image from "next/image";

const OurService = ({image, serviceName}) => {
    return (
        <div className="col-span-6 mb-5 md:mb-10 lg:mb-12 md:col-span-4">
            <Image 
                width={140}
                height={140}
                className="mb-6 mx-auto w-[110px] h-[110px] md:w-[140px] md:h-[140px]"
                alt="service image"
                src={image}
            />
            <p className="text-sm md:text-xl mx-auto text-center max-w-[150px] font-semibold">{serviceName}</p>
        </div>
    );
};

export default OurService;