import React, { useEffect, useState } from 'react';
import News from '../News/News';


const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6aff66dfacdf4af6bb4190f9ea54d647')
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Top Headline : {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }

        </div>
    );
};

export default TopHeadline;