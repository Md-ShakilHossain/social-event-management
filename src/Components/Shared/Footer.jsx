import { FaMobileAlt } from "react-icons/fa";
import { AiFillFacebook, AiOutlineMail, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer footer-center text-white p-10 bg-teal-600">
            <aside>
                <h5 className="text-3xl font-bold">
                    Social Event Management Ltd.
                </h5>
                <p className="text-xl">Making your life easier since 1998.</p>
                <p>Copyright © 2023 - All right reserved</p>
            </aside>
            <nav>
                <div>
                    <div className="flex mt-2 items-center gap-2">
                        <FaMobileAlt className="text-2xl"></FaMobileAlt>
                        <p>+880 1636931691</p>
                    </div>
                    <div className="flex mt-2 items-center gap-2">
                        <AiOutlineMail className="text-2xl"></AiOutlineMail>
                        <p>shakilh550@gmail.com</p>
                    </div>
                    <div className="flex mt-2 items-center gap-2">
                        <AiFillTwitterCircle className="text-2xl"></AiFillTwitterCircle>
                        <p>@MdShakil_Hosain</p>
                    </div>
                    <div className="flex mt-2 items-center gap-2">
                        <AiFillFacebook className="text-2xl"></AiFillFacebook>
                        <p >https://www.facebook.com/shakil.bsb/</p>
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;