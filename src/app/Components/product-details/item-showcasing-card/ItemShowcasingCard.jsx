import Image from "next/image";

const ItemShowcasingCard = ({ title, description, imageUrl, reverse }) => {
    return (
        <div className={`bg-[#f7f7f7] p-6 md:p-12 rounded-3xl mb-10 lg:mb-15 xl:mb-30`}>
        <div className={`flex flex-col max-w-7xl mx-auto md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} gap-8`}>
            <Image
                width={312}
                height={312}
                src={imageUrl} 
                alt={title} 
                className="w-full md:w-[312px] rounded-2xl" />
            <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e3d2f] mb-4">{title}</h2>
                <p className="text-[#333] leading-relaxed">{description}</p>
            </div>
        </div>
    </div>
    );
};

export default ItemShowcasingCard;