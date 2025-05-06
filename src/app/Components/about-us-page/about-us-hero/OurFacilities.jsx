import { Check } from "lucide-react";

const OurFacilities = ({facility}) => {
    return (
        <div className="flex items-center w-[47%] gap-2 mb-2 xl:mb-4">
            <div className="p-1 text-white bg-[#32BADE] rounded-full"><Check size={14}/></div>
            <p className="font-medium text-[12px] lg:text-[16px]">{facility}</p>
        </div>
    );
};

export default OurFacilities;