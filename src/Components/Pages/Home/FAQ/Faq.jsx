import PropTypes from 'prop-types';

const Faq = ({ faq }) => {
    const { question, answer } = faq;
    return (
        <div className='md:shadow-teal-200 shadow-xl mb-4'>
            <h4><span className='text-xl font-semibold'>Question: </span><span className='text-xl'>{question}</span></h4>
            <h6><span className='text-xl font-semibold'>Answer: </span><span className='text-xl'>{answer}</span></h6>
        </div>
    );
};

Faq.propTypes = {
    faq: PropTypes.object.isRequired
}

export default Faq;