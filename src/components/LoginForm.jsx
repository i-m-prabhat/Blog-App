import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import baseUrl from "../baseUrl.json"

const LoginForm = () =>
{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');
    const redirect = useNavigate();

    const login = () =>
    {
        axios.post(`${baseUrl.baseurl}/api/login`, {
            email, password
        }).then((response) =>
        {
            const token = response.data.token;
            localStorage.setItem('token', token);
            localStorage.setItem('currentUser', response.data.email);

            setEmail("");
            setPassword("")
            setError("");
            // console.log(response.data.message)
            setMsg(response.data.message);
            if (email.includes("@"))
            {
                window.alert("Congratulation You Are Login Successfully, you are redirected to dashboard");
                redirect("/article/dash");
            }
            // redirect("/");
        }).catch((error) =>
        {
            setError(error.response.data.message);
        })
    }
    const handleLogin = (e) =>
    {
        e.preventDefault();

        login();
    }
    return (
        <div className="flex justify-center items-center mb-[120px] mt-8">
            <form className="bg-slate-200 p-10 rounded shadow-md">
                {msg && <p className="text-[25px] mt-3 text-blue-700 font-bold">{msg}</p>}
                <h2 className="text-2xl text-gray-500 font-bold mb-5">Login</h2>
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
                <button
                    className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    onClick={handleLogin}
                >Login</button>
                {error && <p className="text-[15px] mt-3 text-red-700 font-bold">{error}</p>}
                <p className="text-sm mt-3">Don't have an account?
                    <span className="text-blue-600 font-bold hover:underline"><Link to={"/signup"} >Sign up</Link></span>
                </p>
            </form>
        </div>
    )
}

export default LoginForm
