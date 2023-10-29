import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Booking = () => {
    const {user}=useContext(AuthContext)
    const [bookings,setBookings]= useState([])

    const uri = `http://localhost:5000/bookings?email=${user.email}`
    useEffect(() => {
        fetch(uri)
        .then(res => res.json())
        .then(data => {
            setBookings(data)
        })
    },[])
    return (
        <div>
            {bookings.length}
            
        </div>
    );
};

export default Booking;