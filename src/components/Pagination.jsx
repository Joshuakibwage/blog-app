import Button from "./Button";

const Pagination = ({blogs, onPageChange, currentPage, pageSize}) => {

    const totalPages = Math.ceil(blogs.length / pageSize)
    // console.log(totalPages)
    const renderPaginationLinks = () => {
        return Array.from({length: totalPages}, (_, i) => i + 1).map((pageNumber) => (
            <li key={pageNumber} className={pageNumber === currentPage ? "activePagination" : ""}>
                <a href="#" onClick={() => onPageChange(pageNumber)}>
                    {pageNumber}
                </a>
            </li>
        ))
    }
  return (
    <ul className="pagination my-8 flex flex-wrap gap-4 ">

        <li>
            <Button 
                label="Previous"
                className="cursor-pointer"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            />
        </li>
        <div className="flex gap-1">{renderPaginationLinks()}</div>
        <li>
            <Button
                label="Next"
                className="cursor-pointer"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            />
        </li>

    </ul>
  )
}

export default Pagination