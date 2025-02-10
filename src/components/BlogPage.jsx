 import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";

const BlogPage = () => {

  const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12 ;    //blogs per page

    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

            // filter by category
            if(selectedCategory) {
                url += `&category=${selectedCategory}`;
            }

            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
            
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory])
  return (
    <div className="w-full">

        <div>
                {/* category section */}
            <div>
                    page Category
            </div>
                {/* blog cards section */}
            <div className="max-w-7xl mx-auto">

                <BlogCards 
                    blogs={blogs}
                />
                  
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