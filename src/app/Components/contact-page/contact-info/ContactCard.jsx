import { ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const ContactCard = ({ info }) => {
  return (
    <>
      <div
  className="relative bg-[url(/images/carveCard.png)] bg-cover bg-center rounded-[20px] px-5 py-6 xl:px-9 xl:py-11 w-full overflow-hidden"
>
  <div className="flex items-center gap-3 mb-4">
    <div className="bg-cyan-500 p-2 text-white rounded-full w-10 lg:w-15 lg:h-15 xl:h-20 xl:w-20 mb-3 lg:mb-4 h-10 flex items-center justify-center text-xl">
      <Image 
        src={info?.image}
        width={45}
        height={45}
        alt="contact icon"
      />
    </div>
    <h3 className="text-lg lg:text-2xl font-medium text-primary-color">{info?.title}</h3>
  </div>

  <p className="text-[12px] md:text-sm lg:text-lg border-t pt-4 lg:pt-6 xl:pt-3">{info?.contact}</p>

    <div style={{border: "10px solid white"}} className="absolute w-8 h-8 lg:w-11 lg:h-11 xl:w-17 xl:h-17 rounded-full -bottom-2 hover:bg-[#32BADE] hover:text-white flex items-center cursor-pointer justify-center -right-2">
      <ArrowUpRight/>
    </div>
      </div>
      
    </>
  );
};

export default ContactCard;
