import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {

    const links = <>

        <li><NavLink className={({ isActive, isPending }) =>
            `text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='/'>Home</NavLink></li>

        <li><NavLink className={({ isActive, isPending }) =>
            `text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='/aboutUs'>About Us</NavLink></li>

        <li><NavLink className={({ isActive, isPending }) =>
            `text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='/feedback'>Feedback</NavLink></li>

        <li><NavLink className={({ isActive, isPending }) =>
            `text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='/offer'>Offer</NavLink></li>

    </>

    return (
        <div className="my-4 p-4 rounded-lg shadow-teal-200 shadow-xl">
            <div className="flex justify-between items-center">
                <div>
                    <ul className="flex gap-8 items-center">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-8">
                    <CgProfile className="text-4xl"></CgProfile>
                    <Link to='/login'><button className=" bg-red-500 py-2 px-4 text-xl font-semibold rounded-xl text-white">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;