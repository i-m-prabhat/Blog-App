import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from "../baseUrl.json";

const ArticleDashboard = () =>
{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    let currentUser = localStorage.getItem('currentUser');

    const userId = "64420f674b149b04636d683e";
    const articleId = "6442a05ea3a31d1ad08a29da";
    useEffect(() =>
    {
        axios.get(`${baseUrl.baseurl}/api/articles?userId=${currentUser}`)
            .then(res =>
            {
                setArticles(res.data);
                setLoading(false);
                console.log(`${baseUrl.baseurl} / api / articles ? userId = ${currentUser}`)
            })
            .catch(err =>
            {
                console.log(err);
                setLoading(false);
            });
    }, [currentUser.userId]);
    const article = articles.find(article => article._id === articleId);

    if (article && article.author._id === userId)
    {
        console.log("The user has created this article");
    } else
    {
        console.log("The user has not created this article");
    }
    const handleDelete = (articleId) =>
    {
        axios.delete(`/api/articles/${articleId}`)
            .then(res =>
            {
                setArticles(prevArticles => prevArticles.filter(article => article.id !== articleId));
            })
            .catch(err =>
            {
                console.log(err);
            });
    };

    return (
        <div className="container text-gray-100 mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">My Articles</h1>
            {loading && <p>Loading...</p>}
            {!loading && articles.length === 0 && <p>No articles found.</p>}
            {!loading && articles.length > 0 && (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {articles.map(article => (
                        <li key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                                <p className="text-gray-700 text-base">{article.content}</p>
                            </div>
                            <div className="flex justify-end px-4 py-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(article.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ArticleDashboard;
