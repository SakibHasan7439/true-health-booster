"use client"
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import Button from "@/app/Shared/Button/Button";
import SectionTitle from "../../Landing/section-title/SectionTitle";
import PageSectionSubtitle from "../page-section-subtitle/PageSectionSubtitle";

const ArticleSection = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() =>{
        const fetchArticleData = async() =>{
            const res = await fetch('/dummy-json-data/article.json');
            const data = await res.json();
            setArticles(data.articles);
        };

        fetchArticleData();
    }, []);

    return (
        <div className="max-w-7xl mx-auto section-bottom-spacing">
            <div className="text-center pb-5 md:pb-8 lg:pb-14">
                <SectionTitle 
                    className={"max-w-[1280px] mx-auto !pb-6"}
                    title={"Related Article"}/>
                <PageSectionSubtitle className={"mx-auto"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina."}/>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-6 pb-5 lg:pb-10 xl:pb-14">
                {
                    articles.map((article) => <ArticleCard
                     key={article.id}
                    article={article}/>)
                }
            </div>
            <div className="max-w-[178px] mx-auto">
                <Button text={"See All Article"} className={"hidden md:block"}/>
                <button className="bg-[#32BADE] md:hidden text-sm px-3 text-white rounded-2xl py-2">See All Article</button>
            </div>
        </div>
    );
};

export default ArticleSection;