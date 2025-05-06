import Image from "next/image";
import AboutCard from "./AboutCard";

const AboutHero = () => {
    return (
        <div className="container mx-auto my-8 lg:my-15 xl:my-35 bg-[#F8F8F8] rounded-xl py-4 md:py-6 lg:py-8 xl:py-[62px]">
            <div className="max-w-7xl mx-auto flex items-center flex-col md:flex-row gap-5 lg:gap-8 xl:gap-[69px]">
                <Image 
                    width={681}
                    height={682}
                    src={"/images/aboutHero.png"}
                    className="md:w-[50%] h-[250px] object-cover md:h-full xl:w-[681px] xl:h-[682px]"
                    alt="supplement image"    
                />
                <AboutCard />
            </div>
        </div>
    );
};

export default AboutHero;