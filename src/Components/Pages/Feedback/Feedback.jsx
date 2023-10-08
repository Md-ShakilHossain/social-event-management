import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";


const Feedback = () => {
    return (
        <div>
            <div className="w-4/5 mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="w-64 mx-auto">
                <div className="flex flex-col border shadow-2xl p-4  mb-2 gap-4 items-center">
                    <h5 className="text-xl fond-bold">User 1:</h5>
                    <p>I booked for wedding party. Service was good. i am very pleased there services.</p>
                </div>
                <div className="flex flex-col border shadow-2xl p-4  mb-2 gap-4 items-center">
                    <h5 className="text-xl fond-bold">User 2:</h5>
                    <p>This is great. You can believe them. There behavior is awesome.</p>
                </div>
                <div className="flex flex-col border shadow-2xl p-4  mb-2 gap-4 items-center">
                    <h5 className="text-xl fond-bold">User 3:</h5>
                    <p>In a word, just awesome experience with their service.</p>
                </div>
                <div className="flex flex-col border shadow-2xl p-4  mb-2 gap-4 items-center">
                    <h5 className="text-xl fond-bold">User 4:</h5>
                    <p>I will give 8 out of 10. Everything was good.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Feedback;