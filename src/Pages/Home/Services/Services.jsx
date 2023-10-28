import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const[Data,setdata] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setdata(data))
    },[])
    
  
    if(Data.length < 6){
       return(
        <div className="w-screen h-20 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold">data is loading</span>
            <span className="loading loading-spinner text-error"></span>
        </div>
       )  
    }
    else{
        return (
            <div>
                <h3 className="text-3xl text-center mt-4 text-orange-500 font-bold">Services</h3>
                    <p className="text-center text-lg">We offer an extensive selection of vehicles, from sleek sedans to rugged SUVs and powerful trucks. You are sure to find the perfect car that matches your style and needs.</p>            
                {
                    
                    
                        <div className="grid grid-cols-3 my-12 gap-32 px-14">
                    {
                        Data.map((singledata,index)=><ServiceCard key={index} singledata={singledata}></ServiceCard>)
                    }
                </div>
                    
                }
                
                
            </div>
        );
 } 

};

export default Services;