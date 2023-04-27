import React, { useState } from "react";
import axios from "axios";
import baseUrl from "../baseUrl.json";
import CommentForm from "./CommentForm";

function CommentSection({ blog })
{
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    const handleComment = (id) =>
    {
        axios.get(`${baseUrl.baseurl}/api/articles/${id}/comments`)
            .then(response => setComments(response.data))
            .catch(error => console.log(error));
        setShowComments(true);
    }

    return (
        <div>
            <span className="text-blue-700 cursor-pointer" onClick={() => handleComment(blog)}>Show Comments</span>

            {showComments && (
                <div className="mt-4 mb-2 bg-slate-100 p-2 border rounded-lg">
                    {comments.map((comment, id) => (
                        <div key={id} className=" rounded-lg mb-4">
                            <p className="text-blue-800 underline text-[12px]">{!comment.name ? <span>Anonymous</span> : comment.name}</p>
                            <p className="text-gray-800">{!comment.content ? <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.cusantium recusandae ipsam.</span> : comment.content}</p>
                        </div>
                    ))}
                    <CommentForm id={blog} />
                </div>
            )}
        </div>
    );
}

export default CommentSection;