import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MyCheckOut = () => {
    const{user}= useContext(AuthContext);
    const [CheckOutinfo, setCheckOutinfo] = useState([])
    
    

    useEffect(() => {
        fetch(`http://localhost:5000/checkout?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCheckOutinfo(data);
                
            });
        
    },[]);
    console.log(CheckOutinfo);
    
        return (
            <div>
                this is 
                
            </div>
        );
    
};

export default MyCheckOut;



// const [showSpinner, setShowSpinner] = useState(true);

// useEffect(() => {
//   // Use a setTimeout to hide the spinner after 3 seconds
//   const timeout = setTimeout(() => {
//     setShowSpinner(false);
//   }, 3000);

//   return () => {
//     clearTimeout(timeout);
//   };
// }, []);

// return (
//   <div>
//     {showSpinner ? (
//       // Render your spinner component here
//       <Spinner />
//     ) : (
//       // Render your content here when the spinner is hidden
//       <YourContentComponent />
//     )}
//   </div>
// );
// }