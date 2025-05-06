import Image from "next/image";

const ContactCard = ({ info }) => {
  return (
    <>
       <div
          className="relative bg-gray-100 rounded-[20px] px-5 py-6 lg:px-9 lg:py-11 w-full group overflow-hidden"
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
            <h3 className="text-lg lg:text-2xl font-semibold">{info?.title}</h3>
          </div>
          <p className="text-sm lg:text-lg border-t pt-4 lg:pt-6 xl:pt-3">{info?.contact}</p>
          <div className="absolute -bottom-1 -right-1 rounded-lg w-8 h-10 bg-white transition-transform duration-300 clip-custom-corner" />
      </div>
    </>
  );
};

export default ContactCard;
