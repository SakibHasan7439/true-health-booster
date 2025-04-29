import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import SectionTitle from "../SectionTitle/SectionTitle";
import CertifiedBy from "./CertifiedBy";

const WhyTruemed = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10">
            <SectionTitle title={"Why You Choose Truemed"} />
            <SectionSubtitle subtitle={"From field to finished product, we prioritize quality at every step."}/>
            <div className="grid grid-cols-2 pt-6 place-items-center md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                <CertifiedBy 
                    image={"/images/ul 1.png"}
                    company={"UL Certified"}/>
                <CertifiedBy 
                    image={"/images/gmp 1.png"}
                    company={"GPM Certified"}/>
                <CertifiedBy 
                    image={"/images/1690708304 1.png"}
                    company={"GMP Certified"}/>
                <CertifiedBy 
                    image={"/images/vf 1.png"}
                    company={"Vegan Friendly"}/>
                <CertifiedBy 
                    image={"/images/gf 1.png"}
                    company={"Gluten Free"}/>
                <CertifiedBy 
                    image={"/images/npa 1.png"}
                    company={"NPA Certified"}/>
            </div>
        </div>
    );
};

export default WhyTruemed;