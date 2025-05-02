import { poppins } from "@/app/layout";

const SectionTitle = ({title, className}) => {
    return (
        <h1 className={`text-[22px] lg:text-3xl xl:text-5xl text-primary-color lg:leading-14 max-w-[800px] mx-auto font-bold text-center pb-6 lg:pb-10 ${poppins.className} ${className}`}>{title}</h1>
    );
};

export default SectionTitle;