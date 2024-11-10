import React, { useEffect, useState } from 'react'
import NewItem from './NewItem'
import axios from 'axios'
const NewsBoard = ({ category, country }) => {
    const [articales, setArticales] = useState([])
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
                
                const response = await axios.get(url);

                if (response.data.articles.length > 0) {
                    setArticales(response.data.articles);
                    setErrorMessage(''); 
                } else {
                    setArticales([]);
                    setErrorMessage('News is not available in this country');
                }
            } catch (error) {
                console.error("Error fetching news:", error);
                setArticales([]);
                setErrorMessage('Failed to load news. Please try again later.');
            }
        };

        fetchArticles();
    }, [category, country]);

    return (
        <>
            <h2 className='text-center mt-3'>Latest <span className='badge bg-danger'>News</span></h2>
            {errorMessage && <p className='text-center fs-2 bg-danger text-white text-bold'>{errorMessage}</p>}
            {
                articales.map((news, index) => {
                    return <NewItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                })
            }
        </>
    )
}

export default NewsBoard