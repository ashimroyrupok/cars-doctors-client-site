import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"
const AboutUs = () => {
    return (
        <div className="hero h-[60vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 relative">
                <img src={person}  className="w-[75%] rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 absolute top-1/2 right-5 border-8 border-white rounded-lg shadow-2xl" />
                </div>

                <div className="w-1/2 space-y-5">
                    <h2 className="text-3xl font-bold text-warning">About Us</h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;