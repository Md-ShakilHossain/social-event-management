import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";


const Offer = () => {
    return (
        <div>
            <div className="w-4/5 mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="border md:shadow-teal-200 shadow-2xl mt-12 py-8">
                <div className="w-64 p-5 md:shadow-teal-200 shadow-2xl rounded-lg mx-auto border">
                    <h2 className="text-4xl font-bold">20% OFF !!!</h2>
                    <p>We are offering you 20% OFF for our special clients. To claim this offer some requirements are given below. If you can at least one requirement you can redeem our offer. To redeem this offer at first you have to book a services then contact with us with given way.</p>
                </div>

                <div className="w-64 p-5 my-8 md:shadow-teal-200 shadow-2xl rounded-lg mx-auto border">
                    <h4 className="text-2xl font-bold">Requirements:</h4>
                    <ul className="list-disc">
                        <li>You need membership</li>
                        <li>Took more than one services within 2022</li>
                        <li>You are a staff of us</li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Offer;