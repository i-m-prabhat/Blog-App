import { useState, useEffect } from 'react';
import axios from 'axios';

function Blog(props)
{
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);

    useEffect(() =>
    {
        if (showComments)
        {
            axios.get(`https://your-api.com/blog/${props.blogId}/comments`)
                .then(response =>
                {
                    setComments(response.data);
                })
                .catch(error =>
                {
                    console.log(error);
                });
        }
    }, [showComments, props.blogId]);

    const handleShowComments = () =>
    {
        setShowComments(!showComments);
    };

    const handleAddComment = (newComment) =>
    {
        setComments([...comments, newComment]);
    };

    return (
        <div>
            <h2 className="text-xl font-bold">{props.title}</h2>
            <p>{props.content}</p>
            <p>Author: {props.author.name}</p>
            <p>Tags: {props.tags.join(', ')}</p>
            <p>Comments: {props.comments.length}</p>
            <button onClick={handleShowComments} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {showComments ? 'Hide comments' : 'Show comments'}
            </button>
            {showComments && (
                <div>
                    <h3 className="text-lg font-bold mt-4">Comments:</h3>
                    {comments.map(comment => (
                        <div key={comment._id} className="mt-2">
                            <p>{comment.content}</p>
                            <p>Author: {comment.author.name}</p>
                        </div>
                    ))}
                    <CommentForm onCommentAdd={handleAddComment} blogId={props.blogId} />
                </div>
            )}
        </div>
    );
}

function CommentForm(props)
{
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        axios.post(`https://your-api.com/blog/${props.blogId}/comments`, { content, author })
            .then(response =>
            {
                props.onCommentAdd(response.data);
                setContent('');
                setAuthor('');
            })
            .catch(error =>
            {
                console.log(error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div>
                <label htmlFor="content" className="block font-bold">Comment:</label>
                <textarea id="content" value={content} onChange={(event) => setContent(event.target.value)} className="border rounded p-2 mt-2 w-full"></textarea>
            </div>
            <div className="mt-4">
                <label htmlFor="author" className="block font-bold">Author:</label>
                <input type="text" id="author" value={author} onChange={(event) => setAuthor(event.target.value)} className="border rounded p-2 mt-2 w-full" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Add comment
            </button>
        </form>
    );
}


export default Blog;