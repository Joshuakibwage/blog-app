import { Link } from "react-router-dom" ;
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="px-4 py-16 bg-black mx-auto">

      <div className="text-white text-center">
        <h1 className="text-3xl md:text-4xl leading-snug font-bold mb-1">
          Empower Your Voice with Seamless Publishing
        </h1>
        <p className="text-white/75">  
          Blogr makes it easy to write, edit, and share your thoughts with a beautifully designed, 
          distraction-free experience.  
        </p>

        <div className="flex justify-center mt-4">
          <Link to='/about' className="flex items-center gap-1 hover:text-orange-500 hover:-translate-y-1
            transition-all ease-in-out delay-150"
          >
            <p>Learn More</p>
            <FaArrowRight />
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Banner



