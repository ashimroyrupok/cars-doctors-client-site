import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    return (
        <Link to={`/checkout/${service._id}`}>
                <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title"> {service.title} </h2>
                <p>Price: {service.price}</p>
            </div>
        </div>
        </Link>
    );
};

export default ServiceCard;