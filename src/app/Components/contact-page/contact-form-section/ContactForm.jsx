
import Button from "@/app/Shared/Button/Button";
import SectionTitle from "../../Landing/section-title/SectionTitle";
import Input from "./Input";
import { Mail } from "lucide-react";
import { poppins } from "@/app/layout";

const ContactForm = () => {
    return (
        <div className="px-2">
            <SectionTitle className={"xl:!pb-[50px] lg:max-w-[350px] !mx-0 text-left"} title={"Have any Questions? Get in touch!"}/>
            <form className="md:mr-2 lg:mr-4 xl:mr-[29px]">
                <div className="flex flex-wrap gap-2 mb-2 lg:mb-4 xl:mb-[22px] md:gap-3 lg:gap-4 xl:gap-[24px]">
                    <Input type={"name"} placeholder={"Enter name"}/>
                    <Input type={"number"} placeholder={"Phone number"} />
                    <Input type={"email"} placeholder={"Enter email"} />
                    <Input type={"text"} placeholder={"Subject"} />
                </div>
                    <textarea 
                        name="" 
                        className="p-4 w-full mb-4 lg:mb-7 xl:mb-10 xl:p-6 xl:h-[128px] rounded-md border" id=""> 
                    </textarea>
                    <button className={`${poppins.className} bg-[#32BADE] cursor-pointer hover:bg-[#29aacd] xl:h-[52px] px-8 py-3 rounded-2xl text-white flex items-center gap-2 text-[12px] lg:text-[16px]`}>
                        <Mail />
                        <p>Send Message</p>
                    </button>
            </form>

        </div>
    );
};

export default ContactForm;