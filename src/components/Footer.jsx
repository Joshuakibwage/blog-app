 

const Footer = () => {
  return (
    <footer className="bg-gray-900">

        <div className="px-4 pt-16 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 ">

                <div className="grid grid-cols-2 md:grid-cols-4 lg:col-span-4">
                    <div>
                        <p className="font-medium tracking-wide text-gray-300"
                        >
                            Category
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                        News
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                        World
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                    References
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                        Games
                                    </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium tracking-wide text-gray-300"
                        >
                            Apples

                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                        Web
                                    </a>
                            </li>
                            <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                        eCommerce
                                    </a>
                            </li>
                            <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                        Business
                                    </a>
                            </li>
                            <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                        Entertainment
                                    </a>
                            </li>
                                    <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                        Portfolio
                                    </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium tracking-wide text-gray-300"
                        >
                            Cherry

                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                        Media
                                    </a>
                            </li>
                            <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                        Brochure
                                    </a>
                            </li>
                            <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                        Non-Profit
                                    </a>
                            </li>
                            <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                    Projects
                                    </a>
                            </li>
                                    <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                        Business
                                    </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium tracking-wide text-gray-300"
                        >
                            Business

                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                        Infopreneur
                                    </a>
                            </li>
                            <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                        Personal
                                    </a>
                            </li>
                            <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                        Wiki
                                    </a>
                            </li>
                            <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                    Forum
                                    </a>
                            </li>
                                    <li>
                                <a 
                                    href="/"
                                    className="text-gray-500 transition-colors duration-300 
                                    hover:text-orange-500"
                                >
                                        Projects
                                    </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
                        <p className="font-medium tracking-wide text-gray-300 mb-2">Subscribe for Updates</p>
                        <form className="flex flex-col md:flex-row">
                            <input 
                                type="email"
                                name="email"
                                id="email"
                                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white
                                border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 
                                focus:border-purple-400 focus:outline-none"
                                placeholder="email@example.com"
                            />
                            <button type="submit" className="inline-flex justify-center items-center h-12 
                            px-8 font-medium tracking-wide text-white transition duration-200 rounded
                            shadow-md hover:bg-orange-500 border">
                                Subscribe
                            </button>
                        </form>
                    </div>
                        
                </div>
                <div className="border border-b-neutral-500 my-8"/>
                <p className="capitalized text-center pt-4 text-gray-300">&copy;2025 | All rights reserverd</p>
        </div>
    </footer>
  )
}

export default Footer