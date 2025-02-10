import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BlogCard = ({ 
    blogs, 
    id, 
    title, 
    image, 
    category, 
    author, 
    authorPic, 
    published_date,
    reading_time,
    content,
    tags
  }) => {

    // const filteredBlogs = blogs;
    // console.log(filteredBlogs)
  return (
    <div className="">
        {
            
            <Link key={id} >
                <div className="p-5 shadow-lg rounded cursor-pointer w-full">
                    <img 
                        src={image}
                        alt={title}
                        className=""
                    />
                    <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer transition-all
                    delay-100 ease-in-out"
                    >
                        {title}
                    </h3>
                    <p className="mb-2 flex items-center gap-2 text-gray-600">
                        <FaUser />
                        {author}
                    </p>
                    <p className="text-gray-500 text-sm">Published: {published_date}</p>
                </div>
            </Link>
        
        }
    </div>
  )
}

export default BlogCard