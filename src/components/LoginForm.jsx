import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = () =>
{
    const redirect = useNavigate();

    const handleLogin = () =>
    {
        redirect("/signup");
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-slate-200 p-10 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-5">Login</h2>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 font-bold text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <button
                    className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    onClick={handleLogin}
                >Login</button>
                <p className="text-sm mt-3">Don't have an account?
                    <span className="text-blue-600 font-bold hover:underline"><Link to={"/signup"} >Sign up</Link></span>
                </p>
            </form>
        </div>
    )
}

export default LoginForm
