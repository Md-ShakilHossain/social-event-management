import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Banner from "./Banner";
import Navbar from "../../Shared/Navbar";
import Services from "./Services/Services";
import Faqs from "./FAQ/Faqs";


const Home = () => {
    return (
        <div className="mt-4">
            <div className="flex md:shadow-teal-200 shadow-xl">
                <Link to='/register'><button className=" bg-slate-200 py-2 px-8 text-xl font-semibold rounded-l-xl text-black">Register</button></Link>

                <div className="bg-slate-50 text-xl font-semibold py-1 text-black border">
                    <Marquee>
                        If you new to our services please Register or already you have an account please Login to book or see details our services.
                    </Marquee>
                </div>

                
            </div>
            <Banner></Banner>
            <Navbar></Navbar>
            <Services></Services>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;