import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const SideBar = () => {

    const [popularBlogs, setPopularBogs]  = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/blogs").then(res => res.json()).then(data => setPopularBogs(data.slice(
            0, 15
        )))
    }, [])

  return (
    <div>

        <div>
            <h1 className="text-2xl font-semibold py-4 text-orange-400">Latest Blogs</h1>

            <div>
                {
                    popularBlogs.slice(0, 5).map((blog) => (
                        <div key={blog.id} className="my-5 border-b border-slate-300 border-spacing-2 px-4">
                            <h4 className="font-medium mb-2">{blog.title}</h4>

                            <Link to='/' className="flex items-center gap-1 hover:text-orange-500 
                            hover:-translate-y-1 transition-all ease-in-out delay-150 text-base pb-2"
                            >
                                <p>Read More</p>
                                <FaArrowRight />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className="mt-8">
            <h1 className="text-2xl font-semibold py-4 text-orange-400">Popular Blogs</h1>

            <div>
                {
                    popularBlogs.slice(6, 10).map((blog) => (
                        <div key={blog.id} className="my-5 border-b border-slate-300 border-spacing-2 px-4">
                            <h4 className="font-medium mb-2 text-slate-900">{blog.title}</h4>

                            <Link to='/' className="flex items-center gap-1 hover:text-orange-500 
                            hover:-translate-y-1 transition-all ease-in-out delay-150 text-base pb-2"
                            >
                                <p>Read More</p>
                                <FaArrowRight />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar