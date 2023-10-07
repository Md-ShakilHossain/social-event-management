import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, cover, title, shortDescription, totalPrice} = service;
    return (
        <div className='rounded-xl md:shadow-teal-200 shadow-xl'>
            <img className='rounded-t-xl h-64' src={cover} alt="" />
            <h3 className='ml-2 text-2xl font-bold mt-4'>{title}</h3>
            <p className='ml-2 text-lg mt-2'>{shortDescription}</p>
            <p className='ml-2 text-lg font-medium mt-2'>Price: <span className='text-red-500'>{totalPrice}</span> BDT</p>
            
            <Link to={`/service/${id}`}><button className='w-full py-2 bg-blue-500 my-4 hover:bg-blue-700 rounded-xl text-white font-bold text-xl'>Details</button></Link>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired
}

export default Service;