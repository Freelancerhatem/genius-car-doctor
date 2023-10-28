import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import CheckCard from "./CheckCard";



const MyCheckOut = () => {
    const { user } = useContext(AuthContext);
    const [CheckOutinfo, setCheckOutinfo] = useState([]);
    
    // const[mapdata,setMapdata]
    


    useEffect(() => {
        fetch(`http://localhost:5000/checkout?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCheckOutinfo(data);

            });

    }, []);
    

    const handleDelete = id => {
        const proceed = confirm('are you sure?')
        if (proceed) {
            fetch(`http://localhost:5000/checkout/${id}`,{
                method:'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                   console.log(data)
                   const remainingmapdata = CheckOutinfo.filter(deldata=>deldata._id!= id) ;
                   setCheckOutinfo(remainingmapdata);
                    
                });
        }
        



    }
    const handleUpdate = id =>{
        fetch(`http://localhost:5000/checkout/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                const Remaining = CheckOutinfo.filter(datainfo=>datainfo._id!=id);
                const updateData = CheckOutinfo.find(datainfo=>datainfo._id==id);
                updateData.status = 'confirm';
                setCheckOutinfo([updateData,...Remaining]);

            }
            
            console.log(data)
        
        });
        // location.reload();
    }

    

    return (
        <div>
            {
                CheckOutinfo.map((checkout, index) => <CheckCard key={index} handleDelete={handleDelete} handleUpdate={handleUpdate} checkout={checkout}></CheckCard>)
            }

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