import React, { useState } from 'react';

const ArticleForm = ({ onSubmit }) =>
{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const article = {
            title,
            content,
            categories,
            tags,
        };
        onSubmit(article);
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-5 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-5">Create an article</h2>
            <div className="mb-5">
                <label htmlFor="title" className="block mb-2 font-bold text-gray-700">Title</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 border-gray-300 p-2 w-full rounded-md" />
            </div>

            <div className="mb-5">
                <label htmlFor="content" className="block mb-2 font-bold text-gray-700">Content</label>
                <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} className="border-2 border-gray-300 p-2 w-full rounded-md"></textarea>
            </div>
            <div className="mb-5">
                <label htmlFor="categories" className="block mb-2 font-bold text-gray-700">Categories</label>
                <input type="text" id="categories" value={categories.join(', ')} onChange={(e) => setCategories(e.target.value.split(',').map((category) => category.trim()))} className="border-2 border-gray-300 p-2 w-full rounded-md" />
            </div>
            <div className="mb-5">
                <label htmlFor="tags" className="block mb-2 font-bold text-gray-700">Tags</label>
                <input type="text" id="tags" value={tags.join(', ')} onChange={(e) => setTags(e.target.value.split(',').map((tag) => tag.trim()))} className="border-2 border-gray-300 p-2 w-full rounded-md" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Create Article</button>
        </form>
    );
}

export default ArticleForm;
