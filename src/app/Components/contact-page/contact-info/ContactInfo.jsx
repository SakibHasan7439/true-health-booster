"use client"
import ContactCard from "./ContactCard";

const ContactInfo = () => {
    const contact_info = [
        {
            id: 1,
            image: "/images/icon.png",
            title: "Mail us 24/7",
            contact: "sales@truehealthbooster.com"
        },

        {
            id: 2,
            image: "/images/icon (1).png",
            title: "Call us 24/7",
            contact: "Phone : (+55) 654 - 545 - 5418"
        },

        {
            id: 3,
            image: "/images/icon (2).png",
            title: "Our location",
            contact: "4821 Ride Top, Anch St, Alaska 997998, USA main city."
        }
    ];

    return (
        <div className="grid grid-cols-2 mb-10 lg:mb-16 xl:mb-30 md:grid-cols-3 gap-2 lg:gap-4 xl:gap-6">
            {
                contact_info.map((info) => <ContactCard key={info?.id} info={info} />)
            }
        </div>
    );
};

export default ContactInfo;