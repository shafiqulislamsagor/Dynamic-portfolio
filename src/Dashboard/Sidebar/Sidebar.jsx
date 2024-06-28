import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div>
            <div className="min-h-screen flex flex-row ">
                <div className="flex flex-col w-full bg-white rounded-r-3xl overflow-hidden">
                    <div className="flex items-center justify-center h-20 shadow-md">
                        <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
                    </div>
                    <ul className="flex flex-col gap-y-4  py-4">
                        <li>
                            <Link
                                className="flex flex-row  items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                            >
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                    <i className="bx bx-home"></i>
                                </span>
                                <span className="text-xl font-medium">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="flex flex-row  items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                            >
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                    <i className="bx bx-music"></i>
                                </span>
                                <span className="text-xl font-medium">Music</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;