import { poppins } from "@/app/layout";

const PageSectionSubtitle = ({subtitle, className}) => {
    return (
        <p className={`text-sm text-[#11B091] md:text-[16px] max-w-[650px] lg:leading-6 ${className} ${poppins.className}`}>
            {subtitle}
        </p>
    );
};

export default PageSectionSubtitle;