import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";


const AboutUs = () => {
    return (
        <div>
            <div className="w-4/5 mx-auto">
                <Navbar></Navbar>
            </div>

            <div className="flex flex-col justify-center md:flex-row">
                <div className="w-64 border mx-auto shadow-2xl p-6" >
                    <h2 className="text-3xl mb-4 font-bold ">Who are we!!</h2>
                    <p>We are a group of friends started this journey since 1998 with only one service that is wedding. By our hardworking we have earned reputation. Our motive is we will make your life easier.</p>
                </div>
                <div className="w-64 border mx-auto shadow-2xl p-6">
                    <h2 className="text-3xl mb-6 font-bold ">We are Three!</h2>
                    <ul className="list-decimal ml-6">
                        <li>Md. Shakil Hossain</li>
                        <li>Md. Hasibur Rahman</li>
                        <li>Minhajur Rahman Hemel</li>
                    </ul>
                </div>
            </div>
            <div className="w-64 mb-12 border mx-auto shadow-2xl p-6">
                <h2 className="text-3xl mb-4 font-bold text-center ">Contact us</h2>
                <p>Road 3/A Kotapara, Nagar-Konda, Savar, Dhaka</p>
                <p>Mobile: 01636931691, 01784334241</p>
                <p>Email: shakilh550@gmail.com</p>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default AboutUs;