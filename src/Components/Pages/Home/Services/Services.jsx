import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="mt-20">
            <h2 className="text-5xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;