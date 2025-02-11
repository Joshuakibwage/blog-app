import { useLoaderData } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import SideBar from "../components/SideBar";

const SingleBlog = () => {

  const data = useLoaderData();
  const {title, image, category, author, published_date, reading_time, content} = data;
  console.log(data)
  return (
    <section>
      <div className="bg-slate-900 text-center text-white px-4 py-22 ">
        <p className="text-xl md:text-4xl lg:text-5xl leading-snug font-bold">
          Single Blog page
        </p>
      </div>

      {/* blog details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">

        <div className="lg:w-3/4 mx-auto ">
          <div>
            <img 
              src={image}
              alt={title} 
              className="w-full rounded mx-auto"
            />
            <h1 className="font-bold mb-4 text-blue-500 text-2xl mt-6">{title}</h1>
            <p className="flex items-center gap-4 text-gray-600">
              <FaUser className="text-gray-500"/>
              {author} | {published_date}
              </p>
              <p className="text-sm font-bold text-gray-500 mt-3">Category: {category}</p>
            <p className="flex items-center gap-4 text-sm text-gray-600 mt-2">
              <CiClock1 className="text-gray-500" /> {reading_time}
            </p>
            <p className="text-sm text-gray-500 mt-2">{content}</p>

            <div className="text-sm text-gray-500 mt-4 leading-normal">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci rerum deleniti non aperiam
                 asperiores, cum obcaecati excepturi eius commodi molestiae repellat, possimus dolores. Qui 
                 ipsam voluptates magnam illum, quis iste?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eligendi quaerat deserunt 
                mollitia, veniam ut assumenda amet repellat necessitatibus temporibus sequi fugit maxime ex 
                dolorem at iusto corporis culpa velit.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic at cumque dolorem. Et tenetur 
                error distinctio asperiores porro tempora minima nesciunt veniam, iure perferendis eius 
                laudantium ad itaque, minus molestias!
              </p> <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci rerum deleniti non aperiam
                 asperiores, cum obcaecati excepturi eius commodi molestiae repellat, possimus dolores. Qui 
                 ipsam voluptates magnam illum, quis iste?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eligendi quaerat deserunt 
                mollitia, veniam ut assumenda amet repellat necessitatibus temporibus sequi fugit maxime ex 
                dolorem at iusto corporis culpa velit.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic at cumque dolorem. Et tenetur 
                error distinctio asperiores porro tempora minima nesciunt veniam, iure perferendis eius 
                laudantium ad itaque, minus molestias!
              </p> <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci rerum deleniti non aperiam
                 asperiores, cum obcaecati excepturi eius commodi molestiae repellat, possimus dolores. Qui 
                 ipsam voluptates magnam illum, quis iste?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eligendi quaerat deserunt 
                mollitia, veniam ut assumenda amet repellat necessitatibus temporibus sequi fugit maxime ex 
                dolorem at iusto corporis culpa velit.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic at cumque dolorem. Et tenetur 
                error distinctio asperiores porro tempora minima nesciunt veniam, iure perferendis eius 
                laudantium ad itaque, minus molestias!
              </p> <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci rerum deleniti non aperiam
                 asperiores, cum obcaecati excepturi eius commodi molestiae repellat, possimus dolores. Qui 
                 ipsam voluptates magnam illum, quis iste?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eligendi quaerat deserunt 
                mollitia, veniam ut assumenda amet repellat necessitatibus temporibus sequi fugit maxime ex 
                dolorem at iusto corporis culpa velit.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic at cumque dolorem. Et tenetur 
                error distinctio asperiores porro tempora minima nesciunt veniam, iure perferendis eius 
                laudantium ad itaque, minus molestias!
              </p> <br />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4">
          <SideBar />
        </div>
      </div>
    </section>
  )
}

export default SingleBlog