import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/3.jpg"
import img4 from "../../assets/images/banner/4.jpg"
const Banner = () => {
    return (
        <div className="carousel w-full h-[70vh] my-10">
            <div id="slide1" className="carousel-item relative rounded-xl w-full">
                <img src={img1} className="w-full" />
                <div className="absolute  w-full  flex items-center space-y-4  h-full top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-3  ">
                    <div className="w-1/3 pl-4 ">
                        <h2 className="text-3xl space-y-4 font-bold text-white">Affordable Price For Car Servicing  </h2>
                        <p className="my-3 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-active btn-warning">Discover More</button>
                        <button className="btn btn-active btn-outline ml-5">Booking</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute  w-full  flex items-center space-y-4  h-full top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-3  ">
                    <div className="w-1/3 pl-4 ">
                        <h2 className="text-3xl space-y-4 font-bold text-white">Affordable Price For Car Servicing  </h2>
                        <p className="my-3 text-white ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-active btn-warning">Discover More</button>
                        <button className="btn btn-active btn-outline ml-5">Booking</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute  w-full  flex items-center space-y-4  h-full top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-3  ">
                    <div className="w-1/3 pl-4 ">
                        <h2 className="text-3xl space-y-4 font-bold text-white">Affordable Price For Car Servicing  </h2>
                        <p className="my-3 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-active btn-warning">Discover More</button>
                        <button className="btn btn-active btn-outline ml-5">Booking</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute  w-full  flex items-center space-y-4  h-full top-0 left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-3  ">
                    <div className="w-1/3 pl-4 ">
                        <h2 className="text-3xl space-y-4 font-bold text-white">Affordable Price For Car Servicing  </h2>
                        <p className="my-3 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-active btn-warning">Discover More</button>
                        <button className="btn btn-active btn-outline ml-5">Booking</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;