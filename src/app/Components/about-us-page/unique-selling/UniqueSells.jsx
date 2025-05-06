import { poppins } from "@/app/layout";
import SectionTitle from "../../Landing/section-title/SectionTitle";
import Button from "@/app/Shared/Button/Button";

const UniqueSells = () => {
    return (
        <div className="container relative rounded-xl mx-auto w-full md:h-[360px] h-[540px] bg-cover bg-center lg:h-[460px] xl:h-[804px] mb-10 lg:mb-15 xl:mb-30" 
            style={{backgroundImage:"url('/images/image-(25).png')"}}>
            <div className="w-full md:h-[360px] h-[540px] bg-cover bg-center lg:h-[460px] xl:h-[804px] absolute top-0 left-0 rounded-xl" style={{backgroundImage:"url('/images/image (26).png')"}}>
            <div className="pt-8 lg:pt-16 xl:pt-[204px] pb-8 lg:pb-10 xl:pb-[130px]">
                <div className={`max-w-7xl px-2 lg:px-6 xl:px-0 flex flex-col md:items-center md:flex-row md:gap-10 lg:gap-15 xl:gap-[127px] mx-auto text-white ${poppins.className}`}>
                    <div className="xl:w-[55%] md:w-[70%] mb-6 md:mb-0">
                        <p className="text-[12px] md:text-sm lg:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                        <div className="flex items-center flex-wrap gap-4 pt-2">
                            <div className="w-[46%] md:w-[48%] mb-4 lg:mb-6 xl:mb-[32px]">
                                <h2 className="text-2xl font-bold lg:text-3xl xl:text-[48px]">99%</h2>
                                <p className="text-[12px] md:text-sm lg:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            </div>
                            <div className="w-[46%] md:w-[48%] mb-4 lg:mb-6 xl:mb-[32px]">
                                <h2 className="text-2xl font-bold lg:text-3xl xl:text-[48px]">100%</h2>
                                <p className="text-[12px] md:text-sm lg:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            </div>
                            <div className="w-[46%] md:w-[48%]">
                                <h2 className="text-2xl font-bold lg:text-3xl xl:text-[48px]">99%</h2>
                                <p className="text-[12px] md:text-sm lg:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            </div>
                            <div className="w-[46%] md:w-[48%]">
                                <h2 className="text-2xl font-bold lg:text-3xl xl:text-[48px]">100%</h2>
                                <p className="text-[12px] md:text-sm lg:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-[45%] md:w-[30%]">
                        <SectionTitle className={"!text-white !mx-0 text-left"} title={"Have a Look at Our Unique Selling Proportions"}/>
                        <Button text={"Shop Now"}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UniqueSells;