import React from 'react';

const ArticleView = ({ article }) =>
{
    return (
        <div className="container mx-auto my-10">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold mb-5">{article.title}</h1>
                <p className="text-gray-500 text-sm mb-5">{article.categories.join(', ')}</p>
                <div className="mb-10" dangerouslySetInnerHTML={{ __html: article.content }}></div>
                <h2 className="text-2xl font-bold mb-5">Comments</h2>
                <ul>
                    {article.comments.map((comment) => (
                        <li key={comment.id} className="mb-5">
                            <p className="text-gray-500 text-sm">{comment.author} on {comment.date}</p>
                            <p className="mb-2">{comment.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ArticleView;
