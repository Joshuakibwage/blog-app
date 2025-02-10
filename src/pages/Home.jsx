import Banner from "../components/Banner";
import BlogPage from "../components/BlogPage";

const Home = () => {
  return (
    <section>

      <Banner />

      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </section>
  )
}

export default Home