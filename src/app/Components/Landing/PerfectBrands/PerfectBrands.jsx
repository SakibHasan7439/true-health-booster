import Brands from "../Brands/Brands";
import BrandTitle from "../BrandTitle/BrandTitle";

const PerfectBrands = () => {
    return (
        <div className="mb-8 md:mb-16">
            <BrandTitle title={"Perfect Brand Is Featured On"}/>
            <Brands />
        </div>
    );
};

export default PerfectBrands;