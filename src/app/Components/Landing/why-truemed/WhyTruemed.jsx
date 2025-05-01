import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";
import CertifiedBy from "./CertifiedBy";

const WhyTruemed = () => {
    return (
        <div className="max-w-7xl mx-auto pb-10 lg:pb-20 xl:pb-30">
            <SectionTitle title={"Why You Choose Truemed"} />
            <SectionSubtitle subtitle={"From field to finished product, we prioritize quality at every step."}/>
            <div className="grid grid-cols-2 pt-6 place-items-center md:grid-cols-3 lg:grid-cols-6 gap-4">
                <CertifiedBy
                    className={'xl:w-[110px] xl:h-[156px] w-[90px] h-[146px]'}
                    image={"/images/ul 1.png"}
                    company={"UL Certified"}/>
                <CertifiedBy 
                    className={'xl:w-[138px] xl:h-[166px] w-[108px] h-[146px]'}
                    image={"/images/gmp 1.png"}
                    company={"GPM Certified"}/>
                <CertifiedBy
                    className={'xl:w-[133px] xl:h-[166px] w-[108px] h-[146px]'} 
                    image={"/images/1690708304 1.png"}
                    company={"GMP Certified"}/>
                <CertifiedBy 
                    className={'w-[133px] md:w-[98px] lg:w-[108px] xl:h-[165px] h-[146px]'}
                    image={"/images/vf 1.png"}
                    company={"Vegan Friendly"}/>
                <CertifiedBy 
                    className={'xl:w-[118px] xl:h-[166px] w-[108px] h-[146px]'}
                    image={"/images/gf 1.png"}
                    company={"Gluten Free"}/>
                <CertifiedBy 
                    className={'xl:w-[133px] xl:h-[166px] w-[108px] h-[146px]'}
                    image={"/images/npa 1.png"}
                    company={"NPA Certified"}/>
            </div>
        </div>
    );
};

export default WhyTruemed;