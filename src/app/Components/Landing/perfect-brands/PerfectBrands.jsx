import Brands from "../brands/Brands";
import BrandTitle from "../brand-title/BrandTitle";

const PerfectBrands = () => {
    return (
        <div className="pb-8 px-2 lg:px-0 md:pb-16 lg:pb-30">
            <BrandTitle className={"perfect-brand"} title={"Perfect Brand Is Featured On"}/>
            <Brands />
        </div>
    );
};

export default PerfectBrands;