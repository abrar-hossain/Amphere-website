import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Services = () => {
    const [instructors, setInstructors] = useState([]); // define state
    useEffect(() => {
        fetch('./tools1.json') //load data from fakedata
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className="container all-services">
            <div className="all-service">
                <h1>Our Services</h1>
            </div>
            <div className="search-service">
                <input className="p-2" type="text" />{" "}
                <button className="btn p-2 btn-primary">Search</button>
            </div>
            <div className="services">
                <div className="row">
                    {instructors?.map((instructor) => (
                        <div className="col-md-4">
                            <div className="cart">
                                <div className="cart-details">
                                    <img className="w-50" src={instructor.img} alt="" />
                                </div>
                                <div className="text-area">
                                    <h4>Name: {instructor.name}</h4>
                                    <h5>Occupation: {instructor.occupation}</h5>
                                    <h5>Service: {instructor.service}</h5>
                                    <h5>Price: {instructor.price}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;