
import PropTypes from 'prop-types';
const CheckCard = ({ checkout, handleDelete, handleUpdate }) => {
    const { name, email, currentprice, service, date, _id, status } = checkout;


    return (
        <div className="bg-gray-400 h-20 max-w-screen px-20 grid border grid-cols-8">
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{currentprice}</h1>
            <h1>{service}</h1>
            <h1>{date}</h1>
            {status == 'confirm' ? <h1 className='p-4 bg-green-400 text-white font-bold'>{status}</h1> : <h1 className='p-4 bg-red-500 font-bold'>pending</h1>}
            <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            {/* <button onClick={() => handleUpdate(_id)}
             {
                status == 'confirm' ? className='hidden' :
                className='btn btn-outline'
             }
             
             >
                update
            </button> */}
            <button onClick={() => handleUpdate(_id)} className={status == 'confirm' ? 'hidden' : 'btn btn-outline'}>
                update
            </button>

        </div>
    );
};
CheckCard.propTypes = {
    checkout: PropTypes.object,
    handleDelete: PropTypes.func,
    handleUpdate: PropTypes.func,
};

export default CheckCard;

