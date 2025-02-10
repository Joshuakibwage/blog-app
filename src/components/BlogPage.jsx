 import { useState } from "react";
 import blogData from "../utils/data.json";
import BlogCard from "./BlogCard";

const BlogPage = () => {

//   const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12 ;    //blogs per page

    const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="w-full">

        <div>
                {/* category section */}
            <div>
                    page Category
            </div>
                {/* blog cards section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto ">

            {blogData.map((data, id) => (    

                <BlogCard
                    key={id}
                    {...data}
                    // blogs={blogs}
                
                />
            ))}
                  
            </div>
                {/* pagination section */}
            <div>
                    pagination
            </div>
            </div>
    
    </div>
  )
}

export default BlogPage