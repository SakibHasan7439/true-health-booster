import SectionSubtitle from "../Components/Landing/SectionSubtitle/SectionSubtitle";
import SectionTitle from "../Components/Landing/SectionTitle/SectionTitle";
import Button from "../Shared/Button/Button";

const IntroduceTruemed = () => {
    return (
        <div className="bg-[#F8F8F8] px-2 pt-16 md:pt-18 md:pb-30">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title={"Here We Introduce Truemed"}/>
                <SectionSubtitle 
                    subtitle={"Boost your health naturally every day with our premium supplement, designed to support energy, immunity, and overall wellness using only high-quality ingredients."}
                />

                <iframe src="https://www.youtube.com/embed/r8YUIZGQ6ZU?si=E1AApxdYhqx_duwr" className="mt-12 h-[315px] rounded-2xl w-full mx-auto lg:w-full mb-6 md:mb-10" title="YouTube video player" frameBorder="0"></iframe>
                <div className="flex justify-center">
                    <Button text={"Learn More About Truemed"}/>
                </div>
            </div>
        </div>
    );
};

export default IntroduceTruemed;