import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import Services from "../../public/services.json";
import { useEffect, useState } from 'react';
import Card from "./card";
import "./style.css";

const SerCards = () => {
  const [services, setServices] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL 


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

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-7 md:px-20 space-x-1">
      <div className="slider-container">
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id}>
              <Card
                name={service.name}
                note={service.note}
                action={service.action}
                image={service.image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SerCards;
