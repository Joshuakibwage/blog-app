import BlogPage from "../components/BlogPage";

const Blogs = () => {

  

  return (
    <section className="w-full">

      <div className="bg-black py-16 text-center text-white">
        <h2 className="text-3xl md:4xl font-bold mb-2">
          Blog page
        </h2>
        <p className=" leading-snug text-white/75">
          Insights, Stories, and Ideas Worth Sharing
        </p>
      </div>

      {/* all blogs container */}

      <div className="">
        <BlogPage />
      </div>
    </section>
  )
}

export default Blogs