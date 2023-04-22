import React, { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../baseUrl.json";
import CommentSection from "./CommentSection";


function HomePage()
{
    const [blogs, setBlogs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // const [comments, setComments] = useState([]);
    // const [showComments, setShowComments] = useState(false);

    useEffect(() =>
    {
        axios.get(`${baseUrl.baseurl}/api/articles`).then((res) =>
        {
            setBlogs(res.data);
            setIsLoading(false);
        }).catch((err) =>
        {
            console.log(err.res.data.message);
            console.log(err);
        })
    }, []);



    return (
        <>
            {isLoading ? (
                <>
                    <div className="bg-gradient-to-r from-gray-500 to-[#21252b] mybg h-[400px] flex justify-center items-center">
                        <div className="max-w-md mx-auto text-center">
                            <h1 className="text-4xl font-bold text-white mb-4">Welcome to my blog</h1>
                            <p className="text-lg text-white mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id volutpat sapien.</p>
                            <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full">Learn More</button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-screen">
                        <svg
                            className="animate-spin h-5 w-5 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16v3a5 5 0 010 10v3l-2.58-1.55A8.002 8.002 0 0012 20a8 8 0 004-1.03v-2.002A5.001 5.001 0 0116 12h4z"
                            ></path>
                        </svg>
                    </div>
                </>
            ) : (
                <div>
                    <div className="bg-gradient-to-r from-gray-500 to-[#21252b] mybg h-[400px] flex justify-center items-center">
                        <div className="max-w-md mx-auto text-center">
                            <h1 className="text-4xl font-bold text-white mb-4">Welcome to my blog</h1>
                            <p className="text-lg text-white mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id volutpat sapien.</p>
                            <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full">Learn More</button>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`${selectedCategory === null ? "bg-gray-700 text-white" : "bg-gray-200"
                                } px-4 py-2 rounded-md`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setSelectedCategory("tech")}
                            className={`${selectedCategory === "tech" ? "bg-gray-700 text-white" : "bg-gray-200"
                                } px-4 py-2 rounded-md`}
                        >
                            Tech
                        </button>
                        <button
                            onClick={() => setSelectedCategory("food")}
                            className={`${selectedCategory === "food" ? "bg-gray-700 text-white" : "bg-gray-200"
                                } px-4 py-2 rounded-md`}
                        >
                            Food
                        </button>
                        <button
                            onClick={() => setSelectedCategory("travel")}
                            className={`${selectedCategory === "travel" ? "bg-gray-700 text-white" : "bg-gray-200"
                                } px-4 py-2 rounded-md`}
                        >
                            Travel
                        </button>
                    </div>


                    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {blogs
                                .filter((blog) => selectedCategory === null || blog.category === selectedCategory)
                                .map((blog) => (
                                    <div key={blog._id} className="bg-white rounded-lg shadow-md p-5">
                                        <h2 className="text-lg font-bold">{blog.title}</h2>
                                        <p className="text-gray-500 mb-2">{blog.category}</p>
                                        <p className="text-gray-700">
                                            {blog.content}
                                            {/* {blog.author.name} */}
                                            {/* {blog.comments.length} */}
                                        </p>
                                        <span className="text-blue-700">{!blog.comments.length ? 0 : blog.comments.length} Comments</span>
                                        {/* <span className="text-blue-700 mx-5 cursor-pointer" onClick={() => handleComment(blog._id)}>Show Comments</span>

                                        {showComments && (
                                            <div className="mt-4">
                                                {comments.map(comment => (
                                                    <div key={comment._id} className=" rounded-lg mb-4">
                                                        <p className="text-red-800">hello</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )} */}
                                        <CommentSection blog={blog._id} author={blog.author.name} />

                                    </div>
                                ))}

                        </div>
                    </div>
                </div>)};
        </>
    );
}

export default HomePage;
