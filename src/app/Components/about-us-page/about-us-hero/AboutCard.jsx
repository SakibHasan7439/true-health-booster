import Image from "next/image";
import PageSectionSubtitle from "../../product-details/page-section-subtitle/PageSectionSubtitle";
import { poppins } from "@/app/layout";
import OurFacilities from "./OurFacilities";

const AboutCard = () => {
    return (
        <div className="md:w-[50%] lg:max-w-[552px]">
            <Image 
                width={520}
                height={250}
                src={"/images/image (24).png"}
                className="mb-5 lg:mb-8 xl:mb-[54px]"
                alt="supplement image"
            />
            <h2 className={`text-lg md:tex-xl lg:text-2xl font-bold mb-2 md:mb-4 xl:mb-[24px] xl:text-[32px] ${poppins.className}`}>We're committed to caring</h2>
            <PageSectionSubtitle className={"!text-sm"} subtitle={"Each serving delivers 1200 mg of activated charcoal to support digestive health by absorbing toxins, gas, and bloating"} />
            <div className="flex items-center flex-wrap mt-5 lg:mt-8 xl:mt-12">
                <OurFacilities facility={"Gourmet Mushrooms"}/>
                <OurFacilities facility={"Best Quality Standard"}/>
                <OurFacilities facility={"Natural Healthy Products"}/>
                <OurFacilities facility={"Fertilizer Distribution"}/>
                <OurFacilities facility={"Lavender Farming"}/>
                <OurFacilities facility={"Organic Fertilizer"}/>
            </div>
        </div>
    );
};

export default AboutCard;