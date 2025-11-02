import Slider from "react-slick";

// import { Button } from "@/components/ui/button";
// import { ArrowUpRight } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "./footer";
import "./style.css";

function SimpleSlider() {

  const [services, setServices] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  
  // const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";


  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${API_URL}/services`);
        setServices(response.data);
      } catch(error) {
        console.log(error);
      }
    };
        fetchServices();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300000
  };

  return(
    <>
    <div className="slider-container mt-16 mcontainer  px-7 md:px-20 ">
      <Slider {...settings}>
    {services.map((service) => (
      <div key={service._id} className=" bg-base-500">
        <main className="container md:py-5">
          <div className="grid  lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1 mt-0">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mt-0">{service.name}</h1>
              <p className="text-sky-100 ">
                {service.note}
              </p>
              <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center justify-center w-32">
                {service.action}
              </button>
            </div>
            <div className="relative h-70 flex items-baseline justify-center order-1 md:order-2 md:mb-10">
              <img
                src={service.image}
                alt={service.name + " illustration"}
                className="object-contain "
                loading="eager"
              />
            </div>
          </div>
        </main>
      </div>
    ))}
      </Slider>
    </div>
    <Footer />
    </>
  );

  // return (
  //   <>
  //   <main className="container md:py-5">
      
  //   </main><div className="slider-container mt-16 mcontainer  px-7 md:px-20 ">
  //     <Slider {...settings}>
  //   <div className=" bg-base-500">
  //     <main className="container md:py-5">
  //       <div className="grid  lg:grid-cols-2 lg:gap-12 items-center mt-0">
  //         <div className="space-y-6 order-2 md:order-1 mt-0">
  //           <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mt-0">ELECTRICITY BILL PAYMENT</h1>
  //           <p className="text-sky-100 ">
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  //           </p>
  //           <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center justify-center w-32">
  //             Pay
  //           </button>
  //         </div>

  //         <div className="relative h-70 flex items-baseline justify-center order-1 md:order-2 md:mb-10">
  //           <img
  //             src="../../public/electric.png"
  //             alt="Electricity bill payment illustration"
  //             className="object-contain "
  //             loading="eager"
  //           />
  //         </div>
  //       </div>
  //     </main>
  //   </div>
  //   <div className=" bg-base-500">
  //     <main className="container md:py-5">
  //       <div className="grid  lg:grid-cols-2 lg:gap-12 items-center">
  //         <div className="space-y-6 order-2 md:order-1">
  //           <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">WATER BILL PAYMENT</h1>
  //           <p className="text-sky-100 ">
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  //           </p>
  //           <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center justify-center w-32">
  //             Pay
  //           </button>
  //         </div>

  //         <div className="relative h-70 flex items-center justify-center order-1 md:order-2">
  //           <img
  //             src="../../public/water.png"
  //             alt="Electricity bill payment illustration"
  //             className="object-contain w-full h-full max-h-[400px]"
  //             loading="eager"
  //           />
  //         </div>
  //       </div>
  //     </main>
  //   </div>
  //   <div className=" bg-base-500">
  //     <main className="container  mx-auto px-4 md:py-5">
  //       <div className="grid  lg:grid-cols-2 lg:gap-12 items-center">
  //         <div className="space-y-6 order-2 md:order-1">
  //           <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">GAS BILL PAYMENT</h1>
  //           <p className="text-sky-100 ">
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  //           </p>
  //           <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center justify-center w-32">
  //             Pay
  //           </button>
  //         </div>

  //         <div className="relative h-70 flex items-baseline justify-center order-1 md:order-2">
  //           <img
  //             src="../../public/gas.png"
  //             alt="Electricity bill payment illustration"
  //             className="object-contain w-full h-full max-h-[400px]"
  //             loading="eager"
  //           />
  //         </div>
  //       </div>
  //     </main>
  //   </div>
  //   <div className=" bg-base-500">
  //     <main className="container md:py-5">
  //       <div className="grid  lg:grid-cols-2 lg:gap-12 items-center">
  //         <div className="space-y-6 order-2 md:order-1">
  //           <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">MOBILE RECHARGE PAYMENT</h1>
  //           <p className="text-sky-100 ">
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  //           </p>
  //           <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center justify-center w-32">
  //             Pay
  //           </button>
  //         </div>

  //         <div className="relative h-70 flex items-center justify-center order-1 md:order-2">
  //           <img
  //             src="../../public/mobile.png"
  //             alt="Electricity bill payment illustration"
  //             className="object-contain w-full h-full max-h-[400px]"
  //             loading="eager"
  //           />
  //         </div>
  //       </div>
  //     </main>
  //   </div>
  //     </Slider>
  //   </div>
  //   <br />
  //   <Footer />
  //   </>
  // );
}

export default SimpleSlider;
