import React from "react";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
            <Link to="/" className="no-underline hover:underline">
                <h2 className="text-xl font-bold mb-6 cursor-pointer">Admin Dashboard</h2>
            </Link>
            <nav className="flex flex-col space-y-2">
                <Link to="/calendar" className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded block">
                    Calendar
                </Link>
                <Link to="/kanban" className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded block">
                    Kanban
                </Link>
                <Link to="/charts" className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded block">
                    Charts
                </Link>
            </nav>
        </aside>
    );
}
