import React, { useState, useEffect } from 'react';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = '9a673199a3bf4d2490059530b21771a6'; // Replace with your News API key
  const url = `https://newsapi.org/v2/top-headlines?q=weather&apiKey=${apiKey}`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching weather news:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Latest Weather News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-sm">{article.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
