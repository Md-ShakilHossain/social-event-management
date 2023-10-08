import { useContext } from "react";
import Navbar from "../../Shared/Navbar";
import { DataContext } from "../../../MyProvider/MyProvider";


const Feedback = () => {

    const {user} = useContext(DataContext)

    return (
        <div>
            <Navbar></Navbar>
            <h3>this is from navbar</h3>
            <p>user name is: {user}</p>
        </div>
    );
};

export default Feedback;