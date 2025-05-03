import Image from "next/image";

const ArticleCard = ({article}) => {
    return (
        <div className="border rounded-2xl p-2 md:p-4 xl:p-5">
            <Image
                width={384}
                height={320}
                src={article?.image}
                alt="article image"
                className="w-full xl:h-[320px] h-[150px] md:h-[200px] lg:h-[260px] object-cover mb-2 md:mb-4 xl:mb-6 rounded-md"
            />
            <div>
                <ul className=" pb-2 md:pb-4 xl:pb-5 flex items-center gap-2">
                    <li className="flex items-center gap-2">
                        <p className="lg:w-4 w-[7px] h-[7px] lg:h-4 rounded-full bg-[#32BADE]"></p>
                        <p className="text-[10px] md:text-[12px] lg:text-[16px]">{article?.name}</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <p className="md:w-[6px] md:h-[6px] rounded-full bg-[#5D5D5D]"></p>
                        <p className="text-[10px] md:text-[12px] lg:text-[16px]">{article?.date}</p>
                    </li>
                </ul>
                <h3 className="text-[10px] cut-text md:text-[12px] lg:text-lg font-semibold lg:leading-7">{article?.title}</h3>
            </div>
        </div>
    );
};

export default ArticleCard;