 import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import Category from "./Category";
import Sidebar from "./SideBar";


const BlogPage = () => {

  const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12 ;    //blogs per page
    
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

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
    }, [currentPage, pageSize, selectedCategory]);

    //page changing button
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
        setCurrentPage(1)
        setActiveCategory(category)

    }


  return (
    <div className="w-full">

        <div>
                {/* category section */}
            <div className="max-w-7xl mx-auto">
                <Category 
                    onSelectCategory={handleCategoryChange}
                    selectedCategory={selectedCategory}
                    activeCategory={activeCategory}
                />
            </div>
               
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                 {/* blog cards section */}
                <BlogCards 
                    blogs={blogs}
                    currentPage={currentPage}
                    selectedCategory={selectedCategory}
                    pageSize={pageSize}
                />
                {/* sidebar component */}

                <Sidebar />
                  
            </div>
                {/* pagination section */}
            <div className="mb-4 mt-6">
                    <Pagination
                        onPageChange={handlePageChange}
                        currentPage={currentPage}
                        blogs={blogs}
                        pageSize={pageSize}
                    />
            </div>
            </div>
    
    </div>
  )
}

export default BlogPage