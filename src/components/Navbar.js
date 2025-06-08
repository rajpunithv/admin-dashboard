import React from "react";

export default function Navbar() {
    return (
        <header className="w-full bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Admin Panel</h1>
            <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Logout
                </button>
            </div>
        </header>
    );
}
