

const ChooseUs = () => {
    return (
        <div className="my-20">
            <h2 className="text-center text-5xl font-bold mb-8">Why you choose us!</h2>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="border md:shadow-teal-200 shadow-xl p-4 lg:w-1/2 mx-auto">
                <ul className="list-disc list-inside text-2xl">
                    <li>We offer you with cheapest price</li>
                    <li>We have refund policy</li>
                    <li>We have alternative for bad weather</li>
                    <li>You can cancel order with negligible fees</li>
                    <li>We offer you secure payment method</li>
                    <li>24/7 customer support with dedicated customer care</li>
                </ul>
            </div>
        </div>
    );
};

export default ChooseUs;