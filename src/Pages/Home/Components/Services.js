import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from "../../../assets/sliderimg1.jpg"
import img2 from "../../../assets/sliderimg2.jpg"
import img3 from "../../../assets/sliderimg3.jpg"
import img4 from "../../../assets/sliderimg4.jpg"
import img5 from "../../../assets/sliderimg5.jpg"
import img6 from "../../../assets/sliderimg6.jpg"


import React from 'react'

const Services = () => {

  const images = [img1,img2,img3,img4,img5,img6]

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
   <>
    <h1 className='heading'>Services</h1>
    <section className="services">
    <Slider {...settings}>
{
    images.map((image)=>{
        return(
            <div>
            <img src={image} alt="" />
            </div>
        )
    })
}
    </Slider>
    </section>
   </>
  )
}

export default Services
