import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import BlogCard from './BlogCard';
import Button from '@/app/Shared/Button/Button';

const blogs = [
    {
        id: 1,
        image: "https://i.ibb.co.com/Z6360RXC/image-4.png",
        blogTitle: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
        blogSubtitle: "At Truemed Pharma, we prioritize your well-being by crafting customized and .....",
        postDate: "October 17, 2024",
        duration: "9 min read"
    },

    {
        id: 2,
        image: "https://i.ibb.co.com/HfFW4jD9/image-5.png",
        blogTitle: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
        blogSubtitle: "At Truemed Pharma, we prioritize your well-being by crafting customized and .....",
        postDate: "October 17, 2024",
        duration: "9 min read"
    },
    {
        id: 3,
        image: "https://i.ibb.co.com/PvpRP1rQ/image-6.png",
        blogTitle: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
        blogSubtitle: "At Truemed Pharma, we prioritize your well-being by crafting customized and .....",
        postDate: "October 17, 2024",
        duration: "9 min read"
    },
]
const LatestBlog = () => {
    return (
        <div className='max-w-7xl mx-auto mt-10 px-2 mb-8 md:mb-16'>
            <div className='mb-6'>
                <SectionTitle title={"Latest Blog Post"}/>
                <SectionSubtitle subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina."}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {
                    blogs.map((blog) =><BlogCard key={blog.id} blog={blog}/>)
                }
            </div>
            <div className="flex justify-center">
                <Button text={"View All Blogs"}/>
            </div>
        </div>
    );
};

export default LatestBlog;