import Image from "next/image";

const ReviewCard = ({review}) => {
    return (
        <div className="p-4 relative rounded-2xl shadow-md bg-white">
            <Image 
                src={"/images/colon.png"}
                alt="customer rating"
                width={30}
                height={40}
                className="mb-4 absolute -top-[2px] right-0"
            />
            <Image 
                src={"https://i.ibb.co.com/67MPHgNg/star.png"}
                alt="customer rating"
                width={100}
                height={50}
                className="mb-4 mx-auto"
            />
            <p className="text-center font-semibold mb-4">
                {review.description}
            </p>
            <Image 
                src={review.image}
                alt="customer image"
                width={70}
                height={70}
                className="mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-center">{review?.name}</h3>
            <p className="text-center">{review.address}</p>
        </div>
    );
};

export default ReviewCard;