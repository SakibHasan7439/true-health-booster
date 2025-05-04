import useFetch from "@/hooks/useFetch";
import BlogCard from "../../Landing/latest-blog/BlogCard";

const SuggestPost = () => {
    const {data, error, loading} = useFetch("/dummy-json-data/suggestPost.json");
    console.log(data);
    return (
        <div className="grid grid-cols-2 mb-10 lg:mb-16 xl:mb-[140px] md:grid-cols-3 gap-2 lg:gap-4 xl:gap-6">
            {
                data.map((post) => <BlogCard key={post?.id} blog={post} />)
            }
        </div>
    );
};

export default SuggestPost;