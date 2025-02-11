import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BlogCard = ({ blogs, currentPage, selectedCategory, pageSize}) => {

    const filteredBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) *pageSize, currentPage * pageSize)
    // console.log(filteredBlogs)
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {   filteredBlogs.map((blog) => (
            
            <Link to={`/blogs/${blog.id}`} key={blog.id} className="group">
                <div className="p-5 shadow-lg rounded cursor-pointer group-hover:-translate-y-1 transition-all 
                delay-200 ease-in-out"
                >
                    <img 
                        src={blog.image}
                        alt={blog.title}
                        className=""
                    />
                    <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer transition-all
                    delay-100 ease-in-out"
                    >
                        {blog.title}
                    </h3>
                    <p className="mb-2 flex items-center gap-2 text-gray-600">
                        <FaUser />
                        {blog.author}
                    </p>
                    <p className="text-gray-500 text-sm">Published: {blog.published_date}</p>
                </div>
            </Link>
        
        ))}
    </div>
  )
}

export default BlogCard