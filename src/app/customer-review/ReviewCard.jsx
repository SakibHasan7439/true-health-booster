import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ReviewCard = ({ review }) => {
  return (
    <div className="p-4 md:p-6 relative rounded-2xl shadow-md bg-white">
      <Image
        src={"/images/colon.png"}
        alt="customer rating"
        width={32}
        height={24}
        className="mb-4 absolute -top-[2px] right-0"
      />
      <Image
        src={"https://i.ibb.co.com/67MPHgNg/star.png"}
        alt="customer rating"
        width={108}
        height={50}
        className="mb-3 mx-auto"
      />
      <p
        className="text-center tooltip text-primary-color md:text-[16px] lg:text-[18px] font-medium mb-5"
        data-tip={review.description}
      >
        <div>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                <p className="cursor-pointer">
                    {review.description.slice(0, 100)}...
                </p>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                <p>{review.description}</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
        </div>
      </p>
      <Image
        src={review.image}
        alt="customer image"
        width={60}
        height={60}
        className="mb-3 mx-auto"
      />
      <h3 className="text-lg xl:text-xl font-semibold pb-1 text-center">{review?.name}</h3>
      <p className="text-center">{review.address}</p>
    </div>
  );
};

export default ReviewCard;
