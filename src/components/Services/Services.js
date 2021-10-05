import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Services = () => {
    const [courses, setCourses] = useState([]); // define state
    useEffect(() => {
        fetch('./tools1.json') //load data from fakedata
            .then(res => res.json())
            .then(data => setCourses(data))
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
                    {courses?.map((course) => (
                        <div className="col-md-4">
                            <div className="cart">
                                <div className="text-area">
                                    <h4>Name: {course.name}</h4>
                                    <p> {course.description}</p>
                                    <h5 style={{ backgroundColor: 'orange', color: 'black' }}>Price: ${course.price}</h5>
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