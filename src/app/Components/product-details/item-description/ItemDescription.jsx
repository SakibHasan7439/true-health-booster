import { poppins } from "@/app/layout";
import SectionTitle from "../../Landing/section-title/SectionTitle";

const ItemDescription = ({className, title, titleClass}) => {
    return (
        <div className={`text-[12px] text-primary-color ${poppins.className} md:text-sm xl:text-[20px] 
            ${className} ${poppins.className}`}>
            <SectionTitle className={`hidden ${titleClass}`} title={title}/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.
            </p>
        </div>
    );
};

export default ItemDescription;