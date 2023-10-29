import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData()
    const {user} = useContext(AuthContext)

    const handleBookService =e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.amount.value

        const order = {
            customerName: name,
            email,
            date,
            service:service.service,
            img:service.img,
            service_id: service._id,
            price
        }

        // console.log(order);
        fetch('http://localhost:5000/bookings' , {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>


            <div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <h3 className="text-black text-3xl font-bold text-center"> {service.title} </h3>
                    <form onSubmit={handleBookService} className="card-body" >

                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">date</span>
                                </label>
                                <input type="date" name="date" placeholder="date" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input defaultValue={user?.email} type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due Amount</span>
                                </label>
                                <input type="text"  name="amount"  defaultValue={"$" + service.price } className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="w-full my-4">
                            <button className="w-full mx-auto btn btn-warning" type="submit">Order</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default CheckOut;