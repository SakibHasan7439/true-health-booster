import Brands from "../brands/Brands";
import BrandTitle from "../brand-title/BrandTitle";

const PerfectBrands = () => {
    return (
        <div className="pb-8 px-2 xl:px-0 md:pb-12 lg:pb-20 xl:pb-30">
            <BrandTitle className={"perfect-brand"} title={"Perfect Brand Is Featured On"}/>
            <Brands />
        </div>
    );
};

export default PerfectBrands;