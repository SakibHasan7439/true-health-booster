import Image from "next/image";

const OurService = ({image, serviceName}) => {
    return (
        <div className="col-span-6 mb-12 md:col-span-4">
            <Image 
                width={100}
                height={100}
                className="mb-4 mx-auto"
                alt="service image"
                src={image}
            />
            <p className="text-sm text-center font-semibold">{serviceName}</p>
        </div>
    );
};

export default OurService;