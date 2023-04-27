import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'
import baseUrl from "../baseUrl.json"


const EditArticle = () =>
{
    const value = { title: '', content: '', category: '', tags: '' };
    const [data, setData] = useState(value);
    const { title, content, category, tags } = data;
    const { id } = useParams();

    const redirect = useNavigate();

    useEffect(() =>
    {
        axios.get(`${baseUrl.baseurl}/api/articles/one/${id}`).then((res) =>
        {
            setData(res.data);
        });
    }, []);

    const onValueChange = (e) =>
    {
        setData({ ...data, [e.target.name]: e.target.value });
    }


    const handleSubmit = (e) =>
    {
        e.preventDefault();
        let token = localStorage.getItem('token');
        axios.put(`${baseUrl.baseurl}/api/articles/${id}`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
        }).then((response) =>
        {
            console.log(response.data.message);
            window.alert(response.data.message);
            redirect("/article/dash");
        }).catch((error) =>
        {
            console.error(error.response.data.message);
            console.error(error);
            window.alert("Something is Fishy");
        })
    }

    return (
        <form className="bg-white p-5 rounded shadow-md">
            <span className="text-2xl font-bold mb-5">Modify article</span>
            <Link to={"/article/dash"}>
                <span className="text-xl font-bold mb-4  w-[200px] mt-2 flex bg-gray-600 p-2 border-none text-gray-200 hover:bg-blue-800 cursor-pointer rounded-md">Back to Dashboard</span>
            </Link>
            <div className="mb-5">
                <label htmlFor="title" className="block mb-2 font-bold text-gray-700">Title</label>
                <input
                    type="text"
                    id="title"
                    name='title'
                    value={title}
                    onChange={(e) => onValueChange(e)}
                    className="border-2 border-gray-300 p-2 w-full rounded-md" />
            </div>
            <div className="mb-5">
                <label htmlFor="content" className="block mb-2 font-bold text-gray-700">Content</label>
                <textarea
                    id="content"
                    value={content}
                    name='content'
                    onChange={(e) => onValueChange(e)}
                    className="border-2 border-gray-300 p-2 w-full rounded-md"></textarea>
            </div>
            <div className="mb-5">
                <label htmlFor="categories" className="block mb-2 font-bold text-gray-700">Categories</label>
                <input
                    type="text"
                    id="categories"
                    name='category'
                    value={category}
                    onChange={(e) => onValueChange(e)}
                    className="border-2 border-gray-300 p-2 w-full rounded-md" />
            </div>
            <div className="mb-5">
                <label htmlFor="tags" className="block mb-2 font-bold text-gray-700">Tags</label>
                <input
                    type="text"
                    id="tags"
                    name='tags'
                    value={tags}
                    onChange={(e) => onValueChange(e)}
                    className="border-2 border-gray-300 p-2 w-full rounded-md" />
            </div>
            <button
                type="submit"
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Update Article</button>
        </form>
    );
}

export default EditArticle;
