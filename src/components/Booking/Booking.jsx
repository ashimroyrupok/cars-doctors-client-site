import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
// import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Booking = () => {
    // const { user } = useContext(AuthContext)
    const  {user} = useAuth()
    const [bookings, setBookings] = useState([])
    const axiosSecure = useAxiosSecure()

    const url = `http://localhost:5000/bookings?email=${user.email}`
    useEffect(() => {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data)
        //     })
        // axios.get(url, {withCredentials:true})
        // .then(res => {
        //     setBookings(res.data)
        // })
        axiosSecure.get(url)
        .then(res => {
            setBookings(res.data)
        })
    }, [])

    

    const handleDelete = id => {
        const proceed = confirm('Are you sure ,you want to delete?')
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}` , {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = bookings.filter(booking => booking._id !== id)
                setBookings(remaining)
            })
        }
    }

    const handleConfirm =id => {
        fetch(`http://localhost:5000/bookings/${id}` , {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({status:"confirm"})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = bookings.filter(booking => booking._id !== id)
            const update = bookings.find(booking => booking._id === id)
            update.status= "confirm"
            const newBookings = [update,...remaining]
            setBookings(newBookings)
        })
    }

    return (
        <div>
            {bookings.length}

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Image</th>
                                <th>Service</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                bookings.map(booking => <tr key={booking._id}>
                                    <th >
                                        <button onClick={() => handleDelete(booking._id)} className="btn btn-circle btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={booking?.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{booking.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>

                                        {booking.email}

                                    </td>
                                    <td> {booking.date} </td>
                                    <td> Price: {booking.price} </td>
                                    <th>
                                       { booking.status === "confirm" ? <span className="text-primary">Confirmed</span>:
                                       <button onClick={() => handleConfirm(booking._id)} className="btn btn-ghost btn-xs">Confirm</button>}
                                    </th>
                                </tr>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default Booking;