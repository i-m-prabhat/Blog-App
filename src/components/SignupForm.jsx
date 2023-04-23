import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import baseUrl from "../baseUrl.json"

const SignupForm = () =>
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const redirect = useNavigate();

    const signup = async () =>
    {
        try
        {
            const response = await axios.post(`${baseUrl.baseurl}/api/signup`, {
                name,
                email,
                password,
            });

            // creating a sample article
            const token = response.data.token;
            const articleResponse = await axios.post(
                `${baseUrl.baseurl}/api/articles`,
                {
                    title: "Sample Article Title",
                    content: "This is a sample article content.",
                    category: "Technology",
                    tags: ["sample", "demo", "article"],
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                }
            );

            console.log(articleResponse.data.message);

            window.alert("Hey You are Registered Successfully. Now you can Login");
            setName("");
            setEmail("");
            setPassword("");
            setError("");
            redirect("/login");
            localStorage.setItem("isFirstTimeLogin", null);
        } catch (error)
        {
            setError(error.response.data.message);
        }
    };

    const handleSignup = (e) =>
    {
        e.preventDefault();
        signup();
    }
    return (
        <div className="flex justify-center items-center mt-10 mb-5">
            <form className="bg-slate-200 p-10 rounded shadow-md">
                <h2 className="text-2xl text-gray-500 font-bold mb-5">Sign up</h2>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 font-bold text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                {/* {name} */}
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                {/* {email} */}
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 font-bold text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                {/* {password} */}
                <button
                    className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    onClick={handleSignup}
                >Sign up</button>
                {error && <p className="text-[15px] mt-3 text-red-700 font-bold">{error}</p>}
                <p className="text-sm mt-3">Already have an account?
                    <span className="text-blue-600 font-bold hover:underline"><Link to={"/login"} >Login</Link></span></p>
            </form>
        </div>
    )
}

export default SignupForm
