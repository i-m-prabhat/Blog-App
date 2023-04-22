import React, { useState } from 'react';
import axios from 'axios';
import baseUrl from "../baseUrl.json"

const CommentForm = ({ id }) =>
{
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    const comment = () =>
    {
        let token = localStorage.getItem('token');
        console.log(token);
        axios.post(`${baseUrl.baseurl}/api/articles/${id}/comments`, { name, content }, {
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
        comment();
    }

    return (
        <form className="bg-white p-5 rounded shadow-md">
            {/* <h2 className="text-2xl font-bold mb-5">Add a comment</h2> */}
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 font-bold text-gray-700">Your Good Name</label>
                <input type='text' id="name" value={name} onChange={(e) => setName(e.target.value)} className="border-2 border-gray-300 p-2 w-full rounded-md"></input>
            </div>
            <div className="mb-5">
                <label htmlFor="content" className="block mb-2 font-bold text-gray-700">Write Your Message</label>
                <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} className="border-2 border-gray-300 p-2 w-full rounded-md"></textarea>
            </div>
            <button onClick={handleSubmit} type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Comment</button>
        </form>
    );
}

export default CommentForm;
