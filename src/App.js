import React, { useState, useEffect } from "react";
import "./output.css";
function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fatchData() {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=keyword&apiKey=e2de2009782a4169a0b552c792ab741f"
        );
        const articlesData = await response.json();
        if (articlesData.articles && articlesData.articles.length > 0) {
          setArticles(articlesData.articles);
        }
      } catch (error) {
        console.error("Error while fetching articles: " + error);
      }
    }
    fatchData();
  }, []);
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {articles.map((article) => (
          <div
            key={article.url}
            className="flex flex-col  w-96 p-4 m-5 bg-white  items-center rounded-2xl justify-start"
          >
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-96 h-44 rounded-2xl m-2"
            />
            <h2 className=" mb-1 font-bold from-neutral-900 font-sans text-black">
              {article.title}
            </h2>
            <p className="text-black  text-base leading-5">
              {article.description}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold  p-2 rounded-xl px-3 mt-4 inline-block self-start bg-gradient-to-r from-yellow-400 via-pink-400 to-black"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
