

const Category = ({ onSelectedCategory, activeCategory}) => {

    const categories = [
        "Startups",
        "Security",
        "AI",
        "Apps",
        "Tech"
    ];


  return (
    <div className="px-4 py-4 mb-8 lg:gap-16 flex flex-wrap items-center border border-b-neutral-300 text-gray-900">
        <button>All</button>

        {
            categories.map((category, idx) => (
                <button
                    key={idx}
                    onClick={() => onSelectedCategory(category)}
                    className={`mr-2 space-x-16 ${activeCategory === category ? "active-button" : ""}`}
                >
                    {category}
                </button>
            ))
        }
    </div>
  )
}

export default Category