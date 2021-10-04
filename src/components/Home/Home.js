import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('./tools.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className="container all-services">
            <hr />
            <h1 className="text-danger">Higher Study & Exam Prep</h1>
            <hr />
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
                                    <h3>Name: {instructor.name}</h3>
                                    <h4>Occupation: {instructor.occupation}</h4>
                                    <h4>Service: {instructor.service}</h4>
                                    <h4>Price: {instructor.price}</h4>
                                    {/*  <Link to={`/details/${instructor.idTeam}`}>
                                        <button className="btn btn-success">Details</button>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;