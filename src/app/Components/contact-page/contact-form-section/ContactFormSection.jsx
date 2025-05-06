import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactFormSection = () => {
    return (
        <div className="flex items-center mb-6 lg:mb-15 xl:mb-30 border rounded-xl flex-col md:flex-row gap-3 lg:gap-4 xl:gap-[30px]">
            <div className="md:w-[40%] w-full">
                <Image 
                    width={583}
                    height={788}
                    src={"/images/image (23).png"}
                    className="h-[200px] md:h-[300px] object-cover rounded-xl lg:h-[500px] xl:h-[788px]"
                    alt="form image"
                />
            </div>
            <div className="md:w-[60%] w-full">
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactFormSection;