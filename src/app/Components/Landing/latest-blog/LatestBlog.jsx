import React from 'react';
import SectionTitle from '../section-title/SectionTitle';
import SectionSubtitle from '../section-subtitle/SectionSubtitle';
import BlogCard from './BlogCard';
import Button from '@/app/Shared/Button/Button';
import Link from 'next/link';

const blogs = [
    {
        id: 1,
        image: "https://i.ibb.co.com/Z6360RXC/image-4.png",
        title: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
        description: "At Truemed Pharma, we prioritize your well-being by crafting customized and .....",
        postDate: "October 17, 2024",
        duration: "9 min read"
    },

    {
        id: 2,
        image: "https://i.ibb.co.com/HfFW4jD9/image-5.png",
        title: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
        description: "At Truemed Pharma, we prioritize your well-being by crafting customized and .....",
        postDate: "October 17, 2024",
        duration: "9 min read"
    },
    {
        id: 3,
        image: "https://i.ibb.co.com/PvpRP1rQ/image-6.png",
        title: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
        description: "At Truemed Pharma, we prioritize your well-being by crafting customized and .....",
        postDate: "October 17, 2024",
        duration: "9 min read"
    },
]
const LatestBlog = () => {
    return (
        <div className='max-w-7xl mx-auto px-2 pb-10 lg:pb-20 xl:pb-30'>
            <div>
                <SectionTitle title={"Latest Blog Post"}/>
                <SectionSubtitle subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina."}/>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-6 pb-14">
                {
                    blogs.map((blog) =><BlogCard key={blog.id} blog={blog}/>)
                }
            </div>
            <div className="flex justify-center">
                <Link href={"/blog-page"}>
                    <Button 
                        className={"rounded-full px-6 h-[20px]"}
                        text={"View All Blogs"}/>
                </Link>
            </div>
        </div>
    );
};

export default LatestBlog;