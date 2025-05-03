"use client"
import { useState } from "react";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";
import Button from "../../../Shared/Button/Button";
import { Modal } from "antd";
import Image from "next/image";

const IntroduceTruemed = ({sectionContainer, buttonContainer, className}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    return (
        <div className={`bg-[#F8F8F8] ${sectionContainer} px-2 pt-10 md:pt-12 lg:pb-17 pb-10 md:mb-6 lg:mb-14 xl:mb-30`}>
            <div className="max-w-7xl mx-auto">
                <SectionTitle className={className} title={"Here We Introduce Truemed"}/>
                <SectionSubtitle 
                    subtitle={"Boost your health naturally every day with our premium supplement, designed to support energy, immunity, and overall wellness using only high-quality ingredients."}
                />

                  <div type="primary" className="relative mb-12 cursor-pointer" onClick={showModal}>
                        <Image 
                            src={"/images/supplyment.png"}
                            width={700}
                            height={540}
                            className="w-full object-cover rounded-2xl h-[250px] xl:h-[540px]"
                            alt="supplyment image"/>
                        
                        <Image 
                            src={"/images/image (7).png"}
                            width={700}
                            height={540}
                            className="w-full object-cover rounded-2xl h-[250px] xl:h-[540px] absolute top-0"
                            alt="supplyment image"/>
                        
                        <Image
                            src={"/images/play.png"}
                            width={50}
                            height={50}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            alt="play button"
                        />
                    </div>
                    
                <Modal
                open={isModalOpen}
                footer={null}
                onCancel={() => setIsModalOpen(false)}
                centered
                width={800}
            >
                <div className="w-full aspect-video">
                    <iframe width="100%"
                        height="100%" src="https://www.youtube.com/embed/r8YUIZGQ6ZU?si=E1AApxdYhqx_duwr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </Modal>
                <div className={`flex justify-center ${buttonContainer}`}>
                    <Button text={"Learn More About Truemed"}/>
                </div>
            </div>
        </div>
    );
};

export default IntroduceTruemed;