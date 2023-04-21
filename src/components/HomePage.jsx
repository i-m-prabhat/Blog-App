import React from "react";

function HomePage()
{
    return (
        <div className="bg-[#282c34]">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-8">Welcome to My Blog</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold mb-4">Blog Post 1</h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                            enim nec metus vulputate elementum.
                        </p>
                    </div>
                    <div className="bg-[#202010]  rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold mb-4">Blog Post 2</h2>
                        <p className="text-[#e5e7eb]">
                            Sed auctor ante auctor sapien egestas, at fringilla lectus
                            dapibus. Duis ac libero non dolor pretium bibendum.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold mb-4">Blog Post 3</h2>
                        <p className="text-gray-700">
                            Integer euismod mauris quis elit faucibus, ut ultrices turpis
                            euismod. Nam vel justo ac nisl luctus consectetur vitae sed
                            magna.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold mb-4">Blog Post 4</h2>
                        <p className="text-gray-700">
                            Nunc id dolor ut orci tempor maximus. Suspendisse at sapien sed
                            augue pulvinar feugiat eget eu elit.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold mb-4">Blog Post 5</h2>
                        <p className="text-gray-700">
                            Aliquam erat volutpat. Nulla facilisi. Phasellus eget efficitur
                            tellus. Sed ut felis sit amet sapien pharetra gravida.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold mb-4">Blog Post 6</h2>
                        <p className="text-gray-700">
                            Maecenas a metus vitae felis tincidunt volutpat. Nullam dictum
                            dolor at tortor hendrerit, sit amet consectetur justo
                            ullamcorper.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
