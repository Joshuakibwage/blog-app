import { NavLink } from "react-router-dom"
import { MdOutlineFacebook } from "react-icons/md";
import { ImDribbble } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
 

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    }
 
    //nav items
    const navItems = [
        {path: '/home', Link: 'Home'},
        {path: '/services', Link: 'Services'},
        {path: '/About', Link: 'About'},
        {path: '/contact', Link: 'Contact'},
        {path: '/blogs', Link: 'Blogs'}
    ]

  return (
    <header className="bg-[#030014] w-full">
        <nav className="w-[90%] mx-auto py-4 flex items-center justify-between">
            <a 
                href="/"
                className="font-bold text-4xl bg-gradient-to-r from-orange-300 to-red-700 bg-clip-text
                text-transparent"
            >
                Blogur
            </a>

            {/* nav items for larger screens */}
            <ul className="md:flex hidden text-lg gap-12">
                {navItems.map(({path, Link}) => (
                    <li key={path}>
                        <NavLink 
                            to={path}
                            className="text-white/75 hover:text-white transition-all delay-200 ease-in-out
                            "
                        >
                            {Link}
                        </NavLink>
                    </li>
                ))}
            </ul>
            {/* nav icons */}
            <div className="lg:flex gap-4 items-center hidden">
                <a href="">
                    <MdOutlineFacebook 
                    size={20}
                        className="text-white hover:text-orange-300"
                    />
                </a>
                <a href="">
                    <ImDribbble 
                    size={20}
                        className="text-white hover:text-orange-300"
                    />
                </a>
                <a href="">
                    <FaXTwitter 
                    size={20}
                        className="text-white hover:text-orange-300"
                    />
                </a>

                <Button 
                    label="Log In"
                    className="bg-orange-400 px-6 py-2 rounded-md font-semibold text-white 
                    hover:bg-white hover:-translate-y-1 cursor-pointer transition-all ease-in-out delay-200
                    hover:text-red-500"
                />
            </div>

            {/* mobile menu icons */}
            <div className="text-white md:hidden flex">
                <button onClick={toggleNav} className="cursor-pointer">
                 { nav ?  
                    <IoCloseSharp 
                        size={30}
                    /> 
                    :
                    <GiHamburgerMenu 
                        size={30}
                    />}
                </button>
            </div>
        </nav>

        {/* mobile menu nav */}
        <div className="md:hidden block">
            {nav ? (
                <ul className={`md:hidden flex flex-col text-lg gap-12 px-4 py-6 mt-18 bg-white ${
                    nav ? "fixed top-0 left-0 w-full transition-all ease-in-out duration-200 " : "hidden"
                }`}>
                    {navItems.map(({path, Link}) => (
                        <li key={path} className="space-y-4 ">
                            <NavLink 
                                onClick={toggleNav}
                                to={path}
                                className="text-black
                                "
                            >
                                {Link}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    </header>
  )
}

export default Navbar