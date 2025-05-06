
const PolicyDetails = ({rules}) => {
    return (
        <div className="px-2 xl:px-0">
            <p className="text-sm lg:text-[20px] font-semibold mb-3 lg:mb-[18px]">{rules?.commitment}</p>
            <p className="text-[12px] md:text-sm mb-4 lg:mb-[20px] lg:text-lg xl:text-[20px] font-medium">{rules?.policy}</p>
            <p className="text-[12px] md:text-sm mb-4 lg:mb-[26px] lg:text-lg xl:text-[20px] font-medium">{rules?.message}</p>
            {
                rules.sections.map((section, index) => <div key={index}>
                    <h1 className="text-xl font-bold md:text-2xl xl:text-[40px] mb-2 xl:mb-[10px]">{section?.title}</h1>
                    <p className="text-[12px] md:text-sm mb-4 lg:mb-[26px] lg:text-lg xl:text-[20px] font-medium">{section?.contentOne}</p>
                    <p className="text-[12px] md:text-sm mb-4 lg:mb-[26px] lg:text-lg xl:text-[20px] font-medium">{section?.contentTwo}</p>
                    <p className="text-[12px] md:text-sm mb-4 lg:mb-[26px] lg:text-lg xl:text-[20px] font-medium">{section?.contentThree}</p>
                </div>)
            }
            
        </div>
    );
};

export default PolicyDetails;