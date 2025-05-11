"use client"
import SectionTitle from "../section-title/SectionTitle";
import { poppins } from "../../../layout";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

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

    {
        id: 4,
        name: "Safia Tazrin Rati",
        address: "United State",
        description: "We absolutely love the pet stick! It’s durable, safe, and our dog can't get enough of it. Whether it’s playtime or training, it has become an essential part of our routine. We highly recommend it to any pet owner looking for a high-quality, long-lasting toy for their furry friend!",
        image: "https://i.ibb.co.com/j9KhG75v/image-3.png",
    },

    {
        id: 5,
        name: "Safia Tazrin Rati",
        address: "United State",
        description: "We absolutely love the pet stick! It’s durable, safe, and our dog can't get enough of it. Whether it’s playtime or training, it has become an essential part of our routine. We highly recommend it to any pet owner looking for a high-quality, long-lasting toy for their furry friend!",
        image: "https://i.ibb.co.com/j9KhG75v/image-3.png",
    },
];
const CustomerReview = () => {
    return (
        <div className={`max-w-7xl mx-auto pb-10 lg:pb-20 xl:pb-30 px-2 md:px-4 ${poppins.className}`}>
            <SectionTitle title={"Satisfy Customer's Review"} />
            <div>
                <Swiper
                    className="swiper-overflow-y-visible !px-2"
                      modules={[Pagination]}
                    //   spaceBetween={20}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                         
                        },
                        768: {
                          slidesPerView: 2,
                           spaceBetween: 16
                          
                        }, 
                        1024: {
                          slidesPerView: 3,
                           spaceBetween: 24
                        }
                      }}
                    >
                    {
                        reviews.map((review) => <SwiperSlide className="" 
                            key={review.id}>
                            <ReviewCard 
                            review={review} />
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default CustomerReview;