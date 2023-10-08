import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../../Shared/Navbar";

const ServiceDetails = () => {

    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const detail = details.find(detail => detail.id === idInt);

    const { cover, title, fullDescription, totalPrice, advance
    } = detail;

    return (
        <div className="w-4/5 mx-auto">
            <Navbar></Navbar>
            <div className="mt-4">
                <img className="w-full rounded-t-lg h-60 md:h-[500px]" src={cover} alt="" />

                <h3 className="mt-6 ml-2 text-4xl font-bold">{title}</h3>

                <p className="text-xl mt-4 ml-2"><span className="font-bold">Total Price:</span> <span className="text-red-500 font-semibold">{totalPrice}</span> BDT</p>

                <p className="text-xl ml-2"><span className="font-bold">Advance Price:</span> <span className="text-green-500 font-semibold">{advance}</span> BDT</p>

                <p className="text-lg my-8">{fullDescription}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;