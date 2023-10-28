
import PropTypes from 'prop-types';
import { BiSolidRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ServiceCard = ({ singledata }) => {
    
    const { title, img ,_id} = singledata;

    return (
        <div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={img} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                   <Link to={`/checkout/${_id}`}>
                   <button className="inline-flex items-center justify-center btn text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <BiSolidRightArrowCircle className='text-xl'></BiSolidRightArrowCircle>
                    </button>
                   </Link>
                </div>
            </div>

        </div>
    );
};

ServiceCard.propTypes = {
    singledata: PropTypes.object
};

export default ServiceCard;