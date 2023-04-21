import React from 'react';

const ArticleCard = ({ article }) =>
{
    return (
        <div className="border border-gray-300 rounded-md p-5">
            <h2 className="text-2xl font-bold mb-3">{article.title}</h2>
            <p className="text-gray-700 mb-3">{article.content}</p>
            <div className="flex flex-wrap">
                {article.categories.map((category) => (
                    <span key={category} className="bg-gray-200 text-gray-700 font-bold px-2 py-1 rounded-full mr-2 mb-2">{category}</span>
                ))}
            </div>
            <div className="flex flex-wrap">
                {article.tags.map((tag) => (
                    <span key={tag} className="bg-gray-200 text-gray-700 font-bold px-2 py-1 rounded-full mr-2 mb-2">{tag}</span>
                ))}
            </div>
        </div>
    );
}

export default ArticleCard;
