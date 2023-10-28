import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const CheckOut = () => {

    const { user } = useContext(AuthContext)

    const Checkoutdata = useLoaderData();

    // console.log(Checkoutdata)

    const { title, price, service_id } = Checkoutdata;    
    const handleCheckout = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const service = title;
        // const currentprice = form.price.value;
        const currentprice = price;
        const date = form.date.value;
        const checkoutinfo = { name, email, currentprice, date, service_id, service }

        fetch('http://localhost:5000/checkout', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(checkoutinfo)
        })
            .then(res => res.json())
            .then(data => console.log(data))





    }
    




    return (
        <div>
            <h2>this is checkout: {price} </h2>
            <h2>this is checkout: {title} </h2>
            <form className="px-14 my-6" onSubmit={handleCheckout}>

                <div className="w-full flex gap-4">
                    <label htmlFor="" className="w-1/2">
                        Name <br />
                        <input type="text" name="name" defaultValue={user?.displayName} className="border w-full" />
                    </label>
                    <label htmlFor="" className="w-1/2">
                        Email <br />
                        <input type="email" name="email" defaultValue={user?.email} className="border w-full" />
                    </label>
                </div>
                <div className="w-full flex gap-4 my-4">
                    <label htmlFor="" className="w-1/2">
                        Price <br />
                        <input type="number" name="price" defaultValue={price} className="border w-full" />
                    </label>
                    <label htmlFor="" className="w-1/2">
                        Date <br />
                        <input type="date" name="date" className="border w-full" />
                    </label>
                </div>

                <div className="w-full">
                    <button type="submit" className="btn btn-success w-full">Checkout</button>
                </div>


            </form>
        </div>
    );
};

export default CheckOut;