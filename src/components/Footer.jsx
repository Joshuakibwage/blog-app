 

const Footer = () => {
  return (
    <footer className="bg-gray-900">

        <div className="px-4 pt-16 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-screen-xl md:px-24 lg:px-4 ">

            <div>

                <div>
                    <p className="font-medium tracking-wide text-gray-300"
                    >
                        Category

                    </p>
                    <ul>
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
            </div>
        </div>
    </footer>
  )
}

export default Footer