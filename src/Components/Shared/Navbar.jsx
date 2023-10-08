import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { DataContext } from "../../MyProvider/MyProvider";

const Navbar = () => {

    const { user, logOut } = useContext(DataContext)

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


    const handleLogOut = () => {
        logOut()
            .then()
            .catch()

    }

    return (
        <div className="my-4 p-4 rounded-lg md:shadow-teal-200 shadow-xl">
            <div className="flex justify-between items-center">
                <div>
                    <ul className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-8 items-center">
                        {links}
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 lg:gap-8">
                    {
                        user ? <img className="rounded-full w-10 h-10" src={user.photoURL} alt="" /> :
                            <CgProfile className="md:text-2xl lg:text-4xl"></CgProfile>
                    }

                    {
                        user ? <p>{user.displayName}</p> : ''
                    }
                    {
                        user ? <button onClick={handleLogOut} className=" bg-red-500 lg:py-2 px-1 md:px-2 lg:px-4 text-xl font-semibold rounded-xl text-white">Log Out</button> :
                            <Link to='/login'><button className=" bg-red-500 lg:py-2 px-1 md:px-2 lg:px-4 text-xl font-semibold rounded-xl text-white">Login</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;