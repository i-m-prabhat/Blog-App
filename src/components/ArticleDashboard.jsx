import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from "../baseUrl.json";
import { Link } from 'react-router-dom';

const ArticleDashboard = () =>
{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>
    {
        let userId = localStorage.getItem('userId');
        axios.get(`${baseUrl.baseurl}/api/articles/user/${userId}`)
            .then(res =>
            {
                setArticles(res.data);
                setLoading(false);
            })
            .catch(err =>
            {
                console.log(err);
                setLoading(false);
            });
    }, [articles]);

    const handleDelete = (articleId) =>
    {
        if (window.confirm("Are You sure want to delete?"))
        {
            let token = localStorage.getItem('token');
            axios.delete(`${baseUrl.baseurl}/api/articles/${articleId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },
            })
                .then(res =>
                {
                    setArticles(prevArticles => prevArticles.filter(article => article.id !== articleId));
                    console.log("Article deleted");
                    window.alert("Article deleted");
                })
                .catch(err =>
                {
                    console.log(err);
                    window.alert("Something is Fishy");
                });
        }
    };

    return (
        <div className="container text-gray-100 mx-auto px-4">
            <span className="text-2xl font-bold mb-4 ">My Articles</span>
            <Link to={"/article"}>
                <span className="text-xl font-bold mb-4 mx-2 md:mt-4 mt-0 w-[150px] bg-blue-600 p-2 border-none hover:bg-blue-800 cursor-pointer rounded-md">Create More</span>
            </Link>
            {loading && <p>Loading...</p>}
            {!loading && articles.length === 0 && <p>No articles found.</p>}
            {!loading && articles.length > 0 && (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                    {articles.map((article, id) => (
                        <li key={id} className="bg-gray-200 text-gray-700 rounded-lg overflow-hidden shadow-md">
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                                <p className="font-bold mb-2"><b>Category: </b>{article.category}</p>
                                {/* <p className="text-gray-700 text-base">{article.content}</p> */}

                            </div>
                            <div className="flex justify-end px-4 py-2">
                                <Link to={`/api/articles/${article._id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                                </Link>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(article._id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ArticleDashboard;
