import React, { useState } from 'react';

const CommentForm = () =>
{
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const comment = {
            author,
            text,
            date: new Date().toLocaleString(),
        };
        setText('');
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-5 rounded shadow-md">
            {/* <h2 className="text-2xl font-bold mb-5">Add a comment</h2> */}
            <div className="mb-5">
                <label htmlFor="text" className="block mb-2 font-bold text-gray-700">Add a comment</label>
                <textarea id="content" value={content} onChange={(e) => setText(e.target.value)} className="border-2 border-gray-300 p-2 w-full rounded-md"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Comment</button>
        </form>
    );
}

export default CommentForm;
