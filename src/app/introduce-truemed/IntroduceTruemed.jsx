import SectionSubtitle from "../Components/Landing/section-subtitle/SectionSubtitle";
import SectionTitle from "../Components/Landing/section-title/SectionTitle";
import Button from "../Shared/Button/Button";

const IntroduceTruemed = () => {
    return (
        <div className="bg-[#F8F8F8] px-2 pt-16 md:pt-18 pb-17 mb-15 md:mb-30">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title={"Here We Introduce Truemed"}/>
                <SectionSubtitle 
                    subtitle={"Boost your health naturally every day with our premium supplement, designed to support energy, immunity, and overall wellness using only high-quality ingredients."}
                />

                <iframe src="https://www.youtube.com/embed/r8YUIZGQ6ZU?si=E1AApxdYhqx_duwr" className="h-[400px] md:h-[540px] rounded-4xl w-full mx-auto lg:w-full mb-14" title="YouTube video player" frameBorder="0"></iframe>
                <div className="flex justify-center">
                    <Button text={"Learn More About Truemed"}/>
                </div>
            </div>
        </div>
    );
};

export default IntroduceTruemed;