import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {

    const links = <>

        <li><NavLink className={({ isActive, isPending }) =>
            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='/'>Home</NavLink></li>

        <li><NavLink className={({ isActive, isPending }) =>
            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='/aboutUs'>About Us</NavLink></li>

        <li><NavLink className={({ isActive, isPending }) =>
            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='/feedback'>Feedback</NavLink></li>

        <li><NavLink className={({ isActive, isPending }) =>
            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='/offer'>Offer</NavLink></li>

    </>

    return (
        <div className="my-4 p-4 rounded-lg shadow-teal-200 shadow-xl">
            <div className="flex justify-between items-center">
                <div>
                    <ul className="flex gap-2 md:gap-4 lg:gap-8 items-center">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-2 md:gap-4 lg:gap-8">
                    <CgProfile className="md:text-2xl lg:text-4xl"></CgProfile>
                    <Link to='/login'><button className=" bg-red-500 lg:py-2 px-1 md:px-2 lg:px-4 text-xl font-semibold rounded-xl text-white">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;