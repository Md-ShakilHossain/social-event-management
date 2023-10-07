import cover from '../../../assets/Images/Welcome.png'

const Banner = () => {
    return (
        <div className='w-full flex mt-8 md:px-20 md:py-5 items-center md:justify-between rounded-lg md:shadow-teal-200 shadow-lg'>
            <div className='rounded-md p-5 md:w-1/2 '>
                <h3 className='text-5xl md:text-4xl lg:text-7xl font-bold'> Welcome !</h3>
                <p className='lg:text-xl mt-4 font-medium'>We are here to make your life easier.</p>
                <h5 className='lg:text-2xl mt-8 font-semibold md:text-justify'>We are offering you various kinds of services. You can explore it, advance and make sure booking to make your life easier. You will get it with reasonable price.</h5>
            </div>
            
                <img className='md:w-1/2 hidden md:block' src={cover} alt="" />
            
        </div>
    );
};

export default Banner;