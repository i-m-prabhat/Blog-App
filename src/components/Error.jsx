import React from 'react'
import { BsFillArrowLeftSquareFill } from "react-icons/bs"
import { Link } from 'react-router-dom'

const Error = () =>
{
    return (
        <div className="py-10">
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl">
                    Page not found
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <div className="flex items-center justify-center mt-6 gap-x-3">
                    {/* <button className="inline-flex items-center rounded-md border border-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-black dark:text-white">
                        <BsFillArrowLeftSquareFill className="w-4 h-4 mr-2" />
                        Take me Back
                    </button> */}

                    <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500 ">
                        <Link to={"/"}>
                            Go Home
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Error
