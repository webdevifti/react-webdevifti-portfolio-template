import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsItems = () => {
    const testimonialData = [
        {
            id: 1,
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, a nihil cumque veritatis vero officia blanditiis dolore? Mollitia corrupti magni, incidunt magnam iusto atque iste eaque dolores vel quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facere commodi.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcC7tEjV_h-nyGUPrLvGkpsEAEdj5wMpb7Sw&usqp=CAU",
            name: "Jon Brown",
            desgnation: "Graphic Designer",
        },
        {
            id: 2,
            review: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST73FQnX9PEZS8Xmyyt2jKlXeoDkHzpIiQww&usqp=CAU",
            name: "David Warner",
            desgnation: "Cricket Player",
        },

    ];

    const settings = {
        autoplay: true,
        speed: 15,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    
    return (
        <Slider {...settings}>
            {testimonialData.map((data) => {
                return (
                    <div className="testimonial-items" key={data.id}>
                        <img src={data.img} className="client-image" alt="" />
                        <p className="client-review">{data.review}</p>
                        <div className="meta-data">
                            <h3 className="client-name">{data.name}</h3>
                            <h4 className="client-designation">{data.desgnation}</h4>
                        </div>
                    </div>
                )
            })}
        </Slider>
       
    )
}

export default TestimonialsItems
