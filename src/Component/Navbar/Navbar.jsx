import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>


            <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <h1 href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">User-Chart</span>
                    </h1>
                    <button >
                          <Link to={"/login"}>Login</Link>
                    </button>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;