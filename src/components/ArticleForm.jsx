import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import baseUrl from "../baseUrl.json"


const ArticleForm = () =>
{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategories] = useState('');
    const [tags, setTags] = useState([]);
    const redirect = useNavigate();

    const article = () =>
    {
        let token = localStorage.getItem('token');
        console.log(token);
        axios.post(`${baseUrl.baseurl}/api/articles`, {
            title,
            content,
            category,
            tags,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
        }).then((response) =>
        {
            console.log(response.data.message)
            // redirect("/");
        }).catch((error) =>
        {
            console.error(error.response.data.message);
            console.error(error);
        })
    }
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        article();
    }

    return (
        <form className="bg-white p-5 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-5">Create an article</h2>
            <div className="mb-5">
                <label htmlFor="title" className="block mb-2 font-bold text-gray-700">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-2 border-gray-300 p-2 w-full rounded-md" />
            </div>
            {/* {title} */}
            <div className="mb-5">
                <label htmlFor="content" className="block mb-2 font-bold text-gray-700">Content</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="border-2 border-gray-300 p-2 w-full rounded-md"></textarea>
            </div>
            {/* {content} */}
            <div className="mb-5">
                <label htmlFor="categories" className="block mb-2 font-bold text-gray-700">Categories</label>
                <input
                    type="text"
                    id="categories"
                    name='category'
                    onChange={(e) => setCategories(e.target.value)} className="border-2 border-gray-300 p-2 w-full rounded-md" />
            </div>
            {/* {categories} */}
            <div className="mb-5">
                <label htmlFor="tags" className="block mb-2 font-bold text-gray-700">Tags</label>
                <input
                    type="text"
                    id="tags"
                    value={tags.join(', ')}
                    onChange={(e) => setTags(e.target.value.split(',').map((tag) => tag.trim()))}
                    className="border-2 border-gray-300 p-2 w-full rounded-md" />
            </div>
            {/* {tags} */}
            <button
                type="submit"
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Create Article</button>
        </form>
    );
}

export default ArticleForm;
