import React from 'react';
import { FaCogs, FaMobileAlt, FaMapMarkedAlt, FaAccessibleIcon, FaAddressBook, FaAirbnb } from "react-icons/fa";

const ServicesItems = () => {
    const serviceItem = [
        {
            id: 1,
            icon: <FaCogs />,
            title: "Best Service",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo quia nemo nostrum aspernatur id repellat! Delectus quaerat aliquid cum.",
        },
        {
            id: 2,
            icon: <FaMobileAlt />,
            title: "Best Service",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo quia nemo nostrum aspernatur id repellat! Delectus quaerat aliquid cum.",
        },
        {
            id: 3,
            icon: <FaMapMarkedAlt />,
            title: "Best Service",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo quia nemo nostrum aspernatur id repellat! Delectus quaerat aliquid cum.",
        },
        {
            id: 4,
            icon: <FaAccessibleIcon />,
            title: "Best Service",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo quia nemo nostrum aspernatur id repellat! Delectus quaerat aliquid cum.",
        },
        {
            id: 5,
            icon: <FaAddressBook />,
            title: "Best Service",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo quia nemo nostrum aspernatur id repellat! Delectus quaerat aliquid cum.",
        },
        {
            id: 6,
            icon: <FaAirbnb />,
            title: "Best Service",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo quia nemo nostrum aspernatur id repellat! Delectus quaerat aliquid cum.",
        }
    ]
    return (
        <div className="services-wrapper">
            { serviceItem.map((item) => {
                return (
                    <div key={item.id} className="service-card">
                        <span>{item.icon}</span>
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                    </div>
                )
            })}
           
        </div>
    )
}

export default ServicesItems
