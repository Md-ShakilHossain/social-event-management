import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Banner from "./Banner";
import Navbar from "./Shared/Navbar";


const Home = () => {
    return (
        <div className="mt-4">
            <div className="flex shadow-md">
                <Link><button className=" bg-slate-200 py-2 px-8 text-xl font-semibold rounded-l-xl text-black">Register</button></Link>

                <div className="bg-slate-50 text-xl font-semibold py-1 text-black border">
                    <Marquee>
                        If you new to our services please Register or already you have an account please Login to book or see details our services.
                    </Marquee>
                </div>

                <Link><button className=" bg-slate-200 py-2 px-8 text-xl font-semibold rounded-r-xl text-black">Login</button></Link>
            </div>
            <Banner></Banner>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;