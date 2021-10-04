import React from "react";
import { Col, Container, Row } from "react-bootstrap";


const Footer = () => {
    return (

        <Container className="mt-5 pt-5" style={{ backgroundColor: "#0063B2FF", color: "white" }}>
            <Row>
                <Col>
                    <h4>Our Branches</h4>
                    <p>Dhaka</p>
                    <p>Chattagram</p>
                    <p>Sylhet</p>
                    <p>Rajshahi</p>
                </Col>
                <Col>
                    <h4>Important Links</h4>
                    <p>Contact US</p>
                    <p>Newsletter</p>
                    <p>Career</p>
                </Col>
                <Col>
                    <h4>Subscribe</h4>
                    <br />
                    <h6>Email</h6>
                    <div className="search-service">
                        <input className="p-2" type="text" />{" "}
                        <button className="btn p-2 btn-dark">Search</button>
                    </div>
                </Col>
            </Row>
            <hr />
            <div>
                <h5 className="text-center pb-5">Copyright © 2021  All rights reserved</h5>
            </div>
        </Container>
    );
};

export default Footer;