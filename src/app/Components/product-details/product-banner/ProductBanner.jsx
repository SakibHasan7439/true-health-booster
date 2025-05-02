import Image from "next/image";
import SectionTitle from "../../Landing/section-title/SectionTitle";
import ItemDescription from "../item-description/ItemDescription";

const ProductBanner = () => {
    return (
        <div className="section-bottom-spacing">
            <Image 
                width={1200}
                height={455}
                src={"/images/image (14).png"}    
                alt="product banner image"
                className="h-[200px] lg:h-[300px] xl:h-[455px] w-full object-cover"
            />
            <div className="bg-[#F8F8F8] py-4 md:py-6 xl:py-10">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title={"About This Item"} className={"!pb-4 !lg:pb-6"}/>
                    <ItemDescription className={"max-w-[1133px] text-center mx-auto"}/>
                </div>
            </div>
        </div>
    );
};

export default ProductBanner;