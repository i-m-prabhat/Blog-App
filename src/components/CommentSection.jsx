import React, { useState } from "react";
import axios from "axios";
import baseUrl from "../baseUrl.json";
import CommentForm from "./CommentForm";

function CommentSection({ blog, author })
{
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    const handleComment = (id) =>
    {
        // console.log(id);
        axios.get(`${baseUrl.baseurl}/api/articles/${id}/comments`)
            .then(response => setComments(response.data))
            .catch(error => console.log(error));
        setShowComments(true);
    }

    return (
        <div>
            <span className="text-blue-700 cursor-pointer" onClick={() => handleComment(blog)}>Show Comments</span>

            {showComments && (
                <div className="mt-4">
                    {comments.map((comment, id) => (
                        <div key={id} className=" rounded-lg mb-4">
                            <p className="text-blue-800 text-[12px]">{author}</p>
                            <p className="text-gray-800">{comment.content}</p>
                        </div>
                    ))}
                    <CommentForm />
                </div>
            )}
        </div>
    );
}

export default CommentSection;