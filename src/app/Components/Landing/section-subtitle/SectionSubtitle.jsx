
const SectionSubtitle = ({subtitle, className}) => {
    return (
        <p className={`text-sm text-secondary-color md:text-[18px] leading-7 max-w-[860px] text-center pb-8 lg:pb-14 mx-auto ${className}`}>{subtitle}</p>
    );
};

export default SectionSubtitle;