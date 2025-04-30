import SectionTitle from "../Components/Landing/section-title/SectionTitle";
import { poppins } from "../layout";
import ReviewCard from "./ReviewCard";

const reviews = [
    {
        id: 1,
        name: "Safia Tazrin Rati",
        address: "United State",
        description: "We absolutely love the pet stick! It’s durable, safe, and our dog can't get enough of it. Whether it’s playtime or training, it has become an essential part of our routine. We highly recommend it to any pet owner looking for a high-quality, long-lasting toy for their furry friend!",
        image: "https://i.ibb.co.com/j9KhG75v/image-3.png",
    },

    {
        id: 2,
        name: "Safia Tazrin Rati",
        address: "United State",
        description: "We absolutely love the pet stick! It’s durable, safe, and our dog can't get enough of it. Whether it’s playtime or training, it has become an essential part of our routine. We highly recommend it to any pet owner looking for a high-quality, long-lasting toy for their furry friend!",
        image: "https://i.ibb.co.com/j9KhG75v/image-3.png",
    },

    {
        id: 3,
        name: "Safia Tazrin Rati",
        address: "United State",
        description: "We absolutely love the pet stick! It’s durable, safe, and our dog can't get enough of it. Whether it’s playtime or training, it has become an essential part of our routine. We highly recommend it to any pet owner looking for a high-quality, long-lasting toy for their furry friend!",
        image: "https://i.ibb.co.com/j9KhG75v/image-3.png",
    },
];
const CustomerReview = () => {
    return (
        <div className={`max-w-7xl mx-auto pb-15 md:pb-30 px-2 md:px-4 ${poppins.className}`}>
            <SectionTitle title={"Satisfy Customer's Review"} />
            <div className="grid grid-cols-1 pt-4 md:grid-cols-3 gap-6">
                {
                    reviews.map((review) => <ReviewCard 
                        key={review.id} review={review} 
                    />)
                }
            </div>
        </div>
    );
};

export default CustomerReview;