import { useEffect, useState } from "react";
import Faq from "./Faq";

const Faqs = () => {
    const [faqs, setFaqs] = useState([]);
    useEffect(() => {
        fetch('/faq.json')
            .then(res => res.json())
            .then(data => setFaqs(data))
    }, [])

    return (
        <div className="mt-20">
            <h2 className="text-5xl font-bold mb-8">FAQ</h2>
            <div>
                {
                    faqs.map((faq, idx) =><Faq key={idx} faq={faq}></Faq>)
                }
            </div>
        </div>
    );
};

export default Faqs;